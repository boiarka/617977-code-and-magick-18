'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var setupBlockElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = document.querySelector('.setup-close');
  var setupSubmitElement = document.querySelector('.setup-submit');

  var HEROES_COUNT = 4;
  var setupSimilarElement = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var errorTemplate = document.querySelector('#error').content.querySelector('.error');
  var errorElement = errorTemplate.cloneNode(true);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  setupSimilarElement.classList.remove('hidden');

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < HEROES_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var errorHandler = function (errorMessage) {
    errorElement.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', errorElement);
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setupBlockElement.classList.remove('hidden');
    window.load(successHandler, errorHandler);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupBlockElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupDialogElement.style.top = 80 + 'px';
    setupDialogElement.style.left = 50 + '%';
  };

  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  setupCloseElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });


  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  setupOpenElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  // Отправить форму
  // setupSubmitElement.addEventListener('click', function () {
  //   setupSubmitElement.submit();
  // });

  // setupSubmitElement.addEventListener('keydown', function (evt) {
  //   if (evt.keyCode === ENTER_KEYCODE) {
  //     setupSubmitElement.submit();
  //   }
  // });

  var formElement = document.querySelector('.setup-wizard-form');
  formElement.addEventListener('submit', function (evt) {
    window.save(new FormData(formElement), function (response) {
      setupDialogElement.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

  // Драг
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
