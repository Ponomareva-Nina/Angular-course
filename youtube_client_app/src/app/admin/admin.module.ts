import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './pages/admin-page.component';
import { AdminRoutingModule } from './admin.routing-module';
import { CreateFormComponent } from './components/create-form.component';

@NgModule({
  declarations: [AdminPageComponent, CreateFormComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [AdminPageComponent],
})
export class AdminModule {}
