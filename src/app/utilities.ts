export class Utilities {
  /**
   * A table of characters. The ID corresponds to the encoded integer value, while the
   * value is the character itself (in lowercase)
   */
  private charMap = [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "[",
    "\\",
    "]",
    "^",
    "_"
  ]

  /**
   * The inverse of the charmap. The key is the character, and value is the encoded integer
   */
  private reverseCharMap = {}

  constructor() {
    // Populate the reverseCharMap array based on charMap's values
    for (let i = 0; i < this.charMap.length; i++) {
      this.reverseCharMap[this.charMap[i]] = i
    }
  }

  /**
   * Return the list of strings provided, but cut down to the string of the lowest size
   * @param strings
   */
  getMinimumStrings(...strings: string[]) : string[] {
    // Make sure we don't edit the strings by reference
    strings = strings.slice()

    // First, get the minimum size
    let min = +Infinity
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length < min) {
        min = strings[i].length
      }
    }

    // Then, cut all the strings down to the minimum size
    for (let i = 0; i < strings.length; i++) {
      strings[i] = strings[i].substr(0, min)
    }

    return strings
  }

  /**
   * Encode a string in 6-bit ASCII
   * @param input The input string
   * @returns An array of 6-bit numbers
   */
  encode(input: string): any[] {
    input = input.toLowerCase() // Convert string to lowercase
    let array = [] // An empty array, to be populated with the encoded integers

    for (const c of input) {
      // For every character of the string...
      if (this.reverseCharMap[c] !== undefined) {
        // Only add recognised values
        array.push(this.reverseCharMap[c])
      } else {
        // Just push the character
        array.push(c)
      }
    }

    return array
  }

  /**
   * Decode a string from 6-bit ASCII
   * @param encoded  The input array
   * @returns The decoded string
   */
  decode(encoded: any[]): string {
    let decoded = "" // The string to be populated based on the array

    for (const n of encoded) {
      // For every element of the array...
      if (Number.isInteger(n)) {
        // This element refers to an encoded value
        if (this.charMap[n] !== undefined) {
          // Only add recognized values
          decoded += this.charMap[n] // Append the located character to the string
        }
      } else {
        // This value was passed raw
        decoded += n
      }
    }

    return decoded
  }

  /**
   * Performs a XOR operation between the numbers of each array
   */
  bitwiseXor(array1: any[], array2: any[]): number[] {
    const array = array1.slice() // Clone the array

    for (const i in array1) {
      // Check both values of the arrays refer to encoded 6-bit ASCII ones
      if (Number.isInteger(array1[i]) && Number.isInteger(array2[i])) {
        array[i] = array1[i] ^ array2[i] // Element-wise bitwise XOR
      } else { // The value was not encoded, it's a raw character
        // Just copy the raw value
        array[i] = array1[i]
      }
    }

    return array
  }
}
