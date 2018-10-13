import express from 'express'
import { getManager } from 'typeorm'
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

export { router as index }
