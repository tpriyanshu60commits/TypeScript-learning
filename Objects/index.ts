console.log("this is typescript objects");

const person: {
  name: String;
  age: number;
} = {
  name: "Priyanshu",
  age: 845,
};
// console.log(person);

type Data = {
  name: String;
  age: number;
  sex: string;
  address: {
    city: string;
    state: string;
  };
};
const user: Data = {
  name: "priyanshu",
  age: 45,
  sex: "male",
  address: {
    city: "bhopal",
    state: "madhya Pradesh",
  },
};
console.log(user);


