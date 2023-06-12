import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPeople } from 'src/redux/swapi/swapi.actions';
import { Person, SwapiState } from 'src/redux/swapi/swapi.reducer';
import { selectError, selectIsLoading, selectPeople } from 'src/redux/swapi/swapi.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
