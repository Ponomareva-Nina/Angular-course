import { FormControl } from '@angular/forms';
import { Nullable } from '../shared/models/types';

export class UrlValidators {
  public static isUrl(
    control: FormControl<string>
  ): Nullable<{ [key: string]: boolean }> {
    const url =
      // eslint-disable-next-line no-useless-escape
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if (control.value && !control.value.match(url)) {
      return { isUrl: true };
    }
    return null;
  }
}
