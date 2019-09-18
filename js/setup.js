'use strict';

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
var generHeros = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function generateRandomData(name, secondName, coatColor, eyesColor) {
  for (var i = 0; i < 4; i++) {
    var newObj = {
      name: name[randomInteger(0, name.length - 1)] + ' ' + secondName[randomInteger(0, secondName.length - 1)],
      coatColor: coatColor[randomInteger(0, coatColor.length - 1)],
      eyesColor: eyesColor[randomInteger(0, eyesColor.length - 1)]

    };
    generHeros.push(newObj);
  }
  return generHeros;
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

generateRandomData(names, secondNames, coatColors, eyesColors);
var fragment = document.createDocumentFragment();
for (var i = 0; i < generHeros.length; i++) {
  fragment.appendChild(renderWizard(generHeros[i]));
}
similarListElement.appendChild(fragment);
