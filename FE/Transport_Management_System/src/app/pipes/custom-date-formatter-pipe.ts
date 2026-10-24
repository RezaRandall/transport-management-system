import { Pipe, PipeTransform } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'customDateFormatter',
  standalone: true,
})
export class CustomDateFormatterPipe implements PipeTransform {
  // Method pembantu untuk mengubah objek NgbDate menjadi DD/MM/YYYY
  private formatSingleDate(date: NgbDateStruct | null): string {
    if (!date) return '';
    const day = date.day < 10 ? `0${date.day}` : date.day;
    const month = date.month < 10 ? `0${date.month}` : date.month;
    return `${day}/${month}/${date.year}`;
  }

  transform(fromDate: NgbDateStruct | null, toDate: NgbDateStruct | null): string {
    if (!fromDate) return '';

    const fromStr = this.formatSingleDate(fromDate);
    const toStr = this.formatSingleDate(toDate);

    // Jika toDate sudah dipilih, gabungkan dengan " - "
    if (toStr) {
      return `${fromStr} - ${toStr}`;
    }

    return fromStr;
  }
}
