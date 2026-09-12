"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let longtext = "hello this is a long text";
let shortText = longtext.substring(0, 10);
console.log(shortText);
let str1 = "this is str1 sentence";
let str2 = "this is str2 sentence";
let result = str1 === str2;
console.log(result);
let product = "Phone";
let price = 500;
let message = `The product ${product} is priced at ${price} dollars.`;
console.log(message);
function isEven(a) {
    if (a % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(4));
function isDivisibleby4or8(a) {
    if (a % 4 === 0 && a % 8 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDivisibleby4or8(4));
//# sourceMappingURL=index.js.map