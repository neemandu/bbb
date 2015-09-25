app
.controller('addGroupCtrl', addGroupCtrl);
  function addGroupCtrl(DALService, SearchDataService, $ionicHistory, $cordovaContacts, Group) {
    this.ionicService = $ionicHistory;
    this.group = Group;
    this.DALService = DALService;
    this.cordovaContacts = $cordovaContacts;
    console.log('this.cordovaContacts: '+ JSON.stringify(this.cordovaContacts));
    this.searchDataService = SearchDataService;
    this.phoneContacts = [];
    this.searchedContacts = { "contacts" : [], "search" : '' };
    this.newGroupName = '';
    this.newGroupParticipants = [];

  //  this.getContacts();
    this.getPhoneContacts(this.cordovaContacts, this.phoneContacts);

  //  this.getPhoneContacts();
  //  this.sortPhoneContacts();
  }

  addGroupCtrl.prototype.myGoBack = function() {
    this.ionicService.goBack();
    console.log('bbbbb');
  };


  addGroupCtrl.prototype.search = function() {
      console.log('search');     
      this.searchDataService.searchPhoneContacts(this.searchedContacts, this.phoneContacts);
    };

  addGroupCtrl.prototype.sortPhoneContacts = function(){
      this.phoneContacts = this.phoneContacts.sort(function(a, b) {
 
        var contactA = a.name.toLowerCase();
        var contactB = b.name.toLowerCase();

        if(contactA > contactB) return 1;
        if(contactA < contactB) return -1;
        return 0;
      })
    };

  addGroupCtrl.prototype.addParticipantToGroup = function(contact, $index){
    console.log('addParticipantToGroup: '+contact.name);
    this.newGroupParticipants.push(contact);
    this.searchedContacts.contacts.splice($index, 1)
  };

  addGroupCtrl.prototype.getContacts = function() {
    console.log('getContacts');
     if(this.phoneContacts.length == 0)
     {
      //mock list
        for (var i = 0; i < 20; i++) {
          this.phoneContacts.push({name:"user_" + i, phone:"phone_"+i});
        }
     }
     this.sortPhoneContacts();
     //this.getPhoneContacts();
  };

  addGroupCtrl.prototype.getPhoneContacts = function(cordovaContacts1, phoneContacts) {
       function onSuccess(contacts){
          for(var i = 0; i < contacts.length; i++){
            var contact = contacts[i];
            phoneContacts.push(contact);
          }
       };

       function onError(contactError){
        console.error(contactError);
       };

       var options = {};
       options.multiple = true;
       this.cordovaContacts.find(options).then(onSuccess, onError);
  };

  addGroupCtrl.prototype.saveGroup = function(newGroupName) {
      console.log('saveGroup, name: ' + newGroupName);
      var date = new Date();
      console.log('date: ' +date);   
      this.group.create({
        "name": newGroupName,
        "createdBy": "dneeman",
        "createdDate": date
      });
      
      this.clear();
  };

  addGroupCtrl.prototype.removeContact = function($index){
    this.newGroupParticipants.splice($index, 1);
  };

  addGroupCtrl.prototype.clear = function(){
    this.newGroupParticipants = [];
    this.newGroupName = '';
  };