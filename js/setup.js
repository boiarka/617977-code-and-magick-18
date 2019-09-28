'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var setupSimilarElement = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  setupSimilarElement.classList.remove('hidden');

  var generatedHeroes = window.generateRandomData(NAMES, SECOND_NAMES, window.COAT_COLORS, window.EYES_COLORS);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < generatedHeroes.length; i++) {
    fragment.appendChild(renderWizard(generatedHeroes[i]));
  }
  similarListElement.appendChild(fragment);


})();
