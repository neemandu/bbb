app
.controller('GroupsCtrl', function($scope, $ionicPopover, Group) {

Group.find({ order: 'name ASC'}).
$promise.then(function (results) {
      $scope.groups = results;
});


  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/addGroupPopover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  

})