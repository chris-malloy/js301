// // give this...

// $.getJSON(weatherUrl, function(weatherData) {
//     console.log(weatherData);
// })

// // question... what is weatherData?  where do we actually get this magic variable?
// // Somewhere in the bowls of jQuery, is this..
// window.$ = {};
// $.click = function(someFunctionToRunLater) {
//     someFunctionRunLater();
// }

// oooooooh...... recursion

// Because functions are first-class objects, they can get passed around
// So... if a returns a function that takes a parameter, a(2) BECOMES a function

function a(num) {
    return function(num2) {
        console.log(num2 + num);
    }
    var functionToReturn = function(num2) {
        console.log(num + num2);
    }
    return functionToReturn
}

// another way to write it...
function a(num) {
    var functionToReturn = function(num2) {
        console.log(num + num2);
    }
}

return functionToReturn
a(2)(3)