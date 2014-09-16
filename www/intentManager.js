var intentManager = {
    openLocation: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'IntentManager', 'openLocation',[{}]);
    },
    openGooglePlay: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'IntentManager', 'openGooglePlay',[{}]);
    },
    openSetting: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'IntentManager', 'openSetting',[{}]);
    }
}

module.exports = intentManager;