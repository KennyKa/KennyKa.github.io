// Change tabs
const tabs = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');

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
    })
})


//Image Gallery
let paperfactoryImages = document.querySelectorAll('.paperfactory-img');
let towerImages = document.querySelectorAll('.tower-img');
let bscImages = document.querySelectorAll('.bsc-img');
let spintopImages = document.querySelectorAll('.spintop-img');
let rehauImages = document.querySelectorAll('.rehau-img');
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
            imageName = (index + 1) + '.jpg';
            rawSource = '"' + fullSource.replace(imageName, '') + '"';
            containerLen = imgGalleryClass.length;   
    
            console.log(rawSource);
            if(rawSource == '"http://127.0.0.1:5500/projects_img/img"') {
                console.log('YES');
            } else {
                console.log(rawSource);
                console.log("http://127.0.0.1:5500/projects_img/img");
            }
    
            getLatestOpenedImg = index + 1;
    
            let container = document.body;
            let newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window');
            newImgWindow.setAttribute('onclick', 'closeImg()');
    
            let newImg = image.cloneNode();
            newImgWindow.appendChild(newImg);
            newImg.classList.add('popup-img');
            newImg.setAttribute('id', 'current-img');    
            
            newImg.onload = function() {
    
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
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();
}


imageViewer(towerImages)
imageViewer(paperfactoryImages)
imageViewer(bscImages)
imageViewer(spintopImages)
imageViewer(rehauImages)