document.addEventListener('DOMContentLoaded', loadWords);
document.getElementById('addButton').addEventListener('click', addWord);

function loadWords() {
    chrome.storage.sync.get('wordReplacements', function (data) {
        console.log( "drache",data.wordReplacements)
        let words = data.wordReplacements;

        // Wenn keine Wörter gespeichert sind, verwende die Standardwörter

        console.log("Anfangswörter gespeichert")
        // words = defaultReplacements;
        chrome.storage.sync.set({ 'wordReplacements': words });


        const tbody = document.querySelector('#wordTable tbody');
        tbody.innerHTML = '';
        for (const [original, replacement] of Object.entries(words)) {
            const row = tbody.insertRow();
            row.innerHTML = `
          <td>${original}</td>
          <td>${replacement}</td>
          <td><button class="remove-button" data-original="${original}">Löschen</button></td>
        `;
        }
        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                removeWord(button.getAttribute('data-original'));
            });
        });
    });
}

function addWord() {
    const original = document.getElementById('originalWord').value.trim();
    const replacement = document.getElementById('replacementWord').value.trim();
    if (original && replacement) {
        chrome.storage.sync.get('wordReplacements', function (data) {
            const words = data.wordReplacements || {};
            words[original] = replacement;
            chrome.storage.sync.set({ 'wordReplacements': words }, loadWords);
        });
        document.getElementById('originalWord').value = '';
        document.getElementById('replacementWord').value = '';
    }
}

function removeWord(original) {
    chrome.storage.sync.get('wordReplacements', function (data) {
        const words = data.wordReplacements || {};
        delete words[original];
        chrome.storage.sync.set({ 'wordReplacements': words }, loadWords);
    });
}