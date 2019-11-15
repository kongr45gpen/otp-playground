import { NgModule } from '@angular/core';

import { RepeatedRoutingModule } from './repeated-routing.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputGroupComponent, NzInputModule, NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepeatedComponent } from './repeated.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RepeatedRoutingModule, NzFormModule, NzInputModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule, CommonModule],
  declarations: [RepeatedComponent],
  exports: [RepeatedComponent]
})
export class RepeatedModule { }
