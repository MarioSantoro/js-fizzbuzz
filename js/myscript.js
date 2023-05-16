const container = document.getElementById("container");
const containerTwo = document.getElementById("containerTwo");
const containerThree = document.getElementById("containerThree");
const containerFour = document.getElementById("containerFour");

for(let i=1;i<=100;i++){
    let li = document.createElement("li");
    if(((i % 3)== 0) && ((i % 5)== 0)){
        console.log("FizzBuzz");
        li.append("FizzBuzz")
    }else if((i % 5)== 0){
        console.log("Buzz");
        li.append("Buzz")
    }else if((i % 3)== 0){
        console.log("Fizz");
        li.append("Fizz")
    }else{
        console.log(i);
        li.append(i)
    }
    if(i<= 25){
        container.appendChild(li);
    }else if(i<= 50){
        containerTwo.appendChild(li);
    }else if(i<= 75){
        containerThree.appendChild(li);
    }else{
        containerFour.appendChild(li);
    }
}



