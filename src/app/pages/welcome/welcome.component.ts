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

      if (val.plaintext && val.key) {
        const strings = utilities.getMinimumStrings(val.plaintext, val.key)

        // Encode the text in 5-bit ASCII
        const plainText = utilities.encode(strings[0])
        const key = utilities.encode(strings[1])

        // Perform the encryption
        const cipherText = utilities.bitwiseXor(plainText, key)

        // Decode the encrypted result
        this.cipherText = utilities.decode(cipherText)
      }
    }.bind(this))
  }

  generateKey() : void {
    const utilities = new Utilities()

    // Create a random array with 6-bit ASCII values
    const input = Array.from({length: 96}, () => Math.floor(Math.random() * 64));

    // Decode the array and show it on the textbox
    this.encodeForm.get('key').setValue(utilities.decode(input))
  }

}
