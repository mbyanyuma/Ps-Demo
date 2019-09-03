import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/iuser-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

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

  blankUserSettings: IUserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  theUserSettings: IUserSettings = { ...this.originalUserSettings }; // the '...' or spread operator, takes originalUserSettings
                                                                    // and copies each property into theUserSettings

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onBlur(field: NgModel){
    console.log('in onBlur: ', field.value);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.theUserSettings).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    );
  }

}
