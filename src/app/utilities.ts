export class Utilities {
    /**
     * A table of characters. The ID corresponds to the encoded integer value, while the
     * value is the character itself (in lowercase)
     */
    private charMap = [
        " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?",
        "@", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "[", "\\", "]", "^", "_",
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
    
    encode(string: string) : number[] {
        string = string.toLowerCase() // Convert string to lowercase 
        let array = [] // An empty array, to be populated with the encoded integers

        for (const c of string) { // For every character of the string...
            if (this.reverseCharMap[c] !== undefined) { // Only add recognised values
                array.push(this.reverseCharMap[c])
            }
        }

        return array
    }

    decode(encoded: number[]) : string {
        let string = "" // The string to be populated based on the array

        for (const n of encoded) { // For every element of the array...
            if (this.charMap[n] !== undefined) { // Only add recognized values
                string += this.charMap[n] // Append the located character to the string
            }
        }

        return string
    }

    bitwiseXor(array1: number[], array2: number[]) : number[] {
        let array = array1.slice() // Clone the array

        for (const i in array1) {
            array[i] = ( array1[i] ) ^ ( array2[i] ) // Element-wise bitwise XOR
        }

        return array
    }
}
