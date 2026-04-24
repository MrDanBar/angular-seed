import { FormArray, FormControl, FormGroup } from '@angular/forms';
export class FormValidationUtils {

  static isValidField(form: FormGroup, fieldName: string): boolean {
    const field = form.controls[fieldName];

    return !(field.errors && field.touched)
  }

  static isValidFieldInArray(form: FormGroup, arrayName: string, index: number): boolean {
    const array = form.controls[arrayName] as FormArray;
    const field = array.at(index);

    return !(field.errors && field.touched)
  }

  static getErrorMessage(form: FormGroup, fieldName: string): string {
    const field = form.controls[fieldName] as FormControl;

    return this.getErrorMessageOf(field)
  }

  static getErrorMessageInArray(form: FormGroup, arrayName: string, index: number): string {
    const array = form.controls[arrayName] as FormArray;
    const formControl = array.at(index) as FormControl;

    return this.getErrorMessageOf(formControl)
  }

  private static getErrorMessageOf(formControl: FormControl): string {
    let errorMessage = '';

    Object.keys(formControl.errors!).forEach(element => {
      switch (element) {
        case 'required':
          errorMessage = 'Field is required'
          break
        case 'min':
          errorMessage = `Min value is ${formControl.errors!['min'].min}`
          break
        case 'minlength':
          errorMessage = `Min length is ${formControl.errors!['minlength'].requiredLength}`
          break
      }
    });

    return errorMessage;
  }
}
