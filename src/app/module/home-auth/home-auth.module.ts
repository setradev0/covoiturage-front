import { BoitDialogComponent } from './../../auth-component/boit-dialog/boit-dialog.component';
import { DiscutionIntantaneComponent } from './../../auth-component/home-auth/discution-intantane/discution-intantane.component';
import { NewComponent } from './../../auth-component/home-auth/new/new.component';
import { HomeAuthComponent } from './../../auth-component/home-auth/home-auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAuthRoutingModule } from './home-auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeAuthComponent,
    NewComponent,
    DiscutionIntantaneComponent,
    BoitDialogComponent
  ],
  imports: [
    CommonModule,
    HomeAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeAuthComponent,
    NewComponent,
    DiscutionIntantaneComponent,
    BoitDialogComponent
  ]
})
export class HomeAuthModule { }
