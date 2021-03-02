import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from "./component/register/register.component";
import { LoaderComponent } from "./loader/loader.component";
import { PlansComponent } from './plans/plans.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaybillComponent } from './paybill/paybill.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { NewprepaidComponent } from './newprepaid/newprepaid.component';
import { NewpostpaidComponent } from './newpostpaid/newpostpaid.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent , pathMatch: 'full' },
 { path: 'register', component: RegisterComponent , pathMatch: 'full' },
 { path: 'home', component:LoaderComponent , pathMatch:'full' },
 {path:'prepaid/plans',component:PlansComponent },
  {path:'prepaid/recharge', component:RechargeComponent},
  {path:'postpaid/postpaidplans',component: PostpaidplansComponent },
  {path:'postpaid/paybill', component: PaybillComponent},
  {path:'newconnection/newprepaid', component: NewprepaidComponent},
  {path: 'newconnection/newpostpaid', component: NewpostpaidComponent},
  { path:'support', component:SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
