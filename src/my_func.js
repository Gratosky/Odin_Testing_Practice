export function reverseString(str) {
  return str.split("").reverse().join("");
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Calculate class
export class Calculate {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
}

//CeaserCipher function
export function ceaserCipher(str, key) {
  let encrypted = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      char = String.fromCharCode(((code - 65 + key) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      char = String.fromCharCode(((code - 97 + key) % 26) + 97);
    }
    encrypted += char;
  }

  return encrypted;
}
