import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { User } from "../models/model";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public isLoggedUser: Subject<any> | undefined;
    private url = 'https://localhost:7231'

    public getUserStatus(): any {
        return JSON.parse(localStorage.getItem("userCredentials") || '{}');
    }

    constructor(private http: HttpClient,
        private router: Router) {
            this.isLoggedUser = new Subject<any>();;
    }

    login(username: string, password: string){
        var user = new User();
        user.username = username;
        user.password = password;
        
        this.http.post<any>(this.url+`/api/Authentication/sign-in`, user).subscribe(
          (data) => {
            if(data.token != null){
                user.token = data.token
                user.password = ''
                localStorage.setItem("userCredentials", JSON.stringify(user))
                this.isLoggedUser?.next(JSON.parse(localStorage.getItem("userCredentials") || '{}'))
            }
            else
        {
            }
          },
          (error) => {
          
            console.error('POST request error:', error);
          }
        );
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userCredentials');
        if(this.isLoggedUser != undefined)
            this.isLoggedUser.next({});

    }

    signUp(user: User){
        this.http.post<any>(this.url+`/api/Authentication/register`, user).subscribe(
            (data) => {
              
              if(data.data == 'User is created') {

               
                  
                 this.router.navigate(["/login"])
              }
            },
            (error) => {
                
              console.error('POST request error:', error);
            }
          );
    }
}