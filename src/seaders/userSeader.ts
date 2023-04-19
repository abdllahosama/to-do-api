import { user, userStore } from '../Models/Users'

// init user store
const store = new userStore()

// add user
for (let i = 1; i < 50; i++) {
    const user: user = {
        first_name: 'user',
        last_name: 'name' + i,
        email: 'email' + i,
        user_name: 'userName' + i,
        password: '123456',
    }
    store.insert(user)
}
