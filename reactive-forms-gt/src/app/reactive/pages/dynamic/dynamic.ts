import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  newFavoriteGame = new FormControl('', this.itemValidators);

  getFavoriteGames() {
    return this.form.controls['favoriteGames'] as FormArray
  }

  addFavoriteToList() {
    if (this.newFavoriteGame.invalid) {
      return
    }

    this.getFavoriteGames().push(this.formBuilder.control(this.newFavoriteGame.value, this.itemValidators))

    this.newFavoriteGame.reset()
  }

  deleteFavoriteGame(index: number) {
    this.getFavoriteGames().removeAt(index)
  }

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.form.reset()

    while (this.getFavoriteGames().controls.length > 0) {
      this.deleteFavoriteGame(0)
    }

    this.newFavoriteGame.reset();
  }
}
