import { Request, Response } from 'express'
import { task, taskStore } from '../Models/Tasks'
import { ObjectId } from 'mongodb'

class TasksController {
    /**
     * this method create tasks
     * @param request
     * @param response
     */
    public static create = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            // init task store
            const store = new taskStore()
            // add new task
            const usserObjectId = new ObjectId(request.body.user_id)
            const task: task = {
                user_id: usserObjectId,
                title: request.body.name,
                description: request.body.description,
                status: false,
            }
            await store.create(task)
            response.status(200).json({
                status: 'success',
                message: 'task created successfully',
            })
        } catch (error) {
            throw new Error(`cant't get tasks: ${error}`)
        }
    }

    /**
     * this method show task
     * @param request
     * @param response
     */
    public static show = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const store = new taskStore()
            const data = await store.show(request.params.id)
            response.status(200).json({ status: 'success', data: data })
        } catch (error) {
            throw new Error(`cant't show task: ${error}`)
        }
    }

    /**
     * this method update task
     * @param request
     * @param response
     */
    public static update = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const store = new taskStore()
            const task: task = {
                title: request.body.title,
                description: request.body.description,
                status: false,
            }
            await store.update(request.params.id, task)
            response.status(200).json({
                status: 'success',
                message: 'task updated successfully',
            })
        } catch (error) {
            throw new Error(`cant't show task: ${error}`)
        }
    }

    /**
     * this method delete task
     * @param request
     * @param response
     */
    public static delete = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const store = new taskStore()
            await store.delete(request.params.id)
            response.status(200).json({
                status: 'success',
                message: 'task deleted successfully',
            })
        } catch (error) {
            throw new Error(`cant't show task: ${error}`)
        }
    }
}

export default TasksController
