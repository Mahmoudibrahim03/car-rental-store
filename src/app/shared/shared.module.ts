import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterModule} from "@angular/router";
import { SideFiltersComponent } from './component/side-filters/side-filters.component';
import {CollapseModule} from "ngx-bootstrap/collapse";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {FormsModule} from "@angular/forms";
import { SeeMorePipe } from './pipes/see-more.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SideFiltersComponent,
    SeeMorePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule,
    NgxSliderModule,
    FormsModule
  ],
    exports: [
        NavbarComponent,
        FooterComponent,
        SideFiltersComponent
    ]
})
export class SharedModule { }
