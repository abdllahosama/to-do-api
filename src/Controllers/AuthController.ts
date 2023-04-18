import { Request, Response } from 'express'
import { userStore } from '../Models/Users'
import jwt from 'jsonwebtoken'
import config from '../Config'

class Auth {
    /**
     * this method auth user
     * @param request
     * @param response
     */
    public static login = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            // init user model
            const store = new userStore()
            // get body params
            const { user_name, password } = request.body
            // get user from model
            const user = await store.auth(user_name, password)
            // init user model
            if (user) {
                // generate user token
                const token = jwt.sign({ user }, config.jwtPassword as string)
                // return success with user token
                response.status(200).json({
                    status: 'success',
                    data: {
                        user: user,
                        token: token,
                    },
                })
            } else {
                // return auth error
                response.status(401).json({
                    status: 'error',
                    data: 'error in user name or password',
                })
            }
        } catch (error) {
            throw new Error(`cant't auth: ${error}`)
        }
    }

    /**
     * this method register new user
     * @param request
     * @param response
     */
    public static register = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            // init user model
            const store = new userStore()
            // create new user
            await store.insert(request.body)
            // return success user
            response
                .status(200)
                .json({ status: 'success', message: 'user added successfully' })
        } catch (error) {
            throw new Error(`cant't create user: ${error}`)
        }
    }
}

export default Auth
