import { MongoClient, ServerApiVersion } from 'mongodb'
import config from './Config'

// Create a mongo client
const client = new MongoClient(config.dbLink as string, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

//export db client
export default client
