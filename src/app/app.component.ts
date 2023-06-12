import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';




import { Person, SwapiState } from 'src/redux/swapi/swapi.reducer';
import { selectError, selectIsLoading, selectPeople } from 'src/redux/swapi/swapi.selector';
import { loadPeople } from 'src/redux/swapi/swapi.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people$: Observable<Person[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<{swapi: SwapiState}>) {
    this.people$ = store.select(selectPeople);
    this.isLoading$ = store.select(selectIsLoading);
    this.error$ = store.select(selectError);

    
  }

  ngOnInit(): void {
    this.store.dispatch(loadPeople());
  }
}