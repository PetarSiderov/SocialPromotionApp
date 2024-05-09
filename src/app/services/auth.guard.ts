import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { FactoryTarget } from "@angular/compiler";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const currentUser = this.authenticationService.getUserStatus();
        if (currentUser.token !== undefined) {
            // authorised so return true
            if(state.url == '/' || state.url == '/login' || state.url == '/sign-up'){
                this.router.navigate(['/dashboard'])
                return true;
            }
            return true;
        }
        else { 
            if(state.url == '/login' || state.url == '/sign-up'){
                return true;
            }
            this.router.navigate(['/login'])
            return false;
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.getUserStatus();
        if (currentUser.token !== undefined) {
            // authorised so return true
            if(state.url == '/' || state.url == '/login' || state.url == '/sign-up'){
                this.router.navigate(['/dashboard'])
                return true;
            }
            return true;
        }
        else { 
            if(state.url == '/login' || state.url == '/sign-up'){
                return true;
            }
            this.router.navigate(['/login'])
            return false;
        }
    }

    
}