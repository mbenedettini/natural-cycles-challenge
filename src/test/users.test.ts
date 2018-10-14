const request = require('request-promise')

import log from '../logger'
import { loadUser } from './fixtures'
import { setupTests, getBaseURL, isValidUUID } from './utils'
setupTests()

test('Placeholder', () => {
  expect(1).toBe(1)
})

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
})
