import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-create',
  styleUrl: './create.css',
  templateUrl: './create.html',
  encapsulation: ViewEncapsulation.None,
})
export class Create {
  private readonly modalService = inject(NgbModal);

  openXl(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'xl' });
  }
}
