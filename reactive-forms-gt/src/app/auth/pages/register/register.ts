import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationUtils } from '../../../utils/FormValidationUtil';

@Component({
  selector: 'app-register',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {

  validator = FormValidationUtils

  private formBuilder = inject(FormBuilder)

  private itemValidators = [
    Validators.required,
    Validators.minLength(3)
  ]

  form = this.formBuilder.group(
    {
      fullName: ['', [...this.itemValidators, Validators.pattern(this.validator.fullName)]],
      email: ['', [Validators.required, Validators.email]],
      username: [
        '',
        [...this.itemValidators,  Validators.pattern(this.validator.notOnlySpacesPattern)],
        [this.validator.validateUserAvailability]
      ],
      password: ['', this.itemValidators],
      passwordMirror: ['', this.itemValidators]
    },{
      validators: [FormValidationUtils.isField1EqualsToField2('password', 'passwordMirror', {
        passwordNotEqual: true
      })]
    }
  )

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.form.reset();
  }
}
