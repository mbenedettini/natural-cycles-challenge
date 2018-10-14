const request = require('request-promise')

import log from '../logger'
import { loadUser } from './fixtures'
import { setupTests, getBaseURL } from './utils'
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
