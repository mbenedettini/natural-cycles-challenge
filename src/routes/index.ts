import express from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/User'
const router = express.Router()

import log from '../logger'

// The usual regexp checker I use in my projects
const EMAIL_REGEXP = new RegExp(
  /(([a-zA-Z][^<>()\[\]\\.\/,;:\s@"=]+(\.[^<>()\[\]\\.\/,;:\s@="]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
)

function isValidUUID(value: string): boolean {
  return !!value.match(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  )
}

router.get('/', async function(req: any, res: any, next: any) {
  const repo = getManager().getRepository(User)
  const users = await repo.find()
  res.render('index', {
    users: users,
  })
})

router.get('/new', async function(req: any, res: any, next: any) {
  res.render('new')
})

router.post('/new', async function(req: any, res: any, next: any) {
  const repo = getManager().getRepository(User)
  const email = req.body.email
  const matches = email.match(EMAIL_REGEXP)
  if (matches) {
    log.debug('Valid email address, creating user...')
    let user = new User()
    user.email = email
    await repo.save(user)
    res.render(`/${user.id}`)
  } else {
    log.warn('Not a valid email address: ', email)
    res.render('new', {
      error: 'Email address not valid',
    })
  }
})

router.get('/:id', async (req: any, res: any, next: any) => {
  if (!isValidUUID(req.params.id)) {
    return res.render('edit', {
      user: {},
      error: 'Invalid user id',
    })
  }
  const repo = getManager().getRepository(User)
  const user = await repo.findOne(req.params.id)
  if (!user) {
    return res.render('edit', {
      user: {},
      error: 'User not found',
    })
  }
  res.render('edit', {
    user: user,
  })
})

router.post('/:id', async (req: any, res: any, next: any) => {
  if (!isValidUUID(req.params.id)) {
    return res.render('edit', {
      user: {},
      error: 'Invalid user id',
    })
  }
  const repo = getManager().getRepository(User)
  let user = await repo.findOne(req.params.id)
  if (!user) {
    return res.render('edit', {
      user: {},
      error: 'User not found',
    })
  }
  const email = req.body.email
  user.email = email
  try {
    log.debug('Updating user...')
    await repo.save(user)
  } catch (e) {
    log.error(e)
    return res.render('edit', {
      user: user,
      error: 'Some error has happened',
    })
  }
  res.render('edit', {
    user: user,
    message: 'User successfully saved',
  })
})

export { router as index }
