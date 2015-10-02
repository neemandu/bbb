/*app
  .controller('addEventCtrl', addEventCtrl);
function addEventCtrl($ionicHistory, $ionicPopup) {
  this.ionicPopup = $ionicPopup;
  this.name = '';
  this.place = '';
  this.datetime = 'ddd';
  this.modal = null;

  //  this.getPhoneContacts(this.cordovaContacts, this.phoneContacts);

  //  this.getPhoneContacts();
  //  this.sortPhoneContacts();
}

addEventCtrl.prototype.openDatePicker = function () {
  console.log(' datetime: ' + this.datetime);

  this.ionicPopup.show({
    template: '<datetimepicker ng-model="datetime"></datetimepicker>',
    title: "Event date",
    self: this,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function (e) {
          console.log(' datetime: ' + scope.datetime);
          this.datetime = scope.datetime
        }
      }
    ]
  });
};

addEventCtrl.prototype.saveEvent = function (newGroupName) {
      
  //   this.DALService.addNewEvent(this);
  console.log('saveEvent, name: ' + this.name);
  console.log('saveEvent, place: ' + this.place);
  console.log('saveEvent, datetime: ' + this.datetime);
  this.clear();
};



addEventCtrl.prototype.clear = function () {
  this.name = '';
  this.place = '';
  this.datetime = '';
};*/

app
.controller('addEventCtrl', ['$ionicPopup', '$scope', '$stateParams', 'Group', 'Event', function ($ionicPopup, $scope, $stateParams, Group, Event) {
    console.log(JSON.stringify($stateParams));
    $scope.params = {};
    $scope.params.groupId = $stateParams.groupId;
    $scope.params.name = 'ff';
    $scope.params.place = '';
    $scope.params.datetime = '';

  $scope.openDatePicker = function() {
    $scope.tmp = {};
    $scope.tmp.tmpdatetime = $scope.params.datetime;
    $ionicPopup.show({
     template: '<datetimepicker ng-model="tmp.tmpdatetime"></datetimepicker>',
     title: "Event date",
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           $scope.params.datetime = $scope.tmp.tmpdatetime;
         }
       }
     ]
    });
  };

  $scope.saveEvent = function() {
      console.log('$scope.groupId: '+$scope.params.groupId);
      console.log('$scope.name: '+$scope.params.name);
      console.log('$scope.place: '+$scope.params.place);
      console.log('$scope.datetime: '+$scope.params.datetime);

      Event.create({"groupId": $scope.params.groupId, 
                          "name": $scope.params.name,
                          "place": $scope.params.place,
                          "datetime": $scope.params.datetime,
                          "images": ["any"]}).
     $promise.then(function () {
       console.log('success saving event');
       $scope.clear();
     }).catch(function(e) {
      console.log('error: ' + JSON.stringify(e)); // "oh, no!"
    });
     
  };

  $scope.clear = function(){
    $scope.name = '';
    $scope.place = '';
    $scope.datetime = '';
  };
}]);