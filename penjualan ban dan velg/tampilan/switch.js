const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
});

// Check for mode in local storage on page load
window.addEventListener('load', () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.checked = true;
    } else {
        body.classList.add('light-mode');
        modeToggle.checked = false;
    }
});
