import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationUtils } from '../../../utils/FormValidationUtil';

@Component({
  selector: 'app-switches',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Switches {

  public validator = FormValidationUtils

  private formBuilder = inject(FormBuilder)

  form: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    wantNotifications: [false, Validators.required],
    wantTerms: [false, Validators.requiredTrue]
  })

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    this.form.reset();
  }
}
