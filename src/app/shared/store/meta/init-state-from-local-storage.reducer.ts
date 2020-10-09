import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppState } from '../app.reducer';
import {LocalStorageService} from '../../services/local-storage.service';


export function initStateFromLocalStorage(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  // tslint:disable-next-line:only-arrow-functions
  return function(state, action) {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return { ...newState, ...LocalStorageService.loadInitialState() };
    }
    return newState;
  };
}
