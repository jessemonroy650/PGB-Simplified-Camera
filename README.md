# PGB-Simplified-Camera
PGB Simplified Example Cordova 'Camera' plugin using `cli-7.1.0` with less CSS, less Javascript 

* https://www.npmjs.com/package/cordova-plugin-camera

**NOTE** When using `DATA_URL`, make sure to add `data:` to the `Content-Security-Policy`.

## Minimum Use

This is straight from the documentation.

```
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}
/**
 * Warning: Using DATA_URL is not recommended! The DATA_URL destination
 * type is very memory intensive, even with a low quality setting. Using it
 * can result in out of memory errors and application crashes. Use FILE_URI
 * or NATIVE_URI instead.
 */
navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
```
