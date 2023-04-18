import client from '../Database'
import { ObjectId } from 'mongodb'

// task type
export type task = {
    _id?: ObjectId
    user_id?: ObjectId
    title: string
    description: string
    status: boolean
}

// task class
export class taskStore {
    /**
     * this method get tasks
     * @returns task[]
     */
    public index = async (userId: string): Promise<task[]> => {
        try {
            // connect to database
            const connection = await client.connect()

            // init objectid
            const userObjectId = new ObjectId(userId)

            // send query to database
            const tasks = (await connection
                .db()
                .collection('tasks')
                .find({ user_id: userObjectId })
                .toArray()) as task[]

            // return tasks
            return tasks
        } catch (error) {
            throw new Error(`can't get tasks: ${error}`)
        } finally {
            // close database
            await client.close()
        }
    }

    /**
     * this method create new task
     * @returns boolean
     */
    public create = async (task: task): Promise<boolean> => {
        try {
            // connect to database
            const connection = await client.connect()

            // send query to database
            await connection.db().collection('tasks').insertOne(task)

            // return tasks
            return true
        } catch (error) {
            throw new Error(`can't create task: ${error}`)
        } finally {
            // close database
            await client.close()
        }
    }

    /**
     * this method show task
     * @returns task
     */
    public show = async (id: string): Promise<task> => {
        try {
            // connect to database
            const connection = await client.connect()

            // init objectid
            const objectId = new ObjectId(id)
            // send query to database
            const task = (await connection
                .db()
                .collection('tasks')
                .findOne({ _id: objectId })) as task

            // return tasks
            return task
        } catch (error) {
            throw new Error(`can't show task: ${error}`)
        } finally {
            // close database
            await client.close()
        }
    }

    /**
     * this method update task
     * @returns boolean
     */
    public update = async (id: string, task: task): Promise<boolean> => {
        try {
            // connect to database
            const connection = await client.connect()

            // init objectid
            const objectId = new ObjectId(id)
            // send query to database
            await connection
                .db()
                .collection('tasks')
                .updateOne({ _id: objectId }, { $set: task })

            // return tasks
            return true
        } catch (error) {
            throw new Error(`can't update task: ${error}`)
        } finally {
            // close database
            await client.close()
        }
    }

    /**
     * this method update task
     * @returns boolean
     */
    public delete = async (id: string): Promise<boolean> => {
        try {
            // connect to database
            const connection = await client.connect()

            // init objectid
            const objectId = new ObjectId(id)
            // send query to database
            await connection
                .db()
                .collection('tasks')
                .deleteOne({ _id: objectId })

            // return tasks
            return true
        } catch (error) {
            throw new Error(`can't update task: ${error}`)
        } finally {
            // close database
            await client.close()
        }
    }
}
