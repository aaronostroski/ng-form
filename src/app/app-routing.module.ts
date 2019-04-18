// Angular import
import { Routes } from '@angular/router';

//Component import
import { UserComponent } from './user/user.component';
import { TruckComponent } from './truck/truck.component';

export const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'truck', component: TruckComponent}
];