import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DashboardComponent } from './dashboard/dashboard';
import { Products } from './products/products';
import { About } from './about/about';
import { ContactComponent } from './contact/contact';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { OrderHistory } from './order-history/order-history';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: Products },
    { path: 'about', component: About },
     { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
          { path: 'orderhistory', component: OrderHistory },

];
