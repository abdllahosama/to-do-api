import { taskStore } from '../../Models/Tasks'

const store = new taskStore()

describe('Test task model', (): void => {
    // check show method
    it('should show method', (): void => {
        expect(store.show).toBeDefined()
    })

    // check update method
    it('should have update method', (): void => {
        expect(store.update).toBeDefined()
    })

    // check delete method
    it('should have delete method', (): void => {
        expect(store.delete).toBeDefined()
    })
})
