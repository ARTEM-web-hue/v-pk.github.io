// assets/js/top-panel.js

// Функция для загрузки топ-панели
async function loadTopPanel() {
    try {
        const response = await fetch('/top-panel.html');
        const html = await response.text();
        document.getElementById('top-panel-placeholder').innerHTML = html;
        
        // Инициализируем меню после загрузки панели
        initDropdown();
    } catch (error) {
        console.error('Ошибка загрузки топ-панели:', error);
    }
}

// Функция для инициализации выпадающего меню
function initDropdown() {
    const menu = document.getElementById('vpk-dropdown-menu');
    const button = document.querySelector('.vpk-dropdown-btn');
    
    if (!menu || !button) return;
    
    // Функция переключения меню
    window.toggleDropdown = function() {
        menu.classList.toggle('show');
    };
    
    // Закрытие при клике вне меню
    document.addEventListener('click', function(event) {
        if (!button.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
}

// Добавляем иконку
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

// Загружаем всё после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    loadTopPanel();
    addFavicon();
});
