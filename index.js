// document.addEventListener('DOMContentLoaded', function () {
//     renderContent()
// });


window.onload = renderContent;
const ImageData = [
    { imgsrc: "images/rainbow.jpg", alttext: "seaside rainbow", caption: 'Rainbow over Fort Lauderdale' },
    { imgsrc: "images/ocean.jpg", alttext: "rough ocean", caption: 'Sailing the Gulf Stream' },
    { imgsrc: "images/greysky.jpg", alttext: "big rock in Alaska", caption: 'I forget this rocks name' },
    { imgsrc: "images/rock.jpg", alttext: "seagull by sea", caption: 'A seagull riding out the storm Navarre, Florida' },
    { imgsrc: "images/sharks.jpg", alttext: "huge aquarium with sharks", caption: 'A third grade class visits Tampa Aquarium' },
    { imgsrc: "images/monarch.jpg", alttext: "monarch on a flower", caption: 'A monarch tastes bougainvilla' },
    { imgsrc: "images/river.jpg", alttext: "sunshine on the Yellow River", caption: 'An inlet beckons on the Yellow River' }
]

function renderContent() {
    const content = document.querySelector('.content');
    const ulist = document.querySelector('.indicators');

    for (let i = 0; i < ImageData.length; i++) {

        const imageDisplay = document.createElement('img');
        imageDisplay.src = ImageData[i].imgsrc;
        imageDisplay.setAttribute('alt', ImageData[i].alttext);
        
        const indicatorItem = document.createElement('li');
        
        content.appendChild(imageDisplay);
        ulist.appendChild(indicatorItem);
        
    }
    document.getElementsByTagName('li').item(0).classList.add('active');
    document.getElementsByTagName('img').item(0).classList.add('active');
}
    const indicators = document.querySelectorAll('li');
    indicators.forEach(li => {
        li.addEventListener('click', () => {
            showImage()
        })
})

function showImage(id) {
   
    const items = document.querySelectorAll('img');
    items.forEach(item => {
        item.classList.remove('active')
    })
    const indicators = document.querySelectorAll('li');
    indicators.forEach(li => {
        li.classList.remove('active');
    })

    items[id].classList.add('active');
    indicators[id].classList.add('active');
}

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

