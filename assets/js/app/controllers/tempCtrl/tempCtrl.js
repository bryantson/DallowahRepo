angular.module("DallasNetworkApp")
.controller("TempCtrl", ["$scope", "$window", "ImageService", function($scope, $window, ImageService) {
    // Get a reference to the database service

    $scope.getImgURL = function(namePic) {
      return ImageService.getImgURL(namePic);
    };

    $scope.go2SocialWebsite = function(type) {
      var urlMeetup = "https://meetup.com/dallowah";
      var urlFacebook = "https://www.facebook.com/Dallowah-1905348473030161";
      var urlInstagram = "https://www.instagram.com/dallowah";

      if(type == "meetup") {
        $window.open(urlMeetup, '_blank');
      }
      else if (type == "instagram") {
        $window.open(urlInstagram, '_blank');
      }
      else if (type == "facebook") {
        $window.open(urlFacebook, '_blank');
      }
    };

}]);
