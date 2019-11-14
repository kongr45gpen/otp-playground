import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  encodeForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.encodeForm = this.formBuilder.group({
      plaintext: [null, [Validators.required]],
      key: [null, [Validators.required]]
    })

    this.encodeForm.valueChanges.subscribe(function(val) {
      console.log(val)
    })
  }
    
}
