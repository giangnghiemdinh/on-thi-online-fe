import {createReducer, Action, on} from '@ngrx/store';
import * as authActions from './auth.action';

export interface AuthState {
  errors: any;
  isLoading: any;
  userProfile: any;
  avatar: any;
}

export const initialState: AuthState = {
  errors: null,
  isLoading: null,
  userProfile: null,
  avatar: null
};

const reducer = createReducer(
  initialState,

  /********** Load User Profile **********/
  on(authActions.loadUserProfile, state => ({
    ...state,
    errors: null,
    isLoading: true,
  })),

  on(authActions.loadUserProfileSuccess, (state, {response}) => (({
    ...state,
    userProfile: response.body.userProfile,
    errors: null,
    isLoading: false,
  }))),

  on(authActions.loadUserProfileFailure, (state, {errors}) => ({
    ...state,
    errors,
    isLoading: false,
  })),
  /********** End: Load User Profile **********/

  /********** Load Avatar **********/
  on(authActions.loadAvatar, state => ({
    ...state,
    errors: null,
    isLoading: true,
  })),

  on(authActions.loadAvatarSuccess, (state, {response}) => (({
    ...state,
    avatar: response.body.imgBase64,
    errors: null,
    isLoading: false,
  }))),

  on(authActions.loadAvatarFailure, (state, {errors}) => ({
    ...state,
    errors,
    isLoading: false,
  })),
  /********** End: Load Avatar **********/

  /********** Clear auth **********/
  on(authActions.clearAuth, state => ({
    ...state,
    errors: null,
    avatar: null,
    userProfile: null,
  })),
  /********** End: Clear auth **********/
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
