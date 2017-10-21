import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

const app = express()
app.use(bodyParser.json())
app.listen(3000)
