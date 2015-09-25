app
.controller('addEventCtrl', addEventCtrl);
  function addEventCtrl(DALService, $ionicHistory) {
    this.DALService = DALService;
    this.hour = {epochTime: 12600, format: 12, step: 15};
    this.newEventName = '';
    this.newEventLocation = '';
    this.newEventTime = '';

  //  this.getPhoneContacts(this.cordovaContacts, this.phoneContacts);

  //  this.getPhoneContacts();
  //  this.sortPhoneContacts();
  }

  addGroupCtrl.prototype.myGoBack = function() {
    $ionicHistory.goBack();
  };

 addGroupCtrl.prototype.timePickerCallback  = function(val){
    if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    console.log('Selected time is : ', val);    // `val` will contain the selected time in epoch
  }
 }
  

  addGroupCtrl.prototype.saveEvent = function(newGroupName) {
      
   //   this.DALService.addNewEvent(this);
      console.log('saveEvent, name: ' + this.newEventName);
      this.clear();
  };

  addGroupCtrl.prototype.removeContact = function($index){
    this.newGroupParticipants.splice($index, 1);
  };

  addGroupCtrl.prototype.clear = function(){
    this.newEventName = '';
  };