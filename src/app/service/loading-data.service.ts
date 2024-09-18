import { Injectable } from '@angular/core';
import {ELEMENT_DATA} from '../model/elementData'
import { delay, Observable, of } from 'rxjs';
import { PeriodicElement } from '../interface/dataInterface';

@Injectable({
  providedIn: 'root'
})
export class LoadingDataService {

  constructor() { }
  fetchData(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA).pipe(delay(5000)); // Symulacja opóźnienia 1 sekunda
  }
}
