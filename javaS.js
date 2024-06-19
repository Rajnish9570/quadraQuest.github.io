
   // Disable text selection
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });

        // Disable context menu
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Disable zooming
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        });

        document.addEventListener('gesturechange', function (e) {
            e.preventDefault();
        });

        document.addEventListener('gestureend', function (e) {
            e.preventDefault();
        });

        document.addEventListener('touchstart', function (e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });

        document.addEventListener('touchmove', function (e) {
            if (e.scale !== 1) {
                e.preventDefault();
            }
        }, { passive: false });
