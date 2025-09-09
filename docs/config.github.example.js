// Пример конфигурации для GitHub Pages
// Скопируйте этот файл в config.github.js и измените пароль
// config.github.js добавлен в .gitignore и не будет загружен в GitHub
window.ADMIN_CONFIG = {
    // Пароль для доступа к админ-панели (ИЗМЕНИТЕ ПЕРЕД ПУБЛИКАЦИЕЙ!)
    password: 'your_secure_password_here', // Измените этот пароль!
    
    // Можно добавить другие настройки безопасности
    maxLoginAttempts: 3,
    sessionTimeout: 30 * 60 * 1000, // 30 минут в миллисекундах
};
