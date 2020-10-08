import { expect } from 'chai'
import supertest from 'supertest'
import app from './app'

const request = supertest(app)

describe('app', () => {
  it('can get respond from home page', async () => {
    const getHelloResponse = await request.get('/')

    expect(getHelloResponse.body).deep.include({
      isSucces: true,
      message: 'Hello, World!',
    })
  })
})
