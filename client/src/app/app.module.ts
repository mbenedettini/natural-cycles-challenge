import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { routing } from './app.routing'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AddUserComponent } from './add-user/add-user.component'
import { EditUserComponent } from './edit-user/edit-user.component'
import { ListUserComponent } from './list-user/list-user.component'
import { UserService } from './service/user.service'

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [BrowserModule, routing, ReactiveFormsModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
