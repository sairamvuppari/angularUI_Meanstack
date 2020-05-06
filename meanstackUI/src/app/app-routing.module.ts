import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { ManagementComponent } from './dashboard/management/management.component';
import { SyncComponent } from './dashboard/sync/sync.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'management',
      component: ManagementComponent
    },
    {
      path: 'sync',
      component: SyncComponent
    }]
},
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
