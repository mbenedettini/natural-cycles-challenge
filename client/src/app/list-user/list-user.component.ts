import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../service/user.service'
import { User } from '../model/user.model'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  users: User[]

  constructor(private router: Router, private userService: UserService) {}

  async ngOnInit() {
    const users = await this.userService.getUsers()
    this.users = users
  }

  async deleteUser(user: User) {
    await this.userService.deleteUser(user.id)
    this.users = this.users.filter(u => u.id !== user.id)
  }

  editUser(user: User): void {
    localStorage.removeItem('editUserId')
    localStorage.setItem('editUserId', user.id.toString())
    this.router.navigate(['edit-user'])
  }

  addUser(): void {
    this.router.navigate(['add-user'])
  }
}
