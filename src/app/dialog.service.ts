import {inject, Injectable, TemplateRef} from '@angular/core';
import {Dialog, DialogConfig, DialogRef} from "@angular/cdk/dialog";
import {ConfirmDialogComponent, DialogData} from "./confirm-dialog/confirm-dialog.component";
import {BasePortalOutlet, ComponentType} from "@angular/cdk/portal";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialog = inject(Dialog);



  openConfirmDialog(config:  DialogConfig<DialogData, DialogRef<string, ConfirmDialogComponent>>): DialogRef<string, ConfirmDialogComponent> {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      ...config,
    });

    return dialogRef;
  }

  // open<T, D = any, R = any>(
  //   componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
  //   config?: DialogConfig<D, R, C>,
  // ) {
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent, config)
  //   return dialogRef;
  // }
}
