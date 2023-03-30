import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing-module';
import AuthFormComponent from './components/auth-form.component';
import { AuthPageComponent } from './pages/auth-page.component';

@NgModule({
  declarations: [AuthFormComponent, AuthPageComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [AuthPageComponent],
})
export class AuthModule {}
