var express = require('express')
var app = express()

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next(); // sans cette ligne on ne pourra pas poursuivre.
})

app.use("/static", express.static(__dirname + '/static'))

app.get('/', (request, response) => {
    response
        .redirect(301, '/static/index.html')
})


app.use(function (request,response) {
    console.log("et c'est le 404 : " + request.url);

    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');

    response.end("<html><head><title>la quatre cent quatre</title></head><body><h1>Et c'est la 404.</h1><img  src=\"https://www.leblogauto.com/wp-content/uploads/2020/04/Peugeot-404-1.jpg\" /></body></html>");

})

app.listen(3000);
console.log("c'est parti")