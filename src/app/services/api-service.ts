import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({ providedIn: 'root' })
export class ApiService {

    public JWTtoken: string;
    private url = 'https://localhost:7231';
    public headers: any;
    constructor(private http: HttpClient,
        private router: Router,
        private authService: AuthenticationService) {
        var localStorage = this.authService.getUserStatus();
        if(localStorage !== '{}'){
            this.JWTtoken = localStorage.token;
        }
        else {
            this.JWTtoken = ''
        }

        this.headers = this.JWTtoken ? new HttpHeaders().set('Authorization', `Bearer ${this.JWTtoken}`) : null;
    }


    public getAllPhoneNumbers(){
        var localStorage = this.authService.getUserStatus();
        if(localStorage !== '{}'){
            this.JWTtoken = localStorage.token;
        }
        else {
            this.JWTtoken = ''
        }

      this.headers = this.JWTtoken ? new HttpHeaders().set('Authorization', `Bearer ${this.JWTtoken}`) : null;
      return this.http.get<any>(this.url+`/api/TelegramApi/get-all-user-phones`, { headers: this.headers });
    }
}