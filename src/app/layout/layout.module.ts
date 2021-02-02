import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedderComponent } from './hedder/hedder.component';
import { LayoutRoutingModule} from './layout-routing.module'
import { from } from 'rxjs';
import { HolderCardComponent } from './holder-card/holder-card.component';
import { FootarComponent } from './footar/footar.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { MainSliderComponent } from './main-slider/main-slider.component';

@NgModule({
  declarations: [HedderComponent, HolderCardComponent, FootarComponent, DisplayCardComponent, ShopingCardComponent, MainSliderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule

  ],
  exports: [
    HedderComponent,
    DisplayCardComponent,
    ShopingCardComponent,
    HolderCardComponent,
    MainSliderComponent,
  
    FootarComponent
  ],
  providers: [],
  bootstrap: [HedderComponent,
    DisplayCardComponent,
    HolderCardComponent,
    ShopingCardComponent,
    FootarComponent,
    MainSliderComponent
   ]
})
export class LayoutModule { }
