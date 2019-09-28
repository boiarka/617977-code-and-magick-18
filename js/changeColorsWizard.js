'use strict';

(function () {
  window.COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireballWrapElement = document.querySelector('.setup-fireball-wrap');

  setupWizardCoatElement.addEventListener('click', function () {
    var randomColor = COAT_COLORS[window.randomInteger(0, COAT_COLORS.length - 1)];
    setupWizardCoatElement.setAttribute('style', 'fill: ' + randomColor);
    var inputCoatColor = document.querySelector('input[name="coat-color"]');
    inputCoatColor.value = randomColor;
  });


  setupWizardEyesElement.addEventListener('click', function () {
    var randomColor = EYES_COLORS[window.randomInteger(0, EYES_COLORS.length - 1)];
    setupWizardEyesElement.setAttribute('style', 'fill: ' + randomColor);
    var inputEyesColor = document.querySelector('input[name="eyes-color"]');
    inputEyesColor.value = randomColor;
  });

  setupFireballWrapElement.addEventListener('click', function () {
    var randomColor = FIREBALL_COLORS[window.randomInteger(0, FIREBALL_COLORS.length - 1)];
    setupFireballWrapElement.setAttribute('style', 'background-color: ' + randomColor);
    var inputFireballColor = setupFireballWrapElement.querySelector('input');
    inputFireballColor.value = randomColor;
  });
})();
