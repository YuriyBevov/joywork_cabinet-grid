'use strict'

import swiper from './modules/swiper.js'
//import report_collapse from './modules/report_collapse.js'
//import masonry from './modules/masonry.js'

let objectList = document.querySelector('.info__objects-list');

console.log(objectList);
let isObjectListScrolled = false;

const onScrollRefreshObjectList = () => {
    console.log('window scroll');
    objectList.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    objectList.addEventListener('scroll', onScrollHandler);
    window.removeEventListener('scroll', onScrollRefreshObjectList);
}

const onScrollHandler = () => {
    console.log('scroll');
    isObjectListScrolled = true;
    objectList.removeEventListener('scroll', onScrollHandler);
    window.addEventListener('scroll', onScrollRefreshObjectList);
}

objectList.addEventListener('scroll', onScrollHandler);