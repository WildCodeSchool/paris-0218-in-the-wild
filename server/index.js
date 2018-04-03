const express = require('express')

const event1 = require('../mocks/events/1.json')
const event2 = require('../mocks/events/2.json')

const events = [ event1, event2]

console.log(event1.id)

// const server = http.createServer((request, response) => {
// 	console.log("j'ai une requête")
// 	response.end("ok")
// 	})
// server.listen(3247, () => console.log("j'écoute sur le port 3247"))

const app = express()

app.listen(3248, () => console.log("j'écoute sur le port 3247"))

app.get('/', (request, response) => {
	response.send("Ok")
})

app.get('/events', (request,response)=>{
	response.json(events)

})