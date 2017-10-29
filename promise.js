// var aPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('');
//     }, 2000);
// });

// aPromise.then(() => {
//     console.log("I'm done");
// });

// more notes on promises

// a good way to managa async without passing zillions of callbacks around and nesting, nesting, nesting
// For example...
// this is a miserable way to do it.
// $.getJSON(movieUrl, function(movieData) {
//     movieData.results.map((movie) => {
//         $.getJSON(movieUrlId, function(thisMovieData) {
//             thisMovieData.results.map((moreMovieData) => {
//                 $.getJSON(movieCastUrl, (castData) => {
//                     // finally do something with:
//                     // 1. movieData
//                     // 2. this movie Data
//                     // 3. Cast data
//                 })
//             })
//         })
//     })
// })

// $.getJSON(url, func) {
//     // do some stuff  
//     // call the function
//     // call the next
//     // call the next
// }

// function successCallback(result) {
//     console.log(`Sucess! ${result}`);
// };

// function failureCallback(result) {
//     console.log(`Failure. ${result}`)
// }

// function checkName(name, winning, losing) {
//     if (name === "Charlie Sheen") {
//         winning("Charlie Sheen always wins.")
//     } else {
//         losing("No one wins but Charlie Sheen");
//     }
// }
// checkName("Emilio Estivex", successCallback, failureCallback)

// ^this is some voodoo magic

// okay... let's try a promise
// a promise is a javascript constructor that has a few methods...
// valid methods include
// .all()
// .race()
// .reject()
// .resolve()
// .catch()
// .then()

// let myFirstPromise = new Promise((resolve, reject) => {
//     // resolve and reject are CALBACKS
//     // We will run resolve when we are don with our async stuff.
//     // We will run reject, if it fails.
//     // for now, we'll use setTimeout
//     setTimeout(function() {
//         resolve("It's already 250 milliseconds!");
//     }, 250);
// });

// console.log(myFirstPromise);
// myFirstPromise.then((successMessage) => {
//     console.log(successMessage);
//     console.log(myFirstPromise);
// });
// console.log(myFirstPromise);

function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("4 seconds have passed")
        }, 4000);
    });
};

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 seconds have passed");
        }, 2000)
    })
}

var promiseOne = one();
var promiseTwo = two();
promiseOne.then((msgFromPromise) => {
    console.log(msgFromPromise);
});
promiseTwo.then((msgFromPromise) => {
        console.log(msgFromPromise);
    })
    // .all() which Hayes mentioned yesterday, will wait until every promise in an aray of promises has run it's resolve.
var promiseArray = [promiseOne, promiseTwo]
Promise.all(promiseArray).then((data) => {
    console.log('ALL Done!');
    console.log(data);
});
Promise.race(promiseArray).then((data) => {
    console.log('ALL Done!');
    console.log(data);
});