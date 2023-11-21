import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BookinfoComponent } from '../bookinfo/bookinfo.component';
import { ReserveinfoComponent } from '../reserveinfo/reserveinfo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,BookinfoComponent,
              ReserveinfoComponent
            ]
})
export class HomePageModule {}
