
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SwapiState } from './swapi.reducer';

// Select the SwapiState slice from the AppState
const selectSwapiState = createFeatureSelector<SwapiState>('swapi');

// Extract the people property from the SwapiState
export const selectPeople = createSelector(
  selectSwapiState,
  (state: SwapiState) => state.people
);
// Extract the people property from the SwapiState
export const selectIsLoading = createSelector(
  selectSwapiState,
  (state: SwapiState) => state.isLoading
);
// Extract the people property from the SwapiState
export const selectError = createSelector(
  selectSwapiState,
  (state: SwapiState) => state.error || ""
);