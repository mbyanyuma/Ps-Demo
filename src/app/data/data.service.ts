import { Injectable } from '@angular/core';
import { IUserSettings } from './iuser-settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserSettingsForm(userSettings: IUserSettings): Observable<IUserSettings> {
    return of(userSettings);
  }
}
