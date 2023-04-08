import { FormControl } from '@angular/forms';
import { Nullable } from '../shared/models/types';

export class AuthValidators {
  public static strongPassword(
    control: FormControl<string>
  ): Nullable<{ [key: string]: string[] }> {
    const errors = [];

    if (control.value.length < 8) {
      errors.push('contain at least 8 characters');
    }

    if (!/[0-9]+/.test(control.value)) {
      errors.push('a mixture of letters and numbers');
    }

    if (!/[A-Z]+/.test(control.value) || !/[a-z]+/.test(control.value)) {
      errors.push('a mixture of both uppercase and lowercase letters');
    }

    if (!/[!@#?#$&_%]+/.test(control.value)) {
      errors.push('inclusion of at least one special character, e.g., ! @ # ?');
    }

    if (errors.length) {
      return {
        strongPassword: errors,
      };
    }
    return null;
  }
}
