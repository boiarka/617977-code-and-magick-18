'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var HEROES_COUNT = 4;

var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setupBlockElement = document.querySelector('.setup');
var setupSimilarElement = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = document.querySelector('.setup-close');
var setupWizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
var setupWizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireballWrapElement = document.querySelector('.setup-fireball-wrap');
var setupSubmitElement = document.querySelector('.setup-submit');

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

setupSimilarElement.classList.remove('hidden');

var generatedHeroes = generateRandomData(NAMES, SECOND_NAMES, COAT_COLORS, EYES_COLORS);
var fragment = document.createDocumentFragment();
for (var i = 0; i < generatedHeroes.length; i++) {
  fragment.appendChild(renderWizard(generatedHeroes[i]));
}
similarListElement.appendChild(fragment);


// открыть закрыть окно
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setupBlockElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlockElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpenElement.addEventListener('click', function () {
  openPopup();
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupCloseElement.addEventListener('click', function () {
  closePopup();
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// смена цветов
setupWizardCoatElement.addEventListener('click', function () {
  var randomColor = COAT_COLORS[randomInteger(0, COAT_COLORS.length - 1)];
  setupWizardCoatElement.setAttribute('style', 'fill: ' + randomColor);
  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  inputCoatColor.value = randomColor;
});


setupWizardEyesElement.addEventListener('click', function () {
  var randomColor = EYES_COLORS[randomInteger(0, EYES_COLORS.length - 1)];
  setupWizardEyesElement.setAttribute('style', 'fill: ' + randomColor);
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');
  inputEyesColor.value = randomColor;
});

setupFireballWrapElement.addEventListener('click', function () {
  var randomColor = FIREBALL_COLORS[randomInteger(0, FIREBALL_COLORS.length - 1)];
  setupFireballWrapElement.setAttribute('style', 'background-color: ' + randomColor);
  var inputFireballColor = setupFireballWrapElement.querySelector('input');
  inputFireballColor.value = randomColor;
});

// Отправить форму

setupSubmitElement.addEventListener('click', function () {
  setupSubmitElement.submit();
});

setupSubmitElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupSubmitElement.submit();
  }
});
