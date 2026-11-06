import { Component, signal } from '@angular/core';
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkBase,
  NgbNavLinkButton,
} from '@ng-bootstrap/ng-bootstrap';
import { FormPettyCash } from '../../reusables/form-petty-cash/form-petty-cash';
import { FormImprestAndMutation } from '../../reusables/form-imprest-and-mutation/form-imprest-and-mutation';
import { TableImprestPettyCash } from '../../reusables/table-imprest-petty-cash/table-imprest-petty-cash';
import { TableImprestAndMutation } from '../../reusables/table-imprest-and-mutation/table-imprest-and-mutation';

@Component({
  imports: [
    FormImprestAndMutation,
    NgbNavContent,
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLinkButton,
    NgbNavLinkBase,
    FormPettyCash,
    TableImprestPettyCash,
    TableImprestAndMutation,
  ],
  selector: 'app-imprest',
  styleUrl: './imprest.css',
  templateUrl: './imprest.html',
})
export class Imprest {
  public active = signal(1);
}
