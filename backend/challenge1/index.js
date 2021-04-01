const http = require("http");

const PORT = 3000;

const server = require("./routes");


server.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})