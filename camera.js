//
//    
//
var cameraPlugin = {
    version : '0.9.0',

    isCameraAvailable :  function () {
        return (typeof navigator.camera  !== "undefined");
    },
    //
    getPicture : function () {
        navigator.camera.getPicture(cameraPlugin.onSuccess, cameraPlugin.onFail, 
            {quality: 50, destinationType: Camera.DestinationType.DATA_URL,
             //sourceType: Camera.PictureSourceType.PHOTOLIBRARY // This is for testing
             EncodingType: Camera.EncodingType.JPEG     // Added to be explict, even though this is the `default`
            });
    },
    //
    // When using `data:`, it is required that `data:` be included in the `Content-Security-Policy`
    // NOTE: This method can be overridden in the the main app.
    onSuccess : function (imageData) {
    },
    //
    onFail : function (message) {
        alert('Failed because: ' + message);
    }
};

