import request from 'supertest'
import { app } from '../app'

const SignupTestHelper = async () => {
    const email = 'test@test.com'
    const password = 'password'

    return request(app)
        .post('/api/users/signup')
        .send({ email, password })
        .expect(201)
}

export { SignupTestHelper }