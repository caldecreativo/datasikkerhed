// array to hold the alphabet
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];

// crypt function
function ccCrypt(){
    let PlainText = document.getElementById("PlainText").value;             // gets the text from input
    let shift = 3;                                                          // shift variable with value 3 to shift the position in the alphabet
    let cipherText = "";                                                    // empty variable to hold the crypted text
    for (let i = 0; i < PlainText.length; i++) {
        let data = PlainText[i];                                            // data = the current index in the plainText
        let index = alphabet.indexOf(data);                                 // index = the current index in the alphabet
        if (index === -1 ) {                                                // if index is -1, then the current data is not in the alphabet (space, numbers ect)
            cipherText += data;                                             // adds to cipherText without cryptation
        } else {
            let newIndex = (index + shift) % alphabet.length;               // finds the new position with the shift of 3 -> a=d ... takes the rest against alphabet -> z=c
            cipherText += alphabet[newIndex];                               // adds the crypted letter
        }
    }
    document.getElementById("cipherText").innerHTML = cipherText;           // displays the crypted text
    
    
}

// decryption function
function deCrypt(){
    let cipherText = document.getElementById("cipherText").innerHTML;       // gets the text from input
    let shift = 3;                                                          // shift variable with value 3 to shift the position in the alphabet
    let PlainText = "";                                                     // empty variable to hold the decrypted text
    for (let i = 0; i < cipherText.length; i++) {                           
        let data = cipherText[i];                                           // data = the current index in the cipherText
        let index = alphabet.indexOf(data);                                 // index = the current index in the alphabet
        if (index === -1) {                                                 // if index is -1, then the current data is not in the alphabet (space, numbers ect)
            PlainText += data;                                              // adds to plainText without cryptation
        } else {                                                            
            let newIndex = (index - shift + alphabet.length) % alphabet.length;  // finds the new position with the shift of (-3) -> d=a ... takes the rest against alphabet -> c=z   
            PlainText += alphabet[newIndex];                                // adds the decrypted letter                          
        }
        
    }
    document.getElementById("plainText").innerHTML = PlainText;              // displays the decrypted text      
}





