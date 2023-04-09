import { FormControl } from '@angular/forms';
import { Nullable } from '../shared/models/types';

export class DateValidators {
  public static isValidDate(
    control: FormControl<string>
  ): Nullable<{ [key: string]: boolean }> {
    const today = new Date();
    const date = new Date(control.value.toString());
    if (today.getTime() - date.getTime() < 0) {
      return { isValidDate: true };
    }
    return null;
  }
}
