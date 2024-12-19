window.addEventListener('DOMContentLoaded', () => {
document.addEventListener('contextmenu', event => event.preventDefault());


    document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' ||
    (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) ||
    (event.ctrlKey && event.key === 'U')) {
    event.preventDefault();
}
});
});

