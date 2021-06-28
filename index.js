import chroma from 'chroma-js';
const randColor = chroma.random().hex();
console.log(randColor);

const colors = ['#ACADBC', '#9B9ECE', '#6665DD', '#473BF0', '#000500'];

const textColors = colors.map((color) => {
  if (chroma.contrast(color, '#FFFFFF') > 4.5) return '#FFFFFF';
  if (chroma.contrast(color, '#000000') > 4.5) return '#000000';
});

console.log(textColors);

const colorBlocks = Array.from(document.querySelectorAll('.color-block'));
const colorTexts = Array.from(document.querySelectorAll('.color-text'));

function getContrast(color) {
  if (chroma.contrast(color, '#FFFFFF') > 4.5) return '#FFFFFF';
  if (chroma.contrast(color, '#000000') > 4.5) return '#000000';
}

function genColor() {
  colorBlocks.forEach((item, i) => {
    const rand = chroma.random().hex();
    item.style.backgroundColor = rand;
    colorTexts[i].style.color = getContrast(rand);
  });
}

setInterval(genColor, 1500);
