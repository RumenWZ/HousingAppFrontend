import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  @ViewChild('formTabs') formTabs: TabsetComponent;

  addPropertyForm!: FormGroup;
  clickedNext: boolean;

  propertyTypes: Array<string> = ['House', 'Apartment'];
  furnishingTypes: Array<string> = ['Fully', 'Partially', 'Unfurnished'];
  readyToMoveOptions: Array<string> = ['Yes', 'No'];

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

  constructor(
    private router: Router,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
      SellOrRent: ['1', Validators.required],
      BHK: [null, Validators.required],
      FType: [null, Validators.required],
      PType: [null, Validators.required],
      Name: [null, Validators.required],
      City: [null, Validators.required],
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Maintenance: [null],
        Security: [null],
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloors: [null],
        Address: [null, Validators.required],
        LandMark: [null]
      }),

      OtherInfo: this.fb.group({
        RTM: [null,Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrnace: [null],
        Description: [null]
      })

    });
  }

  //#region Getter Methods
  //#region FormGroups

  get BasicInfo() {
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }

  get PriceInfo() {
    return this.addPropertyForm.controls.PriceInfo as FormGroup;
  }

  get AddressInfo() {
    return this.addPropertyForm.controls.AddressInfo as FormGroup;
  }

  get OtherInfo() {
    return this.addPropertyForm.controls.OtherInfo as FormGroup;
  }
  //#endregion
  //#region FormControl
  get SellOrRent() {
    return this.BasicInfo.controls.SellOrRent as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls.BHK as FormControl;
  }

  get PType() {
    return this.BasicInfo.controls.PType as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls.FType as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls.Name as FormControl;
  }

  get City() {
    return this.BasicInfo.controls.City as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls.Price as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls.BuiltArea as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls.Address as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls.RTM as FormControl;
  }
  //#endregion
  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.RTM);
    if (this.TabValidityChecker()) {
      console.log('Property successfully listed on our website')
    } else {
      console.log('Form is invalid, please review your entries')
    }

  }

  TabValidityChecker(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }

  selectTab(id: number, currentTabValid?: boolean) {
    this.clickedNext = true;
    console.log(this.Address);
    if (currentTabValid) {
      this.formTabs.tabs[id].active = true;
    }
  }
}
