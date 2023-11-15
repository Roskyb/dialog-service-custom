import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DialogService} from "./dialog.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialog-service';
  dialogService = inject(DialogService)


  openDialog() {
    const dialogRef = this.dialogService.openConfirmDialog({
      data: {animal: 'perro', name: 'dogo'}
    });

    dialogRef.closed.subscribe((data) => {
      console.log(data)
    })

  }
}
