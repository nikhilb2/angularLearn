
import { createAction, props } from '@ngrx/store';
import { Person } from './swapi.reducer';


export const loadPeople = createAction('[Swapi] Load People');
export const loadPeopleSuccess = createAction('[Swapi] Load People Success', props<{ people: Person[] }>());
export const loadPeopleFailure = createAction('[Swapi] Load People Failure', props<{ error: string }>());