const container = document.getElementById("container");
let p = document.createElement("p");

for(let i=1;i<=100;i++){
    if(((i % 3)== 0) && ((i % 5)== 0)){
        console.log("FizzBuzz");
        p.append("FizzBuzz")
    }else if((i % 5)== 0){
        console.log("Buzz");
        p.append("Buzz")
    }else if((i % 3)== 0){
        console.log("Fizz");
        p.append("Fizz")
    }else{
        console.log(i);
        p.append(i)
    }
}

container.appendChild(p)

