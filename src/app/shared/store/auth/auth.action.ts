import { createAction, props } from '@ngrx/store';

// ******************* Load User Profile ********************
export const loadUserProfile = createAction(
  '[Auth] Load User Profile'
);

export const loadUserProfileSuccess = createAction(
  '[Auth/API] Load User Profile Success',
  props<{ response: any}>()
);

export const loadUserProfileFailure = createAction(
  '[Auth/API] Load User Profile Failure',
  props<{ errors: any }>()
);

// ******************* End: Load User Profile ********************

// ******************* Load Avatar ********************
export const loadAvatar = createAction(
  '[Auth] Load Avatar'
);

export const loadAvatarSuccess = createAction(
  '[Auth/API] Load Avatar Success',
  props<{ response: any}>()
);

export const loadAvatarFailure = createAction(
  '[Auth/API] Load Avatar Failure',
  props<{ errors: any }>()
);

// ******************* End: Load Avatar ********************

// ******************* Clear auth ********************
export const clearAuth = createAction(
  '[Auth] Clear Auth'
);
// ******************* End: Clear auth ********************
