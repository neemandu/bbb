app
.factory('SearchDataService', function($q, $timeout) {

    var searchPhoneContacts = function(searchedContacts, phoneContacts) {
         
        console.log('Searching contact ' + searchedContacts.search);

        var deferred = $q.defer();

      var matches = phoneContacts.filter( function(contact) {
        if(contact.name.formatted.toLowerCase().indexOf(searchedContacts.search.toLowerCase()) !== -1 ) return true;
      })

        $timeout( function(){
        
           deferred.resolve( matches );

        }, 100);
        searchedContacts.contacts = matches;
        return deferred.promise;

    };

    return {

        searchPhoneContacts : searchPhoneContacts

    }
});