'use strict';
document.addEventListener('DOMContentLoaded', function () {


        // setTimeout random numbers


    setTimeout(function() {
        let limitNumber = Math.random() * 10;
        console.log(Math.round(limitNumber));
    }, 1000);


    setTimeout(function() {
        let pageNumber = Math.floor((Math.random() * 10) + 1);
        console.log(Math.round(pageNumber));
    }, 2000);


        // Promise


    getReq();

    function getReq(limitNumber, pageNumber) {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();
            req.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            };
            req.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
            req.send();
        });
    }
    let myPromise = getReq();
    myPromise.then((response) => {
     console.log(JSON.parse(response));
    });


         // Async Await


    async function getAsync(limitNumber, pageNumber) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                return this.responseText;
            }
        };
        req.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
        req.send();
    }

    getAsync().then((response) => {
        console.log(JSON.parse(response));
    });

}
