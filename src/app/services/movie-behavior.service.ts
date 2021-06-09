import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieBehaviorService {
  like=new BehaviorSubject<number>(0)
  constructor() { }
}
