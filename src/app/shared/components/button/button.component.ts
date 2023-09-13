import { ANIMATION_MODULE_TYPE, Component, ElementRef, Inject, Input, NgZone, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  inputs: ['disabled', 'color', 'disableRipple'],
})
export class ButtonComponent extends MatButton {
  @Input() loading: boolean = false;
  @Input() type: 'submit' | 'button' = 'button';

  constructor(
    elementRef: ElementRef,
    platform: Platform,
    ngZone: NgZone,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string,
  ) {
    super(elementRef, platform, ngZone, animationMode);
  }
}
