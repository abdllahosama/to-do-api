import { Router } from 'express'
import tasks from './Tasks'

// configrate routes
const routes = Router()

//append routs that comes from tasks
routes.use('/tasks', tasks)

// return routs data
export default routes
