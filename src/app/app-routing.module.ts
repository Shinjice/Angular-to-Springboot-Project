import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AanmakenComponent } from './medewerkeraanmaken/medewerkeraanmaken.component';
import { VerwijderComponent } from './verwijdermedewerker/verwijdermedewerker.component';

const routes: Routes = [
  {path:"",redirectTo:"aanmaken",pathMatch:"full"},
   {path:"aanmaken",component:AanmakenComponent},
   {path:"verwijder",component:VerwijderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
