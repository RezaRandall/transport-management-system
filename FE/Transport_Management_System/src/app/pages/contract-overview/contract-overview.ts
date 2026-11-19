import { Component, signal } from '@angular/core';
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkBase,
  NgbNavLinkButton,
} from '@ng-bootstrap/ng-bootstrap';
import { FormContractCustomer } from '../../reusables/form-contract-customer/form-contract-customer';
import { FormContractEmployee } from '../../reusables/form-contract-employee/form-contract-employee';
import { FormContractDriver } from '../../reusables/form-contract-driver/form-contract-driver';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [
    NgbNavContent,
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLinkButton,
    NgbNavLinkBase,
    FormContractCustomer,
    FormContractEmployee,
    FormContractDriver,
    RouterLink,
    RouterOutlet,
  ],
  selector: 'app-contract-overview',
  styleUrl: './contract-overview.css',
  templateUrl: './contract-overview.html',
})
export class ContractOverview {
  public active = signal(1);
}
