import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';
import {AuthenticationService} from '../shared/services/authentication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AppState } from '../shared/store/app.reducer';
import { Store } from '@ngrx/store';
import {ToastrService} from 'ngx-toastr';
import {loadAvatar, loadUserProfile} from '../shared/store/auth';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  providers: [AuthenticationService]
})
export class LoginDialogComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private toastrService: ToastrService,
    private appState: Store<AppState>,
    private authenticationService: AuthenticationService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<LoginDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  openRegisterDialog() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      panelClass: 'custom-dialog'
    });
  }

  onLogin(form: FormGroup) {
    const {value, valid} = form;

    if (valid) {
      this.authenticationService.authenticate(value.username, value.password).subscribe(
        data => {
          this.router.navigate(['luyen-thi']);
          this.dialogRef.close();
          this.toastrService.success('Logged in successfully', 'Login');
          this.appState.dispatch(loadUserProfile());
          this.appState.dispatch(loadAvatar());
        },
        error => {
          console.log('Tai khoan mat khau khong chinh xac');
        }
      );
    }
  }

  displayFieldCss(field: string) {
    return (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ? 'alert-validate' : '';
  }

  fieldError(field: string) {
    const error = this.loginForm.get(field).errors;
    const showField = field[0].toUpperCase() + field.substr(1).toLowerCase();
    if (error.required) {
      return showField + ' is required!';
    }
    if (error.invalid) {
      return showField + ' is invalid!';
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
