import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormValidationUtils } from '../../../utils/FormValidationUtil';

@Component({
  selector: 'app-basic',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Basic {

  /*myForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0)
  })*/

  public validator = FormValidationUtils;

  private formBuilder = inject(FormBuilder)

  myForm: FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(5)]],
      inStorage: [0, [Validators.required, Validators.min(0)]]
    }
  )

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset({
      price: 0,
      mane: '',
      inStorage: 0
    });
  }


}
