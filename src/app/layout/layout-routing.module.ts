import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HedderComponent } from './hedder/hedder.component';
import{HolderCardComponent} from './holder-card/holder-card.component';
import{  FootarComponent} from './footar/footar.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { MainSliderComponent } from './main-slider/main-slider.component';


import {LayoutModule} from './layout.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
