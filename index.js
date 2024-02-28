// // console.log("node is running")
// // const sum = 3 + 4

// // {
// // }
// const fs = require('fs')
// // console.log("Top Level Code 01")
// // setTimeout(() => {
// //     console.log("Timeout Task Executed")
// // }, 0);

// // console.log("Top Level Code 02")


// fs.mkdirSync("New Folder")
// fs.writeFileSync("New Folder/text.txt", "Nested Content")

// fs.writeFileSync('text2.tct', 'Hello')
// // setTimeout(() => {
// // console.log("Timeout Task Executed")
// // const res = fs.readFileSync('New Folder/text.txt', 'utf-8', (res) => {
// // console.log(res)
// // })
// // }, 2000);
// http.get(options, (res) => {
//     // Do stuff
// }).on('socket', (socket) => {
//     socket.emit('agentRemove');
// });
const { Server } = require('node: http')

const server = http.createServer((request, response) => {
    console.log(request.url)
})
server.listen(5000)