import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { SideComponent } from './side/side.component';
import { CubeControlsComponent } from './cube-controls/cube-controls.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerConfig } from './hammer-config';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { CellService } from './models/cell.service';
import { SlickModule } from 'ngx-slick';
import { CarouselComponent } from './description/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    SideComponent,
    CubeControlsComponent,
    FooterComponent,
    DescriptionComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlickModule.forRoot()
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }, CellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
