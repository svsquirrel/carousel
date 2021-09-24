
 window.onload = renderContent;

const ImageData = [
    { imgsrc: "images/rainbow.jpg", alttext: "seaside rainbow",              caption: 'Rainbow over Fort Lauderdale' },
    { imgsrc: "images/ocean.jpg",   alttext: "rough ocean",                  caption: 'Sailing the Gulf Stream' },
    { imgsrc: "images/greysky.jpg", alttext: "big rock in Alaska",           caption: 'I forget this rocks name' },
    { imgsrc: "images/rock.jpg",    alttext: "seagull by sea",               caption: 'A seagull riding out the storm Navarre, Florida' },
    { imgsrc: "images/sharks.jpg",  alttext: "huge aquarium with sharks",    caption: 'A third grade class visits Tampa Aquarium' },
    { imgsrc: "images/monarch.jpg", alttext: "monarch on a flower",          caption: 'A monarch tastes bougainvilla' },
    { imgsrc: "images/river.jpg",   alttext: "sunshine on the Yellow River", caption: 'An inlet beckons on the Yellow River' }
]
function renderContent() {
    const content = document.querySelector('.content');
    const ulist = document.querySelector('.indicators');

    for (let i = 0; i < ImageData.length; i++) {
        const slideDiv = document.createElement('div');
            slideDiv.classList.add('slidediv');
            slideDiv.dataset.id = i;
        
        const playbtn = document.createElement('button');
            playbtn.classList.add('pause');
            playbtn.innerHTML = 'pause';
            playbtn.style.display = 'none';

        const imageDisplay = document.createElement('img');
            imageDisplay.src = ImageData[i].imgsrc;
            imageDisplay.setAttribute('alt', ImageData[i].alttext);
            imageDisplay.dataset.id = i;

            slideDiv.appendChild(imageDisplay);
            slideDiv.appendChild(playbtn);
       
        const indicatorItem = document.createElement('li');
            indicatorItem.dataset.id = i;
            indicatorItem.addEventListener('click', () => {
                    showSlides(i);});

        content.appendChild(slideDiv);
        ulist.appendChild(indicatorItem);
    }
    showSlides(0);
}
let timer;

//hidden pause button displayed on mouseover that user can click to stop timer
//after clicked its hidden. if hovered again, show the play icon
//each time will change the dataset from play: on to play: off;
const nextItem = document.querySelector('.right');
    nextItem.addEventListener('click', () => {
         moveSlide(x = 1 );
    });

const previousItem = document.querySelector('.left');
    previousItem.addEventListener('click', () => {
        moveSlide(x =-1);
    });

function moveSlide(x){
    
    count = ImageData.length;
    let id = parseInt(document.querySelector('.active').dataset.id);

    n = id + x;
   
    if (n == count){
        n = 0;
    } else if (n < 0 ){
        n = count -1;
    } else {
        n;
    }
    showSlides(n)
}

function showSlides(n) {
    
    const divs = document.querySelectorAll('.slidediv');
    divs.forEach(div => {
        div.classList.remove('active')
    })
    const items = document.querySelectorAll('img');
    items.forEach(item => {
        item.classList.remove('active')
    })
    const indicators = document.querySelectorAll('li');
    indicators.forEach(li => {
        li.classList.remove('active');
    })
    divs[n].classList.add('active');
    items[n].classList.add('active');
    indicators[n].classList.add('active');

    clearTimeout(timer);
    timer = setTimeout(() => moveSlide(1),5000);
}

document.addEventListener('keydown', keyPress);
function keyPress(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        moveSlide(x = -1);
    } else if (e.keyCode == '39') {
        moveSlide(x = 1);
    }
}
































