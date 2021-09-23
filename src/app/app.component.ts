import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

// export type EditorType = 'name' | 'profile';

otpSendResponse: [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  profileForm = this.fb.group({
    city: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9. _-]+$')]],
    PanNumber: ['', [Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
    fullName: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9. _-]+$')]],
    email: ['',[Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]],
    mobile: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
    otpNumber: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get profileFormFval() {
    return this.profileForm.controls;
  }

  getOTP() {
    if(this.profileForm.valid){

      this.validateAllFields(this.profileForm);

      

    }else{
      this.validateAllFields(this.profileForm);
    }
  }

  validateAllFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field);            
        if (control instanceof FormControl) {             
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        
            this.validateAllFields(control);  
        }
    });
}
  // get showNameEditor() {
  //   return this.editor === 'name';
  // }

  // get showProfileEditor() {
  //   return this.editor === 'profile';
  // }

  // toggleEditor(type: EditorType) {
  //   this.editor = type;
  // }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
