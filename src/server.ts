import express from 'express'
import bodyParser from 'body-parser'
// import cors from 'cors'

import routes from './routes'

const app = express()

// app.use(cors())
app.use(bodyParser.json())
app.use('/api/v1', routes)

const PORT = 3334
app.listen(PORT, () => console.log('Nix service running on port ' + PORT))
