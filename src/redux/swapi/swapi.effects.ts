import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { loadPeople, loadPeopleFailure, loadPeopleSuccess } from './swapi.actions';
import { SwapiService } from './swapi.service';

@Injectable()
export class SwapiEffects {
  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      switchMap(() =>
        this.swapiService.getPeople().pipe(
          map((result) => loadPeopleSuccess({ people:  result.results})),
          catchError((error) => of(loadPeopleFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private swapiService: SwapiService) {}
}