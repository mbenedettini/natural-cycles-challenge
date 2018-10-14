import { Component, OnInit } from '@angular/core'
import { UserService } from '../service/user.service'
import { Router } from '@angular/router'
import { User } from '../model/user.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user: User
  editForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {}

  async ngOnInit() {
    let userId = localStorage.getItem('editUserId')
    if (!userId) {
      alert('Invalid action.')
      this.router.navigate(['list-user'])
      return
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
    })
    const user = await this.userService.getUserById(userId)
    this.editForm.setValue(user)
  }

  async onSubmit() {
    try {
      const updatedUser = await this.userService.updateUser(this.editForm.value)
      this.router.navigate(['list-user'])
    } catch (e) {
      window.alert(e.error.error)
    }
  }
}
