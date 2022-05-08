import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { InfoPageComponent } from './views/info-page/info-page.component';
import { InfoPoolsComponent } from './views/info-page/sub-pages/info-pools/info-pools.component';
import { InfoTokenDetailsComponent } from './views/info-page/sub-pages/info-token-details/info-token-details.component';
import { InfoTokensComponent } from './views/info-page/sub-pages/info-tokens/info-tokens.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: 'info/pools', component: InfoPoolsComponent },
  { path: 'info/tokens', component: InfoTokensComponent },
  { path: 'info/token/:id', component: InfoTokenDetailsComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
