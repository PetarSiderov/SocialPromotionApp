import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public isLoggedUser: BehaviorSubject<any> | undefined;


    public getUserStatus(): any {
        return JSON.parse(localStorage.getItem("userCredentials") || '{}');
    }

    constructor(private http: HttpClient,
        private router: Router) {
            this.isLoggedUser = new BehaviorSubject<any>({ logged: true});
    }
}