import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export class FormValidationUtils {

  static fullName = '^[a-zA-Zñ]+( [a-zA-Zñ]+)+$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

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

  static getErrorMessageOf(formControl: FormControl): string {
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
        case 'usernameTaken':
          errorMessage = 'User not available'
          break
      }
    });

    return errorMessage;
  }

  static isField1EqualsToField2(field1: string, field2: string, reason: object) {
    return (formGroup: AbstractControl) => {
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      return field1Value === field2Value ? null : { ...reason }
    }
  }


  static async validateUserAvailability(control: AbstractControl): Promise<ValidationErrors | null> {
      console.info('server validation')

      await sleep(2500);

      const inputValue = control.value;

      if (inputValue.includes("danbar")) {
        return {
          usernameTaken: true
        }
      }

      return null;
  }
}
