'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var X_WINTEXT = 115;
var Y_WINTEXT = 30;
var X_PLAYERS_NAMES = 250;

var START_COL_X = 130;
var WIDTH_PADDING_RECT = 100;
var MAX_HEIGHT = 150;
var WIDTH_RECT = 40;
var TOP_PADDING = 90;

// максимальный элемент в массиве
function getMaxElement(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

// случайное число
function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// рисуем квадрат и тень
function makeBlocks(ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

window.renderStatistics = function (ctx, names, times) {
  // Квадрат и тень
  makeBlocks(ctx, 'rgba(0, 0, 0, 0.7)', CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
  makeBlocks(ctx, '#ffffff', CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  // Выводим текст "Ура вы победили" сверху
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', X_WINTEXT, Y_WINTEXT);
  ctx.fillText('Список результатов:', X_WINTEXT, Y_WINTEXT + GAP * 2);

  // Выводим результаты
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    // Имена игроков
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], START_COL_X + WIDTH_PADDING_RECT * i, X_PLAYERS_NAMES);

    // Высота максимального результата
    var heightRect = 150 * Math.floor(times[i]) / maxTime;
    // Время игроков
    ctx.fillText(Math.floor(times[i]), START_COL_X + WIDTH_PADDING_RECT * i, TOP_PADDING - GAP * 2 + MAX_HEIGHT - heightRect);

    if (names[i] === 'Вы') {
      makeBlocks(ctx, 'rgba(255, 0, 0, 1)', START_COL_X + WIDTH_PADDING_RECT * i, TOP_PADDING + MAX_HEIGHT - heightRect, WIDTH_RECT, heightRect);
    } else {
      var colorForAnother = 'hsla(255, 100%,' + getRandomColor(1, 100) + '%, 1)';
      makeBlocks(ctx, colorForAnother, START_COL_X + WIDTH_PADDING_RECT * i, TOP_PADDING + MAX_HEIGHT - heightRect, WIDTH_RECT, heightRect);
    }
  }
};
