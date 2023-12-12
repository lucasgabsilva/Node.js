var http = require('http')//carrega o múdulo HTTP

http.createServer(function(req, res){
    res.writeHead(200,{'content-type' : 'text\plain'})//conteúdo do cabeçalho
    res.end("Hello, World!")//escreve a mensagem na tela
}).listen(8124)