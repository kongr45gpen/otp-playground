import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputGroupComponent, NzInputModule, NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [WelcomeRoutingModule, NzFormModule, NzInputModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
