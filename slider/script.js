'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let btnPrev = document.querySelector('.schedule .prev');
    let btnNext = document.querySelector('.schedule .next');
    let images = document.querySelectorAll('.slider .images img');
    let item = document.querySelectorAll('.slider .show');
    let itemContent = document.querySelectorAll('.slider .event-content');
    let i = 1;

    for (let j = 0, items; j < item.length; j++) {
        items = item.item(j);
        items.addEventListener("click", function () {
            i = j;
            showSlides(i)
        });
    }

    btnPrev.addEventListener("click", function () {
        i--;
        if (i < 0) i = images.length - 1;
        showSlides(i)
    });

    btnNext.addEventListener("click", function () {
        i++;
        if (i >= images.length) i = 0;
        showSlides(i)

    });

    function showSlides(i) {
        console.log(i);
        cleaningClass(images, 'active');
        cleaningClass(item, 'event-active');
        cleaningClass(itemContent, 'content-active');
        images[i].className = 'active';
        item[i].classList.toggle("event-active");
        itemContent[i].classList.toggle("content-active");
    }

    function cleaningClass(name, classname) {
        for (let j = 0,items ; j < item.length; j++) {
            items = name.item(j);
            items.classList.remove(classname);
        }
    }
});
