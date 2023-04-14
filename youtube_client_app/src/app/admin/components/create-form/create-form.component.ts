import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCard } from 'src/app/redux/actions/admin.actions';
import { VideoItem } from 'src/app/shared/models/admin-video-item';
import { DateValidators } from '../../date.validators';
import { UrlValidators } from '../../url.validators';
import { AdminCardsSelector } from 'src/app/redux/selectors/admin.selectors';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  public form!: FormGroup;
  @Input() isOpen!: boolean;
  @Output() onClose: EventEmitter<void> = new EventEmitter();
  private currentId = 0;

  public constructor(private store: Store) {}

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

  public closePopup(): void {
    this.onClose.emit();
  }

  public createCard(): void {      
    const card: VideoItem = {
      id: this.currentId,
      title: this.form.get('title')?.value,
      description: this.form.get('description')?.value,
      imgLink: this.form.get('img')?.value,
      videoLink: this.form.get('link')?.value,
      publishedAt: this.form.get('date')?.value
    }
    this.store.dispatch(addCard({ item: card }));
    this.currentId = this.currentId + 1;
    this.form.reset();
    this.onClose.emit();
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
