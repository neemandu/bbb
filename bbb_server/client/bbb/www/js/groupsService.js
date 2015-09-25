app
.factory('Groups', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var groups = [{ name: 'Reggae', id: 1 },
    { name: 'Chill', id: 2 },
    { name: 'Dubstep', id: 3 },
    { name: 'Indie', id: 4 },
    { name: 'Rap', id: 5 },
    { name: 'Cowbell', id: 6 }];

  return {
    all: function() {
      return groups;
    },
    remove: function(group) {
      groups.splice(groups.indexOf(group), 1);
    },
    get: function(groupId) {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].id === parseInt(groupId)) {
          return groups[i];
        }
      }
      return null;
    }
  };
});
