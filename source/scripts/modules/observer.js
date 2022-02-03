let objectList = document.querySelector('.info__objects-list');



let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if(!entry.isIntersecting) {
            objectList.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    });
});

observer.observe(objectList);

let infoBlock = document.querySelector('.cabinet__section--info');

const onScrollHandler = () => {
    if(objectList.scrollTop + objectList.clientHeight === objectList.scrollHeight) {
        setTimeout(infoBlock.nextElementSibling.scrollIntoView({block: "center", behavior: "smooth"}),100);
    }
}

objectList.addEventListener('scroll', onScrollHandler);