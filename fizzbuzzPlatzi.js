var fizz = "Fizz";
var buzz = "Buzz";

for(var i = 1; i <= 100; i++){

    if(divisible(i, 3)){
        document.write(fizz);
    }
    if(divisible(i, 5)){
        document.write(buzz);
    }else if(!divisible(i,3) && !divisible(i, 5)){
        document.write(i);
    }
    document.write("<br />");
}

function divisible(num, divisor){
    if(num % divisor == 0){
        return true;
    }else{
        return false;
    }
}