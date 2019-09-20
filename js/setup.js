'use strict';

var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var HEROES_COUNT = 4;

var setupBlockElement = document.querySelector('.setup');
var setupSimilarElement = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function generateRandomData(name, secondName, coatColor, eyesColor) {
  var data = [];
  for (var i = 0; i < HEROES_COUNT; i++) {
    var newObj = {
      name: name[randomInteger(0, name.length - 1)] + ' ' + secondName[randomInteger(0, secondName.length - 1)],
      coatColor: coatColor[randomInteger(0, coatColor.length - 1)],
      eyesColor: eyesColor[randomInteger(0, eyesColor.length - 1)]

    };
    data.push(newObj);
  }
  return data;
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

setupBlockElement.classList.remove('hidden');
setupSimilarElement.classList.remove('hidden');

var generatedHeroes = generateRandomData(NAMES, SECOND_NAMES, COAT_COLORS, EYES_COLORS);
var fragment = document.createDocumentFragment();
for (var i = 0; i < generatedHeroes.length; i++) {
  fragment.appendChild(renderWizard(generatedHeroes[i]));
}
similarListElement.appendChild(fragment);
