let longtext = "hello this is a long text";
let shortText = longtext.substring(0,10);
console.log(shortText);

let str1:string = "this is str1 sentence";
let str2:string = "this is str2 sentence";

let result:boolean = str1===str2;
console.log(result);

let product: string = "Phone";
let price: number = 500;
let message: string = `The product ${product} is priced at ${price} dollars.`;
console.log(message);

function isEven(a:number):boolean{
    if(a%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(4));

function isDivisibleby4or8(a:number):boolean{
    if(a%4===0&&a%8===0){
        return true;
    }else{
        return false;
    }
}

console.log(isDivisibleby4or8(4));


export {};


