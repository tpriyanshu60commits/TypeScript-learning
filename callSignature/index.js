"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("this is a call signature");
const userData = {
    name: "priyanshu",
    age: 54,
    greet: (country) => {
        return `hello my country is ${country}`;
    },
};
console.log(userData.greet("europe"));
//# sourceMappingURL=index.js.map