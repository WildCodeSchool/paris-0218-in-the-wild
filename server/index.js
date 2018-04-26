const fs = require('fs')
const path = require('path')
const util = require('util')
const bodyParser = require('body-parser')
const express = require('express')



const writeFile = util.promisify(fs.writeFile)
const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const isJSON = str => str.endsWith('.json')

const readDirFileContents = dirPath => readdir(dirPath)
  .then(filenames => {
    const filepaths = filenames
      .filter(isJSON)
      .map(filename => path.join(dirPath, filename))
    const files = filepaths.map(filepath => readFile(filepath, 'utf8'))

    return Promise.all(files)
  })
  .then(filesInJSON => filesInJSON.map(JSON.parse))

const readMockFolder = mockDir =>
  readDirFileContents(path.join(__dirname, '../mocks/', mockDir))

// readMockFolder('events').then(console.log, console.error)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use((request, response, next) => {
  if (request.method === 'GET') return next()
  let accumulator = ''

  request.on('data', data => {
    accumulator += data
  })
  request.on('end', () => {
    try {
      request.body = JSON.parse(accumulator)
      next()
    } catch (err) {
      next(err)
    }
  })
})

// Création des routes
app.get('/', (request, response) => {
  response.send('Ok')
})

// route formulaire
app.post('/users', (request, response, next) => {
  const id = Math.random().toString(36).slice(2).padEnd(4, '0')
  const filename = `${id}.JSON`
  const filepath = path.join(__dirname, '../mocks/users', filename)
  response.send('it s working')
  const content = {
    id: id,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    pseudo: request.body.pseudo,
    email: request.body.email,
    schoolName: request.body.schoolName,
    password: request.body.password,
    validePassword: request.body.confirmPassword,
    CreatedAt: Date.now()
  }

  writeFile(filepath, JSON.stringify(content), 'utf8')
    .then(() => response.json('ok'))
    .catch(next)
})

// route eventProposition
app.post('/events', (request, response, next) => {
  const id = Math.random().toString(36).slice(2).padEnd(4, '0')
  const filename = `${id}.JSON`
  const filepath = path.join(__dirname, '../mocks/events', filename)

  const content = {
    id: id,
    title: request.body.title,
    eventPicture: "http://www.stylistic.fr/wp-content/uploads/2013/12/alcool1.jpg",
    description: request.body.description,
    category: request.body.category,
    location: request.body.location,
    createdBy: "test",
    attendees: [],
    CreatedAt: Date.now(),
    startingTime: Date.now(),
    endingTime: Date.now(),
  }

  writeFile(filepath, JSON.stringify(content), 'utf8')
    .then(() => response.json('ok'))
    .catch(next)
})



app.get('/events/category/:category', (request, response, next) => {
  readMockFolder('events')
    .then(events => {
      const selectedEvents = events
        .filter(event => event.category === request.params.category)
      response.json(selectedEvents)
    })
    .catch(next)
})

app.get('/events/:id', (request, response, next) => {
  const filename = `${request.params.id}.json`
  const filepath = path.join(__dirname, '../mocks/events', filename)

  // 1 - lit le fichier
  // 2 - response.header définit les bons headers
  // 3 - response.send envoie le résultat
  readFile(filepath)
    .then(buffer => {
      response.header('Content-Type', 'application/json')
      response.send(buffer)
    })
    .catch(next)
})

app.get('/categories', (request, response, next) => {
  readMockFolder('categories')
    .then(categories => response.json(categories))
    .catch(next)
})

// app.post('/eventProposition', (request, response) => {
//   response.json(categories)
// })

app.listen(3248, () => console.log("j'écoute sur le port 3248"))
