import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocialsComponent } from './components/socials-panel/socials.component';
import { SocialsCountPipe } from './components/socials-panel/pipes/socials-count.pipe';

@NgModule({
  declarations: [SocialsComponent, SocialsCountPipe],
  imports: [CommonModule, FormsModule],
  exports: [SocialsComponent, CommonModule, FormsModule],
})
export class SharedModule {}
