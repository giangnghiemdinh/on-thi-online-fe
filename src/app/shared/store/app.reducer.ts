import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {RouterStateUrl} from './router';
import {initStateFromLocalStorage} from './meta/init-state-from-local-storage.reducer';
import {authReducer, AuthState} from './auth';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];
