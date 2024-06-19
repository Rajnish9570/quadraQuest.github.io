// Disable zooming
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) || e.key === 'F11') {
        e.preventDefault();
    }
});

// Disable text selection for copy
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
});
