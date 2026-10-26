import { Component, signal } from '@angular/core';
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavOutlet,
} from '@ng-bootstrap/ng-bootstrap';
import { FormTransmittialDocument } from '../../reusables/form-transmittial-document/form-transmittial-document';
import { ButtonPrint } from '../../reusables/button-print/button-print';

@Component({
  imports: [
    FormTransmittialDocument,
    NgbNavContent,
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLinkButton,
    NgbNavLinkBase,
    NgbNavOutlet,
    ButtonPrint,
  ],
  selector: 'app-transmittal-document',
  styleUrl: './transmittal-document.css',
  templateUrl: './transmittal-document.html',
})
export class TransmittalDocument {
  public active = signal(1);
}
