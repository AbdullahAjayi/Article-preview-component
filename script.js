const container = document.querySelector('.container')
const desktopShareBar = document.querySelector('.share-bar-desktop');
const mobileShareBar = document.querySelector('.share-bar-mobile');
const shareBtn = document.querySelector('.share-icon');
const shareBtnMobile = document.querySelector('.share-icon-mobile');
const articleFooter  = document.querySelector('.article-footer');


function onClick() {
    mobileShareBar.classList.remove('closed');
    articleFooter.classList.add('closed')
    desktopShareBar.classList.toggle('closed')
}


shareBtn.addEventListener('click', onClick);