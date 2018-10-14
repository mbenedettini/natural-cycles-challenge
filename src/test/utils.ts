import { createConnection, Connection } from 'typeorm'

export const TEST_PORT = 3001
import log from '../logger'
import app from '../app'
let conn: Connection
let server: any

async function clearDb(conn: Connection) {
  const entities = conn.entityMetadatas
  for (const entity of entities) {
    const repository = await conn.getRepository(entity.name)
    await repository.query(`DELETE FROM ${entity.tableName};`)
  }
}

async function utilsBeforeAll() {
  log.debug('beforeAll')

  conn = await createConnection({
    type: 'postgres',
    host: 'testdb',
    username: 'test',
    password: 'test',
    database: 'test',
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/*.ts'],
  })
  await conn.runMigrations()
  server = app.listen(TEST_PORT)
}

async function utilsBeforeEach() {
  return clearDb(conn)
}

async function utilsAfterAll() {
  log.debug('afterAll')
  await conn.close()
  if (server) {
    await server.close()
  }
}

export async function setupTests() {
  beforeAll(utilsBeforeAll)
  beforeEach(utilsBeforeEach)
  afterAll(utilsAfterAll)
}

export function getBaseURL(): string {
  return `http://localhost:${TEST_PORT}`
}

export function isValidUUID(value: string): boolean {
  return !!value.match(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  )
}
