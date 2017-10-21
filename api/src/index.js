import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schema'

const app = express()
app.use(bodyParser.json())
app.use('/graphql', graphqlExpress({ schema }))
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)
app.listen(4001)
