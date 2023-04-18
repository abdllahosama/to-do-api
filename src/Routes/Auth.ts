import { Router } from 'express'
import AuthController from '../Controllers/AuthController'

// configrate routes
const router = Router()

// auth user
router.post('/login', AuthController.login)

// auth user
router.post('/register', AuthController.register)

export default router
