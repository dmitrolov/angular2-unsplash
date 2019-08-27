import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsplashService } from './unsplash.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UnsplashService
  ]
})
export class CoreModule { }
