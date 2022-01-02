const http = require('http')
const port = 3001

const server = http.createServer(function(req,res) {
    res.write("Hello world from node")
    res.end()
})

server.listen(port,function(error) {
    if (error) {
        console.log('hm, this is wrong')
    } else {
        console.log("Everything is working, listening to port 3001")
    }
})