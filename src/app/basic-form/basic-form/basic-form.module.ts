import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasicFormRoutingModule} from './basic-form-routing.module';
import {BasicFormComponent} from './basic-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BasicFormService} from "./basic-form.service";
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    BasicFormRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [BasicFormService]
})
export class BasicFormModule {
}
