import TasksController from '../../Controllers/TasksController'

describe('Test tasks controller', (): void => {
    // check index method
    it('should have index method', (): void => {
        expect(TasksController.index).toBeDefined()
    })

    // check create method
    it('should have create method', (): void => {
        expect(TasksController.create).toBeDefined()
    })

    // check show method
    it('should have show method', (): void => {
        expect(TasksController.show).toBeDefined()
    })

    // check update method
    it('should have update method', (): void => {
        expect(TasksController.update).toBeDefined()
    })

    // check delete method
    it('should have delete method', (): void => {
        expect(TasksController.delete).toBeDefined()
    })
})
