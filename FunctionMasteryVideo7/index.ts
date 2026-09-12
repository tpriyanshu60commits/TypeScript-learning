console.log("this is function mastery");
const greet = (name: String, id: number): string => {
  return `welcome ,${name} , your id is , ${id}`;
};
console.log(greet("priyanshu", 2));

export {};
const calculateAverage = (num: number[]): number => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  let average = sum / num.length;
  return average;
};
console.log(calculateAverage([2, 3, 4, 5, 6]));

const findMaxValue = (num: number[]): number => {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    if (max > num[i]) {
      max = num[i];
    }
  }
  return max;
};
console.log(findMaxValue([10, 25, 7, 40, 15]));

const num = [4,5,8,4,8,8,9];
const getnumber =(name?:string , id:number=1):String=>{
    return `welcome , your name is ${name}`
}
console.log(getnumber());

num.forEach((num:number)=>{
    console.log(num);
})
console.log("hllo")
