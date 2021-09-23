document.addEventListener('DOMContentLoaded', function () {
    renderContent()
});

const ImageData = [
    { imgsrc: "images/rainbow.jpg", alttext: "seaside rainbow" },
    { imgsrc: "images/ocean.jpg", alttext: "rough ocean" },
    { imgsrc: "images/greysky.jpg", alttext: "big rock in Alaska" },
    { imgsrc: "images/rock.jpg", alttext: "seagull by sea" },
    { imgsrc: "images/sharks.jpg", alttext: "huge aquarium with sharks" },
    { imgsrc: "images/monarch.jpg", alttext: "monarch on a flower" },
    { imgsrc: "images/river.jpg", alttext: "sunshine on the Yellow River" }
]

let count = 0;
let indicatorscount = 0;
const nextItem = document.querySelector('.right');
nextItem.addEventListener('click', showNextItem);

function showNextItem() {
    const items = document.querySelectorAll('img');
    const indicators = document.querySelectorAll('li');
    const itemCount = items.length;
    const indicatorsCount = indicators.length;
  
    items[count].classList.remove('active');
    indicators[indicatorscount].classList.remove('active');

    if (count < itemCount - 1) {
        count++;
    } else {
        count = 0;
    }
    if (indicatorscount < indicatorsCount - 1) {
        indicatorscount++;
    } else {
        indicatorscount = 0;
    }

    items[count].classList.add('active');
    indicators[indicatorscount].classList.add('active');
}

const previousItem = document.querySelector('.left');
previousItem.addEventListener('click', showPreviousItem);

function showPreviousItem() {
    const items = document.querySelectorAll('img');
    const indicators = document.querySelectorAll('li');
    const itemCount = items.length;
    const indicatorsCount = indicators.length;

    items[count].classList.remove('active');
    indicators[indicatorscount].classList.remove('active');


    if (count > 0) {
        count--;
    } else {
        count = itemCount - 1;
    }
    if (indicatorscount > 0) {
        indicatorscount--;
    } else {
        indicatorscount = indicatorsCount - 1;
    }

    items[count].classList.add('active');
    indicators[indicatorscount].classList.add('active');
}

document.addEventListener('keydown', keyPress);
function keyPress(e) {
    e = e || window.event;
    
    if (e.keyCode == '37') {
      showPreviousItem();
    } else if (e.keyCode == '39') {
      showNextItem();
    }
  }


function renderContent() {
    const content = document.querySelector('.content');
    const ulist = document.querySelector('.indicators');

    for (let i = 0; i < ImageData.length; i++) {

        const imageDisplay = document.createElement('img');
        const imgsource = ImageData[i].imgsrc;
        const alttext = ImageData[i].alttext;
        imageDisplay.src = imgsource;
        imageDisplay.setAttribute('alt', alttext);
        imageDisplay.classList.add('image');
        imageDisplay.dataset.id = i;
        if (imageDisplay.dataset.id == '0') {
            imageDisplay.classList.add('active');
        }

        const indicatorItem = document.createElement('li');
        indicatorItem.id = 'indicator-' + [i];

        content.appendChild(imageDisplay);
        ulist.appendChild(indicatorItem);
    }
    const activeli = document.querySelector('#indicator-0')
    activeli.classList.add('active');

}





