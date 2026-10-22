import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbCalendar,
  NgbDate,
  NgbDatepicker,
  NgbInputDatepicker,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-overview',
  styleUrl: './overview.css',
  templateUrl: './overview.html',
})
export class Overview {
  /*overveiwForm!: FormGroup;*/
}
