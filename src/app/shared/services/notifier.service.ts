import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class Notifier {
  private readonly defaultConfig: Partial<MatSnackBarConfig> = {
    duration: 2000,
    verticalPosition: 'top',
    horizontalPosition: 'center',
  };

  constructor(public snackBar: MatSnackBar) {}

  showSuccess(
    message: string,
    newConfig: Partial<MatSnackBarConfig> = {},
  ): void {
    const config = {
      ...this.defaultConfig,
      newConfig,
    };

    this.snackBar.open(message, '', {
      ...config,
      panelClass: ['snack-bar--success'],
    });
  }

  showError(
    message: string,
    newConfig: Partial<MatSnackBarConfig> = {},
  ): void {
    const config = {
      ...this.defaultConfig,
      newConfig,
    };

    this.snackBar.open(message, '', {
      ...config,
      panelClass: ['snack-bar--error'],
    });
  }
}
