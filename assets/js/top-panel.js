// top-panel.js
async function loadTopPanel() {
    try {
        const response = await fetch('/top-panel.html');
        const html = await response.text();
        document.getElementById('top-panel-placeholder').innerHTML = html;
    } catch (error) {
        console.error('Ошибка загрузки топ-панели:', error);
    }
}

// Добавляем иконку при загрузке
function addFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = '/assets/logo.png';
    document.head.appendChild(link);
    
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = '/assets/logo.png';
    document.head.appendChild(appleLink);
}

document.addEventListener('DOMContentLoaded', () => {
    loadTopPanel();
    addFavicon();
});
