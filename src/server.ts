import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(bodyParser.json())
app.use('/api/v1', routes)

const PORT = 3334
app.listen(PORT, () => console.log('Nix service running on port ' + PORT))
