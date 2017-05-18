angular.module("DallasNetworkApp")
.controller("TempCtrl", ["$scope", "ImageService", function($scope, ImageService) {
    // Get a reference to the database service

    $scope.getImgURL = function(namePic) {
      return ImageService.getImgURL(namePic);
    };

}]);
