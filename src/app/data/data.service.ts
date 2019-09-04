import { Injectable } from '@angular/core';
import { IUserSettings } from './iuser-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private theHttp: HttpClient) { }

  postUserSettingsForm(userSettings: IUserSettings): Observable<any> {
    // tslint:disable-next-line: no-trailing-whitespace
    
    return this.theHttp.post('https://putsreq.com/0gzkLkfEKNNOFX1frJdu', userSettings);
    // tslint:disable-next-line: no-trailing-whitespace
    
    // return of(userSettings);
  }
}
