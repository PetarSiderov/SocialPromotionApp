import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnDestroy,AfterViewInit} from '@angular/core';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';


/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  userStats: any;
  isLogged: boolean = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private authservice: AuthenticationService,
     private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.userStats = authservice.getUserStatus();
    debugger
    if (!Object.keys(this.userStats).length) {
      // authorised so return true
      this.isLogged = true;
    }
  }

  ngOnInit(): void {
    this.authservice.isLoggedUser?.subscribe(s => {
      if (!Object.keys(s).length) {
        this.isLogged = true;
        this.router.navigate(["/dashboard"])
      }
      else{
        this.isLogged = false;
        this.router.navigate(['/login'])
      }
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}
}
