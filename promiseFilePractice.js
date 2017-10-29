const fs = require('fs');


// variable is a promise
var readDir = new Promise((resolve, reject) => {
    fs.readdir('./data', (err, files) => {
        files.map((fileName, index) => {
            // console.log(fileName);
            // if the file name contains number, push to new array
        });
        resolve(filesList = files.slice(0, files.length));
    });
});

readDir.then((filesList) => {
    var filesWithNumbers = [];
    for (let i = 0; i < filesList.length; i++) {
        for (let j = 0; j < filesList[i].length; j++) {
            if (!isNaN(parseInt(filesList[i][j]))) {
                filesWithNumbers.push(filesList[i]);
            }
        }
    }
    console.log(filesWithNumbers)
})

var




// fs.readFile(`./data/${fileName}`, (err, data) => {
//     // console.log(fileName);
//     if (err) throw err;
//     // console.log(data);
// });