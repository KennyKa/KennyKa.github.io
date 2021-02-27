
// Change tabs
const tabs = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');
let mainLeft = document.querySelector('.panel')

let checkBox = document.querySelector('#check');
let innerWidth = window.innerWidth

tabs.forEach(item => {
    item.addEventListener('click', function(e){
        let targetPanel = '';
        if(e.target.tagName == "LI"){
            targetPanel = document.querySelector(e.target.dataset.target)
        } else if (e.target.tagName == "A"){
            targetPanel = document.querySelector(e.target.parentNode.dataset.target)
        } else {
            targetPanel = document.querySelector(e.target.parentNode.dataset.target)
        }
        panels.forEach(function(panel){
            if (panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })

/*         if(innerWidth <= 720) {
            innerWidth = window.innerWidth;
            checkBox.checked = false;
        } */
        
        checkBox.checked = false;

        mainLeft = document.querySelector('.panel.active')
        mainLeft.scrollTo(0, 0);
    })
})


//Image Gallery
let paperfactoryImages = document.querySelectorAll('.paperfactory-img');
let towerImages = document.querySelectorAll('.tower-img');
let bscImages = document.querySelectorAll('.bsc-img');
let spintopImages = document.querySelectorAll('.spintop-img');
let rehauImages = document.querySelectorAll('.rehau-img');
let schoolImages = document.querySelectorAll('.school-img');
let giantImages = document.querySelectorAll('.giant-img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;


function imageViewer(imgGalleryClass) {
    imgGalleryClass.forEach(function(image, index){  

        let fullSource = '';
        let imageName = '';
        let rawSource = '';
        let containerLen = ''   
    
        image.onclick = function() {
    
            fullSource = image.src;
            imageName = (index + 1) + 'prew' + '.jpg';
            rawSource = '"' + fullSource.replace(imageName, '') + '"';
            rawSourceClean = fullSource.replace(imageName, '');
            containerLen = imgGalleryClass.length;
 
            getLatestOpenedImg = index + 1;
    
            let container = document.body;
            let newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window');
            newImgWindow.setAttribute('onclick', 'closeImg()');
    
            let newImg = image.cloneNode();
            newImg.src = newImg.src.replace(`prew`, '');

            newImgWindow.appendChild(newImg);
            newImg.classList.add('popup-img');
            newImg.setAttribute('id', 'current-img');    


            let newNextBtn = document.createElement('a');
            newNextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
            container.appendChild(newNextBtn);
            newNextBtn.setAttribute('class', 'img-btn-next');
            newNextBtn.setAttribute('onclick', `changeImg(1, ${rawSource}, ${containerLen})`);

            let newPrevBtn = document.createElement('a');
            newPrevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
            container.appendChild(newPrevBtn);
            newPrevBtn.setAttribute('class', 'img-btn-prev');
            newPrevBtn.setAttribute('onclick', `changeImg(0, ${rawSource}, ${containerLen})`);

        }
    })
}


function changeImg(change, path, containerLen) {
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement('img');
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(change === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > containerLen) {
            calcNewImg = 1;
        }
    } else if(change === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = containerLen;
        }
    }
    
    newImg.setAttribute('src', path + calcNewImg + '.jpg');
    newImg.setAttribute('class', 'popup-img');
    newImg.setAttribute('id', 'current-img');

    getLatestOpenedImg = calcNewImg;
};


function closeImg() {
    document.querySelector('.img-window').remove();
    try {
        document.querySelector('.img-btn-prev').remove();
        document.querySelector('.img-btn-next').remove();
    }
    catch(err){
        console.log('hello');
        document.querySelector('.img-btn-prev').remove();
        document.querySelector('.img-btn-next').remove();
    }
        /*
    try {
        document.querySelector('.img-window').remove();
        document.querySelector('.img-btn-prev').remove();
        document.querySelector('.img-btn-next').remove();        
    }
    catch(err) {
        document.querySelector('.img-btn-prev').remove();
        document.querySelector('.img-btn-next').remove();
    } */
                
    
/*
    if (typeof document.querySelector('.img-window') !== null) {        
        if (typeof document.querySelector('.img-btn-prev') !== null) {
            document.querySelector('.img-btn-prev').remove();
            document.querySelector('.img-btn-next').remove();            
            document.querySelector('.img-window').remove();
        }            
    }   */ 
}


imageViewer(towerImages)
imageViewer(paperfactoryImages)
imageViewer(bscImages)
imageViewer(spintopImages)
imageViewer(rehauImages)
imageViewer(schoolImages)
imageViewer(giantImages)


//Scrolling
function goRight(imgContainer) {
    imgContainer.scrollBy(100, 0);
}

function goLeft(imgContainer) {
    imgContainer.scrollBy(-100, 0);
}

// Rehau buttons and gallery
let rehauRightBtn = document.querySelector('#rehau-right-btn')
let rehauLeftBtn = document.querySelector('#rehau-left-btn')


rehauRightBtn.addEventListener('click', function() {
    let imgContainer = rehauRightBtn.previousElementSibling
    goRight(imgContainer);
});

rehauLeftBtn.addEventListener('click', function() {
    let imgContainer = rehauLeftBtn.nextElementSibling
    goLeft(imgContainer);
});

// Gyongyos buttons and gallery
let giantRightBtn = document.querySelector('#giant-right-btn')
let giantLeftBtn = document.querySelector('#giant-left-btn')


giantRightBtn.addEventListener('click', function() {
    let imgContainer = giantRightBtn.previousElementSibling
    goRight(imgContainer);
});

giantLeftBtn.addEventListener('click', function() {
    let imgContainer = giantLeftBtn.nextElementSibling
    goLeft(imgContainer);
});

// Paperfactory buttons and gallery
let paperFactoryRightBtn = document.querySelector('#paperfactory-right-btn')
let paperFactoryLeftBtn = document.querySelector('#paperfactory-left-btn')

paperFactoryRightBtn.addEventListener('click', function() {
    let imgContainer = paperFactoryRightBtn.previousElementSibling
    goRight(imgContainer);
});

paperFactoryLeftBtn.addEventListener('click', function() {
    let imgContainer = paperFactoryLeftBtn.nextElementSibling
    goLeft(imgContainer);
});

// School buttons and gallery
let schoolRightBtn = document.querySelector('#school-right-btn')
let schoolLeftBtn = document.querySelector('#school-left-btn')


schoolRightBtn.addEventListener('click', function() {
    let imgContainer = schoolRightBtn.previousElementSibling
    goRight(imgContainer);
});

schoolLeftBtn.addEventListener('click', function() {
    let imgContainer = schoolLeftBtn.nextElementSibling
    goLeft(imgContainer);
});

// Tower buttons and gallery
let towerRightBtn = document.querySelector('#tower-right-btn')
let towerLeftBtn = document.querySelector('#tower-left-btn')

towerRightBtn.addEventListener('click', function() {
    let imgContainer = towerRightBtn.previousElementSibling
    goRight(imgContainer);
});

towerLeftBtn.addEventListener('click', function() {
    let imgContainer = towerLeftBtn.nextElementSibling
    goLeft(imgContainer);
});

// Bsc buttons and gallery
let bscRightBtn = document.querySelector('#bsc-right-btn')
let bscLeftBtn = document.querySelector('#bsc-left-btn')

bscRightBtn.addEventListener('click', function() {
    let imgContainer = bscRightBtn.previousElementSibling
    goRight(imgContainer);
});

bscLeftBtn.addEventListener('click', function() {
    let imgContainer = bscLeftBtn.nextElementSibling
    goLeft(imgContainer);
});

// Spintop lamp buttons and gallery
/* let spintopRightBtn = document.querySelector('#spintop-right-btn')
let spintopLeftBtn = document.querySelector('#spintop-left-btn')

spintopRightBtn.addEventListener('click', function() {
    let imgContainer = spintopRightBtn.previousElementSibling
    goRight(imgContainer);
});

spintopLeftBtn.addEventListener('click', function() {
    let imgContainer = spintopLeftBtn.nextElementSibling
    goLeft(imgContainer);
});



console.log(rehauLeftBtn.nextElementSibling)
console.log(rehauRightBtn.previousElementSibling) */

/* var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
); */