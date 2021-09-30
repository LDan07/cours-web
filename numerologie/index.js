const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 10422;

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
    
        fichier = fs.readFileSync("./static/index.html", {encoding:'utf8'})
        res.end(fichier);
    }
    else if (fs.existsSync("." + req.url)) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
    
        fichier = fs.readFileSync("." + req.url, {encoding:'utf8'})
        res.end(fichier);
    }
    else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end();
    }
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
