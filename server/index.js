const express = require('express')

// const server = http.createServer((request, response) => {
// 	console.log("j'ai une requête")
// 	response.end("ok")
// 	})
// server.listen(3247, () => console.log("j'écoute sur le port 3247"))

const app = express()

app.listen(3247, () => console.log("j'écoute sur le port 3247"))

app.get('/', (request, response) => {
	response.send("Ok")
});