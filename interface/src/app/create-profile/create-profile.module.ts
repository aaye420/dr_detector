import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProfilePageRoutingModule } from './create-profile-routing.module';

import { CreateProfilePage } from './create-profile.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProfilePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [CreateProfilePage]
})
export class CreateProfilePageModule {}
