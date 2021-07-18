import { RouterModule, Routes } from '@angular/router';

import { ContattiComponent } from './features/contatti/contatti.component';
import { DestinationsComponent } from './features/destinations/destinations.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { TransfertsComponent } from './features/transferts/transferts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contacts', component: ContattiComponent},
  { path: 'destinations', component: DestinationsComponent},
  { path: 'transferts', component: TransfertsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
