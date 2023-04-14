const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcomw to our home apge');
    }
     else if(req.url === '/about'){
    res.end('Here is our short history');
    } else{
    res.end(`
    <h1>Oops!<h1>
    <P>We can't seem to find the page you are looking for </P>
    <a href ="/">back home</a>
    `);
    }
});

server.listen(5002)
   