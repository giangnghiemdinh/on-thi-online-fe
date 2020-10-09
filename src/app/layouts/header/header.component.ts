import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../../login-dialog/login-dialog.component';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../shared/store/app.reducer';
import { DomSanitizer } from '@angular/platform-browser';
import {clearAuth, selectAvatar, selectUserProfile} from '../../shared/store/auth';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthenticationService]
})
export class HeaderComponent implements OnInit {

  userProfile$: Observable<any>;
  avatar$: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private appState: Store<AppState>,
    private sanitizer: DomSanitizer,
    private router: Router,
    private authenticationService: AuthenticationService,
    ) { }

  ngOnInit(): void {
    this.userProfile$ = this.appState.pipe(select(selectUserProfile));

    this.avatar$ = this.appState.pipe(select(selectAvatar));
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      panelClass: 'custom-dialog'
    });
  }

  openProfile() {
    this.router.navigate(['trang-ca-nhan']);
  }

  onLogout() {
    this.authenticationService.logOut();
    this.appState.dispatch(clearAuth());
    this.router.navigate(['']);
  }

  handleGetAvatar(avatar: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${avatar}`);
  }
}
