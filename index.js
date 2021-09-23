document.addEventListener('DOMContentLoaded', function () {
  renderContent()
});

const ImageData = [
    { imgsrc:"images/rainbow.jpg", alttext: "seaside rainbow"},
    { imgsrc:"images/ocean.jpg", alttext: "rough ocean"},
    { imgsrc:"images/greysky.jpg", alttext:"big rock in Alaska" },
    { imgsrc:"images/rock.jpg" , alttext:"seagull by sea"  },
    { imgsrc:"images/sharks.jpg" , alttext:"huge aquarium with sharks" },
    { imgsrc:"images/monarch.jpg", alttext:"monarch on a flower" },
    { imgsrc:"images/river.jpg", alttext:"sunshine on the Yellow River" }
]

function renderContent(){
    const content = document.querySelector('.content');
    const ulist = document.querySelector('.indicators');
    
    for (let i = 0; i < ImageData.length; i++){
               
        const imageDisplay = document.createElement('img');
        const imgsource = ImageData[i].imgsrc;
        const alttext = ImageData[i].alttext;
                imageDisplay.src = imgsource;
                imageDisplay.setAttribute('alt', alttext);
                imageDisplay.classList.add ('image');
                imageDisplay.dataset.id = i;
                if (imageDisplay.dataset.id =='0'){
                    imageDisplay.classList.add('active');
                }
        
        const indicatorItem = document.createElement('li');
        indicatorItem.id = 'indicator-'+ [i];

        content.appendChild(imageDisplay);
        ulist.appendChild(indicatorItem);
    }
    const activeli = document.querySelector('#indicator-0')
          activeli.classList.add('active');    
    
}
const items = document.querySelectorAll('.image');
console.log(items);
const itemCount = items.length;
console.log(itemCount);
const nextItem = document.querySelector('.right');
const previousItem = document.querySelector('.left');

let count = 0;

function showNextItem() {
    items[count].classList.remove('active');

    if(count < itemCount - 1) {
        count++;
    } else {
        count = 0;
    }
    
    items[count].classList.add('active');
}

function showPreviousItem() {
    items[count].classList.remove('active');
  
    if(count > 0) {
      count--;
    } else {
      count = itemCount - 1;
    }
  
    items[count].classList.add('active');
    console.log(count);
  }

  nextItem.addEventListener('click', showNextItem);
  previousItem.addEventListener('click', showPreviousItem);
      
