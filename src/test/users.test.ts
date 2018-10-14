const request = require('request-promise')
const uuid = require('uuid/v4')
import { getManager } from 'typeorm'

import { User } from '../entity/User'
import log from '../logger'
import { loadUser } from './fixtures'
import { setupTests, getBaseURL, isValidUUID } from './utils'
setupTests()

test('List users', async () => {
  const data = await request({
    uri: getBaseURL() + '/users',
    json: true,
  })
  log.debug(data)
  expect(data).toEqual({
    data: [],
  })

  const user = await loadUser()

  const dataNotEmpty = await request({
    uri: getBaseURL() + '/users',
    json: true,
  })
  log.debug(dataNotEmpty)
  expect(dataNotEmpty).toEqual({
    data: [
      {
        id: user.id,
        email: user.email,
      },
    ],
  })
})

test('Create user', async () => {
  let error
  try {
    await request({
      method: 'POST',
      uri: getBaseURL() + '/users',
      json: true,
      body: {
        email: 'not@valid',
      },
    })
  } catch (e) {
    error = e
  }
  expect(error.statusCode).toBe(400)
  expect(error.error.error).toBe('Invalid email address')

  const userResponse = await request({
    method: 'POST',
    uri: getBaseURL() + '/users',
    json: true,
    body: {
      email: 'example@example.com',
    },
  })

  const userData = userResponse.data
  expect(userData.email).toBe('example@example.com')
  expect(isValidUUID(userData.id)).toBe(true)

  error = null
  try {
    await request({
      method: 'POST',
      uri: getBaseURL() + '/users',
      json: true,
      body: {
        email: 'example@example.com',
      },
    })
  } catch (e) {
    error = e
  }
  expect(error.statusCode).toBe(400)
  expect(error.error.error).toBe('Email already exists')
})

test('Retrieve user', async () => {
  const user = await loadUser()
  const res = await request({
    uri: getBaseURL() + '/users/' + user.id,
    json: true,
  })
  const userData = res.data
  expect(userData.email).toBe(user.email)
  expect(userData.id).toBe(user.id)

  let error
  try {
    await request({
      uri: getBaseURL() + '/users/' + uuid(),
      json: true,
    })
  } catch (e) {
    error = e
  }
  expect(error.statusCode).toBe(404)
  expect(error.error.error).toBe('User not found')
})

test('Update user', async () => {
  const user = await loadUser()
  const res = await request({
    method: 'PUT',
    uri: getBaseURL() + '/users/' + user.id,
    json: true,
    body: {
      email: 'yadayada@example.com',
    },
  })
  const userData = res.data
  expect(userData.email).toBe('yadayada@example.com')
  expect(userData.id).toBe(user.id)

  let error
  try {
    await request({
      method: 'PUT',
      uri: getBaseURL() + '/users/' + user.id,
      json: true,
      body: {
        email: 'invalid@email',
      },
    })
  } catch (e) {
    error = e
  }
  expect(error.statusCode).toBe(400)
  expect(error.error.error).toBe('Invalid email address')

  error = null
  try {
    await request({
      method: 'PUT',
      uri: getBaseURL() + '/users/' + uuid(),
      json: true,
      body: {
        email: 'example@email.com',
      },
    })
  } catch (e) {
    error = e
  }
  expect(error.statusCode).toBe(404)
  expect(error.error.error).toBe('User not found')

  /* Create another user with test@test.com and try to change email of the
     first one to the same address*/
  const anotherUser = await loadUser()
  error = null
  try {
    await request({
      method: 'PUT',
      uri: getBaseURL() + '/users/' + user.id,
      json: true,
      body: {
        email: 'test@test.com',
      },
    })
  } catch (e) {
    error = e
  }
  expect(error.statusCode).toBe(400)
  expect(error.error.error).toBe('Email already exists')
})

test('Delete user', async () => {
  const user = await loadUser()

  let error
  try {
    await request({
      method: 'DELETE',
      uri: getBaseURL() + '/users/' + uuid(),
      json: true,
    })
  } catch (e) {
    error = e
  }
  expect(error.statusCode).toBe(404)
  expect(error.error.error).toBe('User not found')

  const res = await request({
    method: 'DELETE',
    uri: getBaseURL() + '/users/' + user.id,
    json: true,
  })

  const repo = getManager().getRepository(User)
  const foundUser = await repo.findOne(user.id)
  expect(foundUser).toBeFalsy()
})
