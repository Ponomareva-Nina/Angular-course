import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import AuthComponent from './components/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule],
  providers: [],
  exports: [AuthComponent],
})
export default class AuthModule {}
