const http = require('http')

const server = http.createServer((request, response) => {
	console.log("j'ai une requête")
	response.end("ok")
	})
server.listen(3247, () => console.log("j'écoute sur le port 3247"))