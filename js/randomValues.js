'use strict';

(function () {
  var HEROES_COUNT = 4;

  window.randomInteger = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  window.generateRandomData = function (name, secondName, coatColor, eyesColor) {
    var data = [];
    for (var i = 0; i < HEROES_COUNT; i++) {
      var newObj = {
        name: name[window.randomInteger(0, name.length - 1)] + ' ' + secondName[window.randomInteger(0, secondName.length - 1)],
        coatColor: coatColor[window.randomInteger(0, coatColor.length - 1)],
        eyesColor: eyesColor[window.randomInteger(0, eyesColor.length - 1)]

      };
      data.push(newObj);
    }
    return data;
  };
})();
