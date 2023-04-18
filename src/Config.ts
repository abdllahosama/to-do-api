import dotenv from 'dotenv'

// configrate env file
dotenv.config()

// get data from file
const { ENV, port, dbLink, dbTest } = process.env

// return data as js varibels
export default {
    ENV,
    port,
    dbLink,
    dbTest,
}
