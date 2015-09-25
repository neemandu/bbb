app
.factory('DALService', function($cordovaSQLite) {
    var addNewGroup = function(group) {

        console.log('Saved new group ' + JSON.stringify(group));

    };

    return {
        addNewGroup : addNewGroup
    }
});