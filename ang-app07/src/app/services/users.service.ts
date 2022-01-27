import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usrEndPoint:string;
  constructor(private hc:HttpClient) {
    this.usrEndPoint=environment.usersUrl;
  }

  getAll():Observable<User[]>{
    return this.hc.get<User[]>(this.usrEndPoint);
  }

  getById(id:number):Observable<User>{
    return this.hc.get<User>(`${this.usrEndPoint}/${id}`);
  }

  deleteById(id:number):Observable<void>{
    return this.hc.delete<void>(`${this.usrEndPoint}/${id}`);
  }

  addUser(user:User):Observable<User>{
    return this.hc.post<User>(this.usrEndPoint,user);
  }

  updateUser(user:User):Observable<User>{
    return this.hc.put<User>(`${this.usrEndPoint}/${user.id}`,user);
  }
}
