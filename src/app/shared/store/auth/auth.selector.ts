import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectUserProfile = createSelector(
  selectAuth,
  (state: AuthState) => state.userProfile
);

export const selectAvatar = createSelector(
  selectAuth,
  (state: AuthState) => state.avatar
);
