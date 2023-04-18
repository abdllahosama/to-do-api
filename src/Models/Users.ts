import client from '../Database'
import config from '../Config'
import bcrypt from 'bcrypt'
import UserUtilities from '../Utilities/User'
import { ObjectId } from 'mongodb'

// user type
export type user = {
    _id?: ObjectId
    first_name: string
    last_name: string
    email: string
    user_name: string
    password: string
}

// user class
export class userStore {
    /**
     * this method insert new user to database
     * @param user
     * @returns user
     */
    public insert = async (user: user): Promise<boolean> => {
        try {
            // connect to database
            const connection = await client.connect()

            user.password = UserUtilities.hashPassword(user.password)
            // send query to database
            await connection.db().collection('users').insertOne(user)
            
            // return true
            return true
        } catch (error) {
            throw new Error(`can't inser user: ${error}`)
        }
    }


    /**
     * this method auth user
     * @param user_name
     * @param password
     * @returns user | boolean
     */
    public auth = async (
        user_name: string,
        password: string
    ): Promise<user | boolean> => {
        try {
            // connect to database
            const connection = await client.connect()

            const user = (await connection
                .db()
                .collection('users')
                .findOne({ user_name: user_name })) as user

            // check if user is exist
            if (user) {
                // check if matching password
                const passwordValidate = bcrypt.compareSync(
                    password + config.encriptPassword,
                    user.password
                )
                if (passwordValidate) {
                    // return user data
                    return user
                }
            }
            // if no user validate
            return false
        } catch (error) {
            throw new Error(`cant't auth user: ${error}`)
        }
    }
}