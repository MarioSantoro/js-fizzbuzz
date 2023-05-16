const container = document.getElementById("container");
const containerTwo = document.getElementById("containerTwo");
const containerThree = document.getElementById("containerThree");
const containerFour = document.getElementById("containerFour");

container.classList.add("list-unstyled");
containerTwo.classList.add("list-unstyled" , "ms-5");
containerThree.classList.add("list-unstyled" , "ms-5");
containerFour.classList.add("list-unstyled" , "ms-5");

for(let i=1;i<=100;i++){
    let li = document.createElement("li");
    if(((i % 3)== 0) && ((i % 5)== 0)){
        console.log("FizzBuzz");
        li.classList.add("text-primary")
        li.append("FizzBuzz")
    }else if((i % 5)== 0){
        console.log("Buzz");
        li.classList.add("text-danger")
        li.append("Buzz")
    }else if((i % 3)== 0){
        console.log("Fizz");
        li.classList.add("text-success")
        li.append("Fizz")
    }else{
        console.log(i);
        li.classList.add("text-warning")
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



