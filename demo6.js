var http = require('http')

function processRecord(request, response) {
    var body = "Node.JS Tutorial\n"
    // 這邊在debug時會出錯
    //     TypeError [ERR_INVALID_CHAR]: Invalid character in header content ["Content-Length"]
    //          at storeHeader (node:_http_outgoing:519:5)
    //          at processHeader (node:_http_outgoing:514:3)
    //          at ServerResponse._storeHeader (node:_http_outgoing:411:11)
    //          at ServerResponse.writeHead (node:_http_server:347:8)
    //          at Server.processRecord (C:\Users\Admin\Desktop\NodeTutorial\demo6.js:6:14)
    //          at Server.emit (node:events:390:28)
    //          at parserOnIncoming (node:_http_server:951:12)
    //          at HTTPParser.parserOnHeadersComplete (node:_http_common:128:17) {
    //          code: 'ERR_INVALID_CHAR'
    //      }
    var contentLength = body
    response.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    })
    response.end(body)
}


var server = http.createServer(processRecord)
console.log("server created, start to listen port 8765")
server.listen(8765)