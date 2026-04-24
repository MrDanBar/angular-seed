import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationUtils } from '../../../utils/FormValidationUtil';

@Component({
  selector: 'app-dynamic',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dynamic {

  public validator = FormValidationUtils;

  private formBuilder = inject(FormBuilder)

  private itemValidators = [
    Validators.required,
    Validators.minLength(3)
  ]

  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    favoriteGames: this.formBuilder.array(
      [
        ['Mario Sunshine', this.itemValidators],
        ['Zelda', this.itemValidators]
      ]
      , Validators.minLength(3))
  })
}
