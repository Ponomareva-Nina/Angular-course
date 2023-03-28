import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import AuthFormComponent from './components/auth-form.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth.routing-module';

@NgModule({
  declarations: [AuthFormComponent, AuthPageComponent],
  imports: [CommonModule, AuthRoutingModule],
  exports: [AuthPageComponent],
})
export class AuthModule {}
