import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usrEndPoint:string;
  userNotifier:Subject<boolean>;

  constructor(private hc:HttpClient) {
    this.usrEndPoint=environment.usersUrl;
    this.userNotifier= new Subject<boolean>();
  }

  login(email:string,password:string):Observable<User>{
    return this.hc.get<User[]>(`${this.usrEndPoint}?email=${email}`).pipe(
      map(users => {
        if(!users || users.length==0){
          throw new Error("No Such User Found");
        }
        let user = users[0];
        if(user.password!=password){
          throw new Error("Invalid credentials");
        }
        sessionStorage.setItem('user',JSON.stringify({...user,password:undefined}));
        this.userNotifier.next(true);
        return user;
      })
    );
  }

  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.clear();
    this.userNotifier.next(false);
  }

  currentUser() : User|null{
    let user=null;
    let userString = sessionStorage.getItem('user');
    if(userString){
      user = JSON.parse(userString);
    }
    return user;
  }

  isUserLoggedIn():boolean{
    return this.currentUser()!=null;
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
