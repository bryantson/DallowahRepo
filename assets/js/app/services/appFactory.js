angular.module("DallasNetworkApp")
.factory("ImageService", [function() {
    var urlImg = "https://firebasestorage.googleapis.com/v0/b/dallaskoreannetwork.appspot.com/o/images";
  return {
    getImgURL : function(id) {
      var namePic = "";
      namePic += "test.jpg";
      return urlImg + "%2F" + "common" + "%2F" + namePic + "?alt=media";
    }
  }
}]);
