import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerComponentComponent } from './scanner-component/scanner-component.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  declarations: [
    ScannerComponentComponent
  ],
  imports: [
    CommonModule,
    ZXingScannerModule,
    DialogModule,
    ButtonModule,
    ProgressSpinnerModule
  ],
  exports:[ScannerComponentComponent]
})
export class ScannerModule { }
