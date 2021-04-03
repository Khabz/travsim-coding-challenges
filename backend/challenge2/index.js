const http = require("http");

var LineReader = require('linereader');
var lr = new LineReader('./files/testFile.js');

const PORT = 4000;

const server = http.createServer((req, res) => {
    res.end(`Server listening to port ${PORT}`)
});

function checkStyleGuide() {

    lr.on('line', function(lineno, line) {

        if (lineno === 1) {
            if (line[0] === "c") {
                if (line[7] != " " || (line[9] != " ")) {
                    if (line[11] != ";" && line[10] != ";" && line[9] != ";" && line[8] != ";" && line[7] != ";") {
                        const message = 'No semi colon and space in line ' + lineno;
                        console.log(message);
                    } else {
                        const message = 'No space in line ' + lineno;
                        console.log(message);
                    }
                } else if (line[11] != ";" && line[10] != ";" && line[9] != ";" && line[8] != ";" && line[7] != ";") {
                    const message = 'No semi colon on ' + lineno;
                    console.log(message);
                }
            }
            lr._nextLine();
        } else {
            if (line[0] === "l") {
                if (line[5] != " " && line[7] != " ") {
                    if (line[9] != ";") {
                        const message = 'No semi colon and space in line ' + lineno;
                        console.log(message);
                    } else {
                        const message = 'No space in line ' + lineno;
                        console.log(message);
                    }
                } else if (line[9] != ";") {
                    const message = 'No space in line ' + lineno;
                    console.log(message);
                }
                lr.close();
            }
        }
        lr.pause();
        setTimeout(function() {
            lr.resume();
        }, 100);
    });
}

server.listen(PORT, () => {
    checkStyleGuide();
    console.log(`Server listening to port ${PORT}`)
})