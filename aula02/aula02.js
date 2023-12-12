const http = require('http');

http.createServer((requisicao, resposta)=> {
    resposta.writeHead(200, {
        'Content-Type' : 'text/play'
    });
    resposta.write('Curso de Node\n com o professor bruno');
    resposta.end();
}).listen(1337);