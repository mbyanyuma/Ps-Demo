import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/iuser-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  IUserSettings: IUserSettings = {
    name: 'Moses',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'some notes'
  };

  constructor() { }

  ngOnInit() {
  }

}
