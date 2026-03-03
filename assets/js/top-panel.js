// Функция для загрузки топ-панели
async function loadTopPanel() {
    try {
        // Загружаем HTML панели
        const response = await fetch('/top-panel.html');
        const html = await response.text();
        document.getElementById('top-panel-placeholder').innerHTML = html;
    } catch (error) {
        console.error('Ошибка загрузки топ-панели:', error);
        document.getElementById('top-panel-placeholder').innerHTML = 
            '<div style="background: #2c3e50; color:white; padding:10px; text-align:center;">Ошибка загрузки панели</div>';
    }
}

// Загружаем после загрузки страницы
document.addEventListener('DOMContentLoaded', loadTopPanel);
