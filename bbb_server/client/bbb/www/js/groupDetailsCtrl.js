app
.controller('groupDetailsCtrl', function($scope, $stateParams, $ionicPopover, Group) {

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/groupPopover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  console.log('$stateParams.id : ' + $stateParams.groupId );
   Group.findById({ id: $stateParams.groupId }).
   $promise.then(function (group) {
      $scope.group = group;
      console.log('$scope.group.name : ' + JSON.stringify($scope.group.name));
   });  
   
   Group.events({id: $stateParams.groupId}).
   $promise.then(function (events) {
      $scope.events = events;
      console.log('events : ' + JSON.stringify(events));
   }).catch(function(e) {
      console.log('error: ' + JSON.stringify(e.status)); // "oh, no!"
    });
  /* $scope.events = [
    { name: 'Michalis Birthday', id: 1 },
    { name: 'Yelenas Birthday', id: 2 }
  ];*/
  $scope.removeGroup = function(){

      Group.deleteById({ id: $scope.group.id });
  };
})