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