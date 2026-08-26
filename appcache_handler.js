function get_appcache_state() {
    var appCache = window.applicationCache;

    switch (appCache.status) {
        case appCache.UNCACHED: // UNCACHED == 0
            return 'UNCACHED';
            break;
        case appCache.IDLE: // IDLE == 1
            return 'IDLE';
            break;
        case appCache.CHECKING: // CHECKING == 2
            return 'CHECKING';
            break;
        case appCache.DOWNLOADING: // DOWNLOADING == 3
            return 'DOWNLOADING';
            break;
        case appCache.UPDATEREADY:  // UPDATEREADY == 4
            return 'UPDATEREADY';
            break;
        case appCache.OBSOLETE: // OBSOLETE == 5
            return 'OBSOLETE';
            break;
        default:
            return 'UKNOWN CACHE STATUS';
            break;
    };

}

function add_cache_event_toasts() {
    var appCache = window.applicationCache;

    // SOLO mostrar notificación si estamos offline
    if (!navigator.onLine) {
        showToast('Please connect internet', 300000);


        var errorDiv = document.getElementById('fw-error');
        if (errorDiv) {

            var msgDiv = errorDiv.querySelector('div[style*="color:#e05561"]');
            if (msgDiv) {
                msgDiv.textContent = '⚠️ You need the internet to activate the exploit.';
            }

            errorDiv.style.display = 'flex';


            var waitText = document.getElementById('mensaje-inicio');
            if (waitText) {
                waitText.style.display = 'none';
            }
        }
    }

    //
    /*
    appCache.addEventListener('downloading', function (e) {
        showToast('★ Downloading cache...');
    }, false);

    appCache.addEventListener('cached', function (e) {
        setTimeout(function() {
            showToast('★ Successfully ! ㋡');
        }, 2000);
    }, false);

    appCache.addEventListener('obsolete', function (e) {
        showToast('Clear cache and restart');
    }, false);

    appCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            showToast('Site was updated. Refresh ',8000);
        }
    }, false);
    */
}
