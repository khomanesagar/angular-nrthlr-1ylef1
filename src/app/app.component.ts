import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

// export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  profileForm = this.fb.group({
    city: ['', [Validators.required]],
    PanNumber: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    email: ['',[Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]],
    mobile: ['', [Validators.required]],
    otpNumber: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get profileFormFval() {
    return this.profileForm.controls;
  }

  getOTP() {
    return true;
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
