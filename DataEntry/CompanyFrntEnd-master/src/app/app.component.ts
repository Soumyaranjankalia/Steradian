import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IDropdownSettings, NgMultiSelectDropDownModule, } from 'ng-multiselect-dropdown';
// import { Country } from './country';
import { DataService } from './services/data.service';
// import { State } from './state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public saveForm: any;
 
  feature:any=[];
subfeature:any=[];

  constructor(private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {

this.feature=this.ds.feature()
console.log(this.feature);

    this.saveForm = this.fb.group({

      cname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      adrs: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      pid: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

      web: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      features: new FormArray([new FormControl()]),
      subfeatures: new FormArray([new FormControl()]),
      addinput: new FormArray([new FormControl()]),
      splinput: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],


    })



  }
  onSelect(feature:any)
  {
this.subfeature=this.ds.subfeature().filter(e=>e.id == feature.target.value)
// console.log(this.subfeature);


  }
  addFeatures() {
  
    (this.saveForm.get('features') as FormArray).push(new FormControl());
    (this.saveForm.get('addinput') as FormArray).push(new FormControl());
    (this.saveForm.get('subfeatures') as FormArray).push(new FormControl());

  }

  // addSubFeatures(event:any) {
  //   (this.saveForm.get('subfeatures') as FormArray).push(new FormControl());
  // }
  // addMoreInput() {
  //   (this.saveForm.get('addinput') as FormArray).push(new FormControl());

  // }

  save() {

    console.log(this.saveForm.value);
    // this.count=this.count++

    if (this.saveForm) {
      //check validation
      const result = this.ds.save(this.saveForm.value)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            //  this.saveForm.value="";


          }

        },
          (error: any) => {
            console.log(error);

          }
        )
    }

  }








}
