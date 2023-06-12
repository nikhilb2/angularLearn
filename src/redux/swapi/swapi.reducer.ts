
import { createReducer, on } from '@ngrx/store';
import { loadPeople, loadPeopleSuccess, loadPeopleFailure } from './swapi.actions';

export type Person = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  };
  
export interface SwapiState {
  people: Person[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SwapiState = {
  people: [],
  isLoading: false,
  error: null,
};

export const swapiReducer = createReducer(
  initialState,
  on(loadPeople, (state) => ({ ...state, isLoading: true, error: null })),
  on(loadPeopleSuccess, (state, { people }) => ({ ...state, people, isLoading: false })),
  on(loadPeopleFailure, (state, { error }) => ({ ...state, isLoading: false, error }))
);