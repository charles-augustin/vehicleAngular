import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  username = 'Profile';
  subscription: Subscription;
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
     },
    // {
    //   value: 'dark',
    //   name: 'Dark',
    // },
    // {
    //   value: 'cosmic',
    //   name: 'Cosmic',
    // },
    // {
    //   value: 'corporate',
    //   name: 'Corporate',
    // },
  ];

  currentTheme = 'dark';

  userMenu = [{ title: 'Login', icon: 'log-in-outline' }, { title: 'Log out', icon: 'log-out-outline' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private dialog: MatDialog,
    private authService: AuthService) {
    this.menuService.onItemClick().subscribe((event) => {
      if (event.item.title == "Login")
        this.openLoginForm();
      else if (event.item.title == "Log out")
        this.logOut();
    });
  }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUserName()
      .subscribe(name => this.username = name);

    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscription.unsubscribe();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  openLoginForm() {
    const loginRef = this.dialog.open(LoginComponent, { width: '500px', height: '350px' });

    loginRef.afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
  }
}
