import request from 'supertest'
import { app } from '../../app'
import { SignupTestHelper } from '../../test/signup-test-helper'

it("should response with details about the current user", async () => {
    const signupResponse = await SignupTestHelper()

    const response = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', signupResponse.get('Set-Cookie'))
        .send()
        .expect(200)

    expect(response.body.currentUser.email).toEqual('test@test.com')
})

it("should response with null if not authenticated", async () => {
    const response = await request(app)
        .get('/api/users/currentuser')
        .send()
        .expect(200)

    expect(response.body.currentUser).toBeNull()
})