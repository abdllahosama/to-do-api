import { Router } from 'express'
import TasksController from '../Controllers/TasksController'

// configrate routes
const router = Router()

// add task
router.post('/', TasksController.create)
// show singel task
router.get('/:id', TasksController.show)
// update task
router.put('/:id', TasksController.update)
// delete task
router.delete('/:id', TasksController.delete)

export default router
