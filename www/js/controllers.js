angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('subtitlesCtrl', function($scope, subtitles) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.subtitles = subtitles.all();
  $scope.remove = function(chat) {
    subtitles.remove(chat);
  };
})

// .controller('ChatDetailCtrl', function($scope, $stateParams, subtitles) {
//   $scope.chat = subtitles.get($stateParams.chatId);
// })

.controller('AccountCtrl', function($scope, $state) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.goNext = function() {
    $state.go('tab.chat-detail');
  };
})


.controller('ChatDetailCtrl', function($scope) {
  // $scope.settings = {
  //   enableFriends: true
  // };
});
