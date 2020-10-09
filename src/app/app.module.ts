import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthHtppInterceptorService} from './shared/services/basic-auth-interceptor.service';
import { ToastrModule } from 'ngx-toastr';


// Redux store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {appReducers, metaReducers} from './shared/store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {appEffects} from './shared/store/app.effect';
import {RouterStateSerializer} from '@ngrx/router-store';
import {AppRouterStateSerializer} from './app-router-state-serializer';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    ForgotPasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers, {metaReducers}),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    MatInputModule,
    MenuModule,
    MatMenuModule
  ],
  entryComponents: [
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true },
    { provide: RouterStateSerializer, useClass: AppRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
