import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Overview } from './pages/overview/overview';
import { Create } from './pages/create/create';
import { Road } from './pages/road/road';
import { TransmittalDocument } from './pages/transmittal-document/transmittal-document';
import { BankPayment } from './pages/bank-payment/bank-payment';
import { Imprest } from './pages/imprest/imprest';
import { Customer } from './pages/customer/customer';
import { Employee } from './pages/employee/employee';
import { ContractOverview } from './pages/contract-overview/contract-overview';
import { FormContractCustomer } from './reusables/form-contract-customer/form-contract-customer';
import { FormContractEmployee } from './reusables/form-contract-employee/form-contract-employee';
import { FormContractDriver } from './reusables/form-contract-driver/form-contract-driver';
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
        path: 'employee',
        component: Employee,
      },
      {
        path: 'driver',
        component: Driver,
      },
      {
        path: 'contract-overview',
        component: ContractOverview,
      },
      {
        path: 'contract-customer',
        component: FormContractCustomer,
      },
      {
        path: 'contract-employee',
        component: FormContractEmployee,
      },
      {
        path: 'contract-driver',
        component: FormContractDriver,
      },
    ],
  },
];
