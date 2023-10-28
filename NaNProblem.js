//Example 1
//if you compare both with two NaN data type, so get a result is flase.
let result = NaN;
if(result === result){
    console.log(true);
}else{
    console.log(false);
}

//Example 2

let array = [NaN]
let arrayResult = array.includes(NaN);
console.log(arrayResult);/// The result is always return true;//but why, cause of,  the code follwing is the ssamevaluezero algorithm. 

//Example 3
//Objects.is() algorithom
let arry = NaN;
let ObjectsIs = Object.is(arry, NaN);
console.log(ObjectsIs)

//Example 4
//samevaluezero algorithm
let algorithm = (a, b)=>{
    if(a === b || (Number.isNaN(a) && (Number.isNaN(b)))){
        return true;
    }else{
        return false;
    }
}

console.log(algorithm(-0, +0));

//data type check
let num1 = -0;
let num2 = +0;
if(num1 === num2){
    console.log(true);
}else{
    console.log(false);
}

