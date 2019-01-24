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
                getCallback(function (responseText) {
                    console.log("callback response =>", JSON.parse(responseText));
                })
            }, 3000);

            setTimeout(getPromise, 3000);


            // Callback


            function getCallback(callback) {
                let xmlRequest = new XMLHttpRequest();
                xmlRequest.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        callback(this.responseText);
                    }
                };
                xmlRequest.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
                xmlRequest.send();
            }
            getCallback();


            // Async Await


            async function getAsync() {
                let xmlRequest = new XMLHttpRequest();
                xmlRequest.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        return this.responseText;
                    }
                };
                xmlRequest.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
                xmlRequest.send();
            }

            getAsync().then((response) => {
                console.log(JSON.parse(response));
            });

             // Promise


            function getPromise() {
                let promiseRequest = new Promise((resolve, reject) => {
                    let xmlRequest = new XMLHttpRequest();
                    xmlRequest.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            resolve(this.responseText);
                            reject(this.status);
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
            getPromise();
        });



