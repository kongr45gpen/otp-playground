import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utilities } from 'src/app/utilities';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  encodeForm: FormGroup
  cipherText: String

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.encodeForm = this.formBuilder.group({
      plaintext: [null, [Validators.required]],
      key: [null, [Validators.required]]
    })

    this.encodeForm.valueChanges.subscribe(function(val) {
      const utilities = new Utilities()

      

      if (val.plaintext && val.key && val.plaintext.length == val.key.length) {
        const plainText = utilities.encode(val.plaintext)
        const key = utilities.encode(val.key)

        const cipherText = utilities.bitwiseXor(plainText, key)
        this.cipherText = utilities.decode(cipherText)
      }
    }.bind(this))
  }
    
}
