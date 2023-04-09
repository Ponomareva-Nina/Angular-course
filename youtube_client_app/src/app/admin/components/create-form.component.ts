import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlValidators } from '../url.validators';
import { DateValidators } from '../date.validators';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  public form!: FormGroup;

  public constructor(private router: Router) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl<string>('', Validators.maxLength(255)),
      img: new FormControl<string>('', [
        Validators.required,
        UrlValidators.isUrl,
      ]),
      link: new FormControl<string>('', [
        Validators.required,
        UrlValidators.isUrl,
      ]),
      date: new FormControl<string>('', [
        Validators.required,
        DateValidators.isValidDate,
      ]),
    });
  }

  public createCard(): void {
    this.form.reset();
  }

  public get titleInput(): FormControl<string> {
    return this.form.get('title') as FormControl;
  }

  public get descriptionInput(): FormControl<string> {
    return this.form.get('description') as FormControl;
  }

  public get imgInput(): FormControl<string> {
    return this.form.get('img') as FormControl;
  }

  public get linkInput(): FormControl<string> {
    return this.form.get('link') as FormControl;
  }

  public get dateInput(): FormControl<string> {
    return this.form.get('date') as FormControl;
  }
}
