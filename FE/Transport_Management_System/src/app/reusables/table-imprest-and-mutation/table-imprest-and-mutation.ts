import { Component, signal } from '@angular/core';
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkBase,
  NgbNavLinkButton,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLinkButton, NgbNavLinkBase],
  selector: 'app-table-imprest-and-mutation',
  styleUrl: './table-imprest-and-mutation.css',
  templateUrl: './table-imprest-and-mutation.html',
})
export class TableImprestAndMutation {
  public active = signal(1);
}
