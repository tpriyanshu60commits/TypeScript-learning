const userinput = (value: string | number): string | number => {
  if (typeof value === "number") {
    return value * 2;
  }
  return value.toUpperCase();
};
console.log(userinput(2));

const valueFormat = (value: number | boolean | string) => {
  if (typeof value === "number") {
    return `$ ${value /100}`;
  }
  if (typeof value === "boolean") {
    return value;
  }
  return value.toUpperCase();
};

console.log(valueFormat(500));
console.log(valueFormat(false));
console.log("hello");
