import log from '../../src/logger'

beforeAll(() => {
  log.debug('beforeAll')
})

afterAll(() => {
  log.debug('afterAll')
})

test('Placeholder', () => {
  expect(1).toBe(1)
})
