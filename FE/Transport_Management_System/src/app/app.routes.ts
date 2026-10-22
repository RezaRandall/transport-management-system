import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Booking } from './pages/booking/booking';
import { Overview } from './pages/overview/overview';
import { Create } from './pages/create/create';
import { Road } from './pages/road/road';
import { TransmittalDocument } from './pages/transmittal-document/transmittal-document';
import { BankPayment } from './pages/bank-payment/bank-payment';
import { Imprest } from './pages/imprest/imprest';
import { Customer } from './pages/customer/customer';
import { Clerk } from './pages/clerk/clerk';
import { Driver } from './pages/driver/driver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  /*Default routes*/
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'admin',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'overview',
        component: Overview,
      },
      {
        path: 'create',
        component: Create,
      },
      {
        path: 'road',
        component: Road,
      },
      {
        path: 'transmittial-document',
        component: TransmittalDocument,
      },
      {
        path: 'imprest',
        component: Imprest,
      },
      {
        path: 'bank-payment',
        component: BankPayment,
      },
      {
        path: 'customer',
        component: Customer,
      },
      {
        path: 'clerk',
        component: Clerk,
      },
      {
        path: 'driver',
        component: Driver,
      },
    ],
  },
];
