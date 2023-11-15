import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: DialogData,
  ) {}
}
