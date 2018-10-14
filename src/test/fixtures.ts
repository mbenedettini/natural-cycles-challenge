import { getManager } from 'typeorm'
import { User } from '../entity/User'

export async function loadUser() {
  const repo = getManager().getRepository(User)
  let user = new User()
  user.email = 'test@test.com'
  return repo.save(user)
}
