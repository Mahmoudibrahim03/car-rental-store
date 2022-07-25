import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {ResultsComponent} from "./results/results.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AlertsConsoleComponent} from "./alerts-console/alerts-console.component";
import {ProfilesComponent} from "./profiles/profiles.component";
import {SettingsComponent} from "./settings/settings.component";
import {RoutesEnums} from "../core/enums/routes.enums";

const routes: Routes = [{
  path: '',
  redirectTo: RoutesEnums.PLAN_TRIP,
  pathMatch: 'full'
}, {
  path: RoutesEnums.PLAN_TRIP,
  component: ResultsComponent
}, {
  path: RoutesEnums.DASHBOARD,
  component: DashboardComponent
}, {
  path: RoutesEnums.RESULTS,
  component: ResultsComponent
}, {
  path: RoutesEnums.ALERTS_CONSOLE,
  component: AlertsConsoleComponent
}, {
  path: RoutesEnums.PROFILES,
  component: ProfilesComponent
}, {
  path: RoutesEnums.SETTINGS,
  component: SettingsComponent
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class FeaturesRoutingModule {
}

