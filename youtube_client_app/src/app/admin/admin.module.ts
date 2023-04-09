import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './pages/admin-page.component';
import { AdminRoutingModule } from './admin.routing-module';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [AdminPageComponent],
})
export class AdminModule {}
