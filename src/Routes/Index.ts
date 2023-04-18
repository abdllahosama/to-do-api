import { Router } from 'express'
import tasks from './Tasks'
import Auth from './Auth'

// configrate routes
const routes = Router()

//append routs that comes from tasks
routes.use('/tasks', tasks)

//append routs that comes from Auth
routes.use('/auth', Auth)

// return routs data
export default routes
