import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocialsComponent } from './components/socials-panel/socials.component';

@NgModule({
  declarations: [SocialsComponent],
  imports: [CommonModule, FormsModule],
  exports: [SocialsComponent, CommonModule, FormsModule],
})
export class SharedModule {}
