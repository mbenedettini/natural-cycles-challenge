import express from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/User'
const router = express.Router()

/* GET home page. */
router.get('/', async function(req: any, res: any, next: any) {
  const repo = getManager().getRepository(User)
  const users = await repo.find()
  res.render('index', {
    users: users,
  })
})

export { router as index }
