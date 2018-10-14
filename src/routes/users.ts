import express from 'express'
import { getManager, Not } from 'typeorm'
import { User } from '../entity/User'
const router = express.Router()

import log from '../logger'

// The usual regexp checker I use in my projects
const EMAIL_REGEXP = new RegExp(
  /(([a-zA-Z][^<>()\[\]\\.\/,;:\s@"=]+(\.[^<>()\[\]\\.\/,;:\s@="]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
)

router.get('/', async function(req: any, res: any, next: any) {
  const repo = getManager().getRepository(User)
  const users = await repo.find()
  res.json({
    data: users,
  })
})

router.post('/', async function(req: any, res: any, next: any) {
  const repo = getManager().getRepository(User)
  const email = req.body.email
  const matches = email.match(EMAIL_REGEXP)
  if (!matches) {
    log.warn('Not a valid email address: ', email)
    return res.status(400).json({
      error: 'Invalid email address',
    })
  }

  const existingUser = await repo.findOne({
    email: email,
  })
  if (existingUser) {
    return res.status(400).json({
      error: 'Email already exists',
    })
  }

  log.debug('Valid email address, creating user...')
  let user = new User()
  user.email = email
  await repo.save(user)
  return res.json({
    data: user,
  })
})

router.get('/:id', async (req: any, res: any, next: any) => {
  const repo = getManager().getRepository(User)
  const user = await repo.findOne(req.params.id)
  if (!user) {
    return res.status(404).json({
      error: 'User not found',
    })
  }
  return res.json({
    data: user,
  })
})

router.put('/:id', async (req: any, res: any, next: any) => {
  const repo = getManager().getRepository(User)
  let user = await repo.findOne(req.params.id)
  if (!user) {
    return res.status(404).json({
      error: 'User not found',
    })
  }
  const email = req.body.email
  const matches = email.match(EMAIL_REGEXP)
  if (!matches) {
    return res.status(400).json({
      error: 'Invalid email address',
    })
  }

  const existingUser = await repo.findOne({
    email: email,
    id: Not(user.id),
  })
  if (existingUser) {
    return res.status(400).json({
      error: 'Email already exists',
    })
  }

  user.email = email
  log.debug('Updating user...')
  await repo.save(user)
  res.json({
    data: user,
  })
})

router.delete('/:id', async (req: any, res: any, next: any) => {
  const repo = getManager().getRepository(User)
  let user = await repo.findOne(req.params.id)
  if (!user) {
    return res.status(404).json({
      error: 'User not found',
    })
  }
  await repo.remove(user)
  return res.json({})
})

export { router as users }
