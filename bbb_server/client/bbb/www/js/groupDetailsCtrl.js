app
.controller('groupDetailsCtrl', function($scope, $stateParams, $ionicPopover, Group) {

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/groupPopover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  console.log('$stateParams.id : ' + $stateParams.groupId );
   $scope.group = Group.findById({ id: $stateParams.groupId });  
   $scope.events = [
    { name: 'Michalis Birthday', id: 1 },
    { name: 'Yelenas Birthday', id: 2 }
  ];
  $scope.removeGroup = function(){

      Group.deleteById({ id: $scope.group.id });
  };
})