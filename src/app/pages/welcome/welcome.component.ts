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

  repeatString: boolean = false // Whether we are repeating the key
  break: boolean = false // Whether we are breaking the encryption

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.encodeForm = this.formBuilder.group({
      plaintext: [null, [Validators.required]],
      key: [null, [Validators.required]],
      break: [null, null]
    })

    this.encodeForm.valueChanges.subscribe(function(val) {
      this.break = val.break // Copy the value so that it can be used by others

      const utilities = new Utilities()

      if (val.plaintext && val.key) {
        let strings;
        if (this.repeatString && this.break) {
            strings = [
              val.plaintext,
              val.key
            ]
          } else if (this.repeatString) {
            const repeatedKey = val.key.repeat(Math.ceil(val.plaintext.length / val.key.length))
            strings = utilities.getMinimumStrings(val.plaintext, repeatedKey)
          }
        else {
          strings = utilities.getMinimumStrings(val.plaintext, val.key)
        }

        // Encode the text in 5-bit ASCII
        let plainText = utilities.encode(strings[0])
        let key = utilities.encode(strings[1])

        if (this.break) {
          const tempStrings = utilities.getMinimumStrings(val.plaintext, val.key)
          key = utilities.bitwiseXor(utilities.encode(tempStrings[0]), utilities.encode(tempStrings[1]))
          const singleKey = key
          for (;key.length < plainText.length;) {
            // Append the key to the key as much as needed
            key = key.concat(singleKey)
          }
          console.log("The key is: " + utilities.decode(key))
        }

        // Perform the encryption
        let cipherText = utilities.bitwiseXor(plainText, key)

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
