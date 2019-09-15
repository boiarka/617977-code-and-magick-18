'use strict';

var START_COL_X = 130;
var WIDTH_RECT = 100;
var MAX_HEIGHT = 150;

// максимальный элемент в массиве
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// случайное число
function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


window.renderStatistics = function (ctx, names, times) {
	// Квадрат и тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

// Выводим текст "Ура вы победили" сверху
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 115, 30);
  ctx.fillText('Список результатов:', 115, 50);

		// Выводим результаты
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], START_COL_X + WIDTH_RECT * i, 250);

				// Высота максимального результата
    var heightRect = 150 * Math.floor(times[i]) / maxTime;
    ctx.fillText(Math.floor(times[i]), START_COL_X + WIDTH_RECT * i, 70 + MAX_HEIGHT - heightRect);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(START_COL_X + WIDTH_RECT * i, 90 + MAX_HEIGHT - heightRect, 40, heightRect);
    } else {
      ctx.fillStyle = 'hsla(255, 100%,' + getRandomColor(1, 100) + '%, 1)';
      ctx.fillRect(START_COL_X + WIDTH_RECT * i, 90 + MAX_HEIGHT - heightRect, 40, heightRect);
    }
  }
};
