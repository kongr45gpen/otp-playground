import { Component, OnInit } from '@angular/core';
import { Utilities } from 'src/app/utilities';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-repeated',
  templateUrl: '../welcome/welcome.component.html',
  styleUrls: ['../welcome/welcome.component.scss']
})
export class RepeatedComponent extends WelcomeComponent implements OnInit {
  /**
   *
   */
  constructor(formBuilder: FormBuilder) {
    super(formBuilder)

    this.repeatString = true
  }
}
