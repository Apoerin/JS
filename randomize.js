 'use strict';
document.addEventListener('DOMContentLoaded', function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let limitNumber;
    let pageNumber;

    setTimeout(function () {
       limitNumber = getRandomInt(1, 11);
        console.log(limitNumber)
    }, 1000);
    setTimeout(function () {
        pageNumber = getRandomInt(1, 11);
        console.log(pageNumber)
    }, 2000);

    setTimeout(function () {
        makeRequest(function (responseText) {
            console.log("callback response =>", JSON.parse(responseText));
        })
    }, 3000);


    setTimeout(getPromise, 3000);
    setTimeout(makeAsyncRequest, 3000);

    // Callback

    function makeRequest(callback) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.responseText);
            }
        };
            xmlRequest.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
            xmlRequest.send();
        }

    // Async Await

    async function getAsync() {
        return new Promise((resolve)=> {
            let xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            };
            xmlRequest.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
            xmlRequest.send();
        });
    }
    async function makeAsyncRequest() {
        try{
            let result = await getAsync();
            console.log("async response  =>",JSON.parse(result));
        }catch (error) {
            console.error(error);
        }
    }

    // Promise

    function getPromise() {
        let promiseRequest = new Promise((resolve, reject) => {
            let xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            };
            xmlRequest.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
            xmlRequest.send();
        });
        promiseRequest.then((responseText) => {
            console.log("promise response =>", JSON.parse(responseText));
        }).catch((status) => {
            console.log("promise status =>", JSON.parse(status));
        });
    }
});
