var arrColor = ['red', 'green', 'blue', 'grey', 'yellow', 'orangered', 'pink'];
var index = 0;

document.getElementById('block').style.background = arrColor[index];

function prev() {
    index--;
    if (index < 0)  index = arrColor.length - 1;

    document.getElementById('block').style.background = arrColor[index];
}

function next() {
    index++;
    if (index === arrColor.length) index = 0;
    document.getElementById('block').style.background = arrColor[index];
}
