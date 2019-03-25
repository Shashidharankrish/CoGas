import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AssignShiftComponent } from './assign-shift/assign-shift.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 { path:"",component:AdminComponent},
 { path:"login",component:LoginComponent},
 { path:"assignShift",component:AssignShiftComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
