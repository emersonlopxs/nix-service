import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(bodyParser.json())
app.use('/api', routes)

app.get('/', (request, response) => response.status(200).json({ message: 'ok' })
)

app.listen(3333, () => console.log('app running on port 3333'))
