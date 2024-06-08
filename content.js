chrome.storage.sync.get('wordReplacements', function(data) {
  const replacements = data.wordReplacements || {};
  
  function replaceText(node) {
    try {
      if (node.nodeType === 3) { // Text node
        let text = node.nodeValue;
        for (const [original, replacement] of Object.entries(replacements)) {
          const regex = new RegExp(`\\b${original}\\b`, 'gi');
          if (regex.test(text)) {
            node.nodeValue = text.replace(regex, replacement);
          }
        }
      } else if (node.nodeType === 1) { // Element node
        node.childNodes.forEach(child => replaceText(child));
      }
    } catch (error) {
      console.error("Error in replaceText:", error);
    }
  }

  function replaceTextInDocument() {
    replaceText(document.body);
  }

  document.addEventListener("DOMContentLoaded", replaceTextInDocument);

  // Throttle the MutationObserver callback
  let scheduled = false;
  const observer = new MutationObserver(mutations => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(() => {
        mutations.forEach(mutation => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => replaceText(node));
          }
        });
        scheduled = false;
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Initial replacement
  try {
    replaceTextInDocument();
  } catch (error) {
    console.error("Error in event listener or replaceText execution:", error);
  }
});
