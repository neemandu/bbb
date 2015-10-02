app
.controller('eventDetailsCtrl', function($scope, $stateParams, $ionicPopover, Group, Event) {

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/groupPopover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  console.log('$stateParams.id : ' + $stateParams.eventId );
   Event.findById({ id: $stateParams.eventId }).
   $promise.then(function (event) {
      $scope.event = event;
      console.log('$scope.event.name : ' + JSON.stringify($scope.event.name));
   }); 
  $scope.removeGroup = function(){

      Group.deleteById({ id: $scope.group.id });
  };
})