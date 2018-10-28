var app = {
    version : '1.0.0',
    eventTarget : 'click',
    isCordovaApp : false,
    isCameraAvailable : false,
    isStorageAvailable : false,

    //
    hook : function () {
        new FastClick(document.body);
        document.getElementById('exitApp').addEventListener(app.eventTarget,
            function () { navigator.app.exitApp(); },
            false);
        document.getElementById('getImage').addEventListener(app.eventTarget,
            function () { cameraPlugin.getPicture() },
            false);
    },
    //
    onDOMContentLoaded : function () {
        app.hook();
        //
        document.getElementById('appVersion').innerHTML   = app.version;
        //
        // check for available storage
        //
        app.isStorageAvailable = localStore.isStorageAvailable('localStorage');
        document.getElementById('status1').innerHTML = app.isStorageAvailable;
        if (app.isStorageAvailable) {
            document.getElementById('imgLocalStore').className = 'expose';
        } else {
            document.getElementById('imgLocalStore').className = 'hidden';
        }
    },
    //
    onDeviceReady : function () {
        // - https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
        app.isCordovaApp = (typeof window.cordova !== "undefined");
        app.eventTarget  = 'touchend';
        //
        // check for camera
        //
        app.isCameraAvailable  = cameraPlugin.isCameraAvailable();
        document.getElementById('status2').innerHTML = app.isCameraAvailable;
        if (app.isCameraAvailable) {
            cameraPlugin.init('theImage');
            document.getElementById('imgCamera').className = 'expose';
        } else {
            document.getElementById('imgCamera').className = 'hidden';
        }
    }
}
