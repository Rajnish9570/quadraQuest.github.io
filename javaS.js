// Disable zooming with mouse wheel and touchpad
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// Disable zooming with keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) || e.key === 'F11') {
        e.preventDefault();
    }
});

// Disable pinch to zoom on touch devices
document.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });

// Prevent zoom on double-tap (for mobile devices)
var lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);


// Disable text selection for copy
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
});
