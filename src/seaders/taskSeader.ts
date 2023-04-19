import { task, taskStore } from '../Models/Tasks'
import { ObjectId } from 'mongodb'

// init task store
const store = new taskStore()
// init user id
const usserObjectId = new ObjectId('643f1216cc63018540fbb9e9')
// add tasks
for (let i = 1; i < 50; i++) {
    const task: task = {
        user_id: usserObjectId,
        title: 'task' + i,
        description: 'decription' + i,
        status: false,
    }
    store.create(task)
}
