const container = document.querySelector('.container')
const desktopShareBar = document.querySelector('.share-bar-desktop');
const mobileShareBar = document.querySelector('.share-bar-mobile');
const shareBtn = document.querySelector('.share-icon');
const shareBtnMobile = document.querySelector('.share-icon-mobile');
const articleFooter  = document.querySelector('.article-footer');


function onClick() {
    mobileShareBar.classList.remove('closed');
    articleFooter.classList.add('closed')
    // desktopShareBar.classList.toggle('closed')
}

function onHover(){
    desktopShareBar.classList.remove('closed');
    desktopShareBar.addEventListener('mouseover', onShareBarHover);
    function onShareBarHover(){
    desktopShareBar.classList.remove('closed');
    }
}

function onMouseLeave() {
    desktopShareBar.classList.add('closed');
    desktopShareBar.addEventListener('mouseleave', onShareBarLeave);
    function onShareBarLeave(){
    desktopShareBar.classList.add('closed');
    }
}


shareBtn.addEventListener('click', onClick);
shareBtn.addEventListener('mouseenter', onHover);
shareBtn.addEventListener('mouseleave', onMouseLeave);