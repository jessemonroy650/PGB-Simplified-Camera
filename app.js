var app = {
    version : '1.0.0',
    eventTarget : 'click',
    isCordovaApp : false,
    isCameraAvailable : false,

    // trap our buttons, and remove the delay with `FastClick()`
    hook : function () {
        new FastClick(document.body);
        document.getElementById('exitApp').addEventListener(app.eventTarget,
            function () { navigator.app.exitApp(); },
            false);
        document.getElementById('getImage').addEventListener(app.eventTarget,
            function () {
                document.getElementById('status').innerHTML = "Getting Camera ... ";
                // use a short timeout, text does not display
                setTimeout(cameraPlugin.getPicture, 200);
            },
            false);
    },
    //
    onDOMContentLoaded : function () {
        app.hook();
        //
        document.getElementById('appVersion').innerHTML   = app.version;
    },
    //
    onDeviceReady : function () {
        // - https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
        app.isCordovaApp = (typeof window.cordova !== "undefined");
        document.getElementById('status0').innerHTML = app.isCordovaApp;
        app.eventTarget  = 'touchend';
        //
        // check for camera
        //
        app.isCameraAvailable = cameraPlugin.isCameraAvailable();
        // expose or hide the "camera.png" icon 
        document.getElementById('status2').innerHTML = app.isCameraAvailable;
        if (app.isCameraAvailable) {
            document.getElementById('imgCamera').className = 'expose';
        } else {
            document.getElementById('imgCamera').className = 'hidden';
        }
    }
}
