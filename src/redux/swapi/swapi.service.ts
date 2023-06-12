// swapi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './swapi.reducer';


type GetPeopleResponse = {
    count: number
	next: null | string
	previous: null | string
    results: Person[]
}

@Injectable()
export class SwapiService {
  private apiUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<GetPeopleResponse> {
    return this.http.get<any>(this.apiUrl);
  }
}