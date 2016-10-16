angular.module('starter.services', [])

.factory('subtitles', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var subtitles = [{
    id: 0,
    name: 'The Hunger Games part 2: Mo...',
    lastText: '2:34:04',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'The Hunger Games part 2: Mo...',
    lastText: '2:34:04',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'The Hunger Games part 2: Mo...',
    lastText: '2:34:04',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'The Hunger Games part 2: Mo...',
    lastText: '2:34:04',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'The Hunger Games part 2: Mo...',
    lastText: '2:34:04',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return subtitles;
    },
    remove: function(chat) {
      subtitles.splice(subtitles.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < subtitles.length; i++) {
        if (subtitles[i].id === parseInt(chatId)) {
          return subtitles[i];
        }
      }
      return null;
    }
  };
});
