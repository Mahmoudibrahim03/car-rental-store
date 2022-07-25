import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsComponent} from './results/results.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FeaturesRoutingModule} from "./features-routing.module";
import {ReportsComponent} from './reports/reports.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AlertsConsoleComponent} from './alerts-console/alerts-console.component';
import {ProfilesComponent} from './profiles/profiles.component';
import {SettingsComponent} from './settings/settings.component';
import {SharedModule} from "../shared/shared.module";
import {NgxBootstrapIconsModule} from "ngx-bootstrap-icons";
import {FormsModule} from "@angular/forms";
import {AddCarComponent} from './modals/add-car/add-car.component';
import {ModalModule} from "ngx-bootstrap/modal";


@NgModule({
  declarations: [
    ResultsComponent,
    NotFoundComponent,
    ReportsComponent,
    DashboardComponent,
    AlertsConsoleComponent,
    ProfilesComponent,
    SettingsComponent,
    AddCarComponent,
  ],

  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    NgxBootstrapIconsModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class FeaturesModule {
}
