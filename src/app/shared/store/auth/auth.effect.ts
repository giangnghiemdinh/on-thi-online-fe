import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as authActions from './auth.action';
import {UserService} from '../../services/user.service';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  loadUserProfile$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(authActions.loadUserProfile),
        exhaustMap(() =>
          this.userService.getProfile().pipe(
            map(response => {
              if (response.responseCode !== '200') {
                return authActions.loadUserProfileFailure({errors: response});
              } else {
                return authActions.loadUserProfileSuccess({response});
              }
            }),
            catchError(errors => of(authActions.loadUserProfileFailure({errors})))
          )
        )
      );
    }
  );

  loadAvatar$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(authActions.loadAvatar),
        mergeMap(() =>
          this.userService.getAvatar().pipe(
            map(response => {
              if (response.responseCode !== '200') {
                return authActions.loadAvatarFailure({errors: response});
              } else {
                return authActions.loadAvatarSuccess({response});
              }
            }),
            catchError(errors => of(authActions.loadAvatarFailure({errors})))
          )
        )
      );
    }
  );
}
