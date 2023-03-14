import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment'];
  furnishingTypes: Array<string> = ['Fully', 'Partial', 'Unfurnished'];

  propertyView: IPropertyBase = {
    Id: null,
    Name: null,
    Price: null,
    SellOrRent: null,
    PType: null,
    FType: null,
    RTM: null,
    BHK: null,
    BuiltArea: null,
    City: null
  };

  constructor(private router: Router) {}

  ngOnInit() {

  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm) {
    console.log("form submitted!");
    console.log(Form);
  }

  selectTab(id: number) {
    this.formTabs.tabs[id].active = true;
  }
}
