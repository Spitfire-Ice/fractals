const elem = document.getElementById('canvas');
const ctx = elem.getContext('2d');
const deg2rad = Math.PI / 180.0; //градусы в радианы
const depth = 11; //глубина рекурсии
ctx.lineWidth = 3; //толщина линий
ctx.strokeStyle='#330000'; //стиль рисования (цвет)
const step = 8.; //коэффициент масштабирования
const startAngle = -90; //начальный угол; -90 = прямо вверх
const slopeAngle = 25; //угол разворота ветвей; 0 = прямо вверх, дерево выродится в прямую

function drawLine (x1, y1, x2, y2) { //функция отрисовки линии
  ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
}

function drawTree(x1, y1, angle, depth) { //рекурсивное рисование дерева
  if (depth) {
    let x2 = x1 + (Math.cos(angle * deg2rad) * depth * step);
    let y2 = y1 + (Math.sin(angle * deg2rad) * depth * step);
    drawLine(x1, y1, x2, y2);
    drawTree(x2, y2, angle-slopeAngle, depth - 1);
    drawTree(x2, y2, angle+slopeAngle, depth - 1);
  }
}

//Отрисовка canvas:
ctx.beginPath(); //начать
drawTree(400, 549, startAngle, depth); //метод отрисовки
ctx.closePath(); //закончить
ctx.stroke(); //отобразить