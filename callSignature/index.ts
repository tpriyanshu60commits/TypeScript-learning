console.log("this is a call signature");

type Data1 = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string;
};
const userData: Data1 = {
  name: "priyanshu",
  age: 54,
  greet: (country): string => {
    return `hello my country is ${country}`;
  },
};
console.log(userData.greet("europe"))
