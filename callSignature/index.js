"use strict";
console.log("this is a call signature");
const user1 = {
    name: "priyanshu",
    age: 54,
    greet: (country) => {
        return `hello my country is ${country}`;
    },
};
console.log(user1.greet("europe"));
