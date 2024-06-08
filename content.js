chrome.storage.sync.get('wordReplacements', function(data) {
  const replacements = data.wordReplacements || {};
  function replaceText() {
    try {
      var elements = document.querySelectorAll('*:not(script):not(style):not(link)');
      elements.forEach(element => {
        element.childNodes.forEach(child => {
          if (child.nodeType === 3) { // Text node
            let text = child.nodeValue;
            for (const [original, replacement] of Object.entries(replacements)) {
              const regex = new RegExp(original, 'gi');
              if (regex.test(text)) {
                child.nodeValue = text.replace(regex, replacement);
              }
            }
          }
        });
      });
    } catch (error) {
      console.error("Error in replaceText:", error);
    }
  }

  try {
    replaceText();
  } catch (error) {
    console.error("Error in event listener or replaceText execution:", error);
  }

  document.addEventListener("DOMContentLoaded", replaceText);

  // Set up MutationObserver to watch for changes to the DOM
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        replaceText();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
