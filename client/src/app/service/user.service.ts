import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user.model'

import { environment } from '../../environments/environment'

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl: string = environment.BaseUrl + '/users'

  async getUsers(): Promise<User[]> {
    const users = (await this.http.get<any>(this.baseUrl).toPromise())
      .data as User[]
    return users
  }

  async getUserById(id: string): Promise<User> {
    return (await this.http.get<any>(this.baseUrl + '/' + id).toPromise())
      .data as User
  }

  async createUser(user: User): Promise<User> {
    return (await this.http.post<any>(this.baseUrl, user).toPromise())
      .data as User
  }

  async updateUser(user: User): Promise<User> {
    return (await this.http
      .put<any>(this.baseUrl + '/' + user.id, user)
      .toPromise()).data as User
  }

  async deleteUser(id: string) {
    return await this.http.delete(this.baseUrl + '/' + id).toPromise()
  }
}
