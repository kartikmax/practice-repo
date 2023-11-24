import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matStepperAnimations } from '@angular/material/stepper';

@Component({
  selector: 'app-help-parent',
  templateUrl: './help-parent.component.html',
  styleUrls: ['./help-parent.component.css'],
})
export class HelpParentComponent {
  constructor(private _formBuilder: FormBuilder) {}
  currentStep = 0;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  getStepperIndex() {
    console.log(this.currentStep);
  }

  onSelectionChange(event: any) {
    this.currentStep = event.selectedIndex;
  }
}
