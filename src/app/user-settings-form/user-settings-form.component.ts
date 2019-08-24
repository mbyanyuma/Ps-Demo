import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/iuser-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: IUserSettings = {
    name: 'Moses',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'some initial original notes'
  };

  theUserSettings: IUserSettings = { ...this.originalUserSettings }; // the '...' or spread operator, takes originalUserSettings
                                                                    // and copies each property into userSettings

  constructor() { }

  ngOnInit() {
  }

}
