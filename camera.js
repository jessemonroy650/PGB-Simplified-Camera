//
//    
//
var cameraPlugin = {
    version : '0.9.0',
    dataURLPrefix : "data:image/jpeg;base64,",
    gotCamera     : false,
    imageSlot     : '',

    isCameraAvailable :  function () {
        return (typeof navigator.camera  !== "undefined");
    },
    //
    init : function (slot) {
        cameraPlugin.gotCamera = (typeof navigator.camera  !== "undefined");
        cameraPlugin.imageSlot = slot;
    },
    //
    getPicture : function () {
        document.getElementById('status').innerHTML = "getting";
        navigator.camera.getPicture(cameraPlugin.onSuccess, cameraPlugin.onFail, 
            {quality: 50, destinationType: Camera.DestinationType.DATA_URL,
             EncodingType: Camera.EncodingType.JPEG}
            );
    },
    //
    onSuccess : function (imageData) {
        document.getElementById('status').innerHTML = "got image " + cameraPlugin.imageSlot;
        var image = document.getElementById(cameraPlugin.imageSlot);
        // image.src = imageData;
        image.src = "data:image/jpeg;base64," + imageData;
        //document.getElementById('imageData').innerHTML = imageData;
    },
    //
    onFail : function (message) {
        alert('Failed because: ' + message);
    }
};

