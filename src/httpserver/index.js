const http = require('http');

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("hola mundo")
});

servidor.listen(5000);

console.log('servidor corriendo...')