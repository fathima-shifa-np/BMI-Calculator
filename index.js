let height = document.getElementById("height")
let weight = document.getElementById("weight")
let  button = document.getElementById("calculate")
let bmiresult = document.getElementById("bmiresult")
let  status = document.getElementById("status")
let message = document.getElementById("message")
let resultbox = document.getElementById("resultbox")
button.addEventListener("click", function(){
    let h = height.value/100
    let w = weight.value
    let bmi = w/(h*h)
    bmiresult.innerText= Math.floor(bmi)
    if(bmi<18.5){
        status.innerText="UNDERWEIGHT"
        message.innerText= "Your weight is below the healthy range"
        resultbox.className="bg-primary-subtle rounded-4 p-4 text-center"
    }
    else if(bmi<25){
        status.innerText="NORMAL"
        message.innerText="You are in a healthy weight range"
        resultbox.className="bg-success-subtle rounded-4 p-4 text-center"
        
    }
    else if(bmi<30){
        status.innerText="OVERWEIGHT"
        message.innerText="Your weight is above the healthy range"
        resultbox.className="bg-warning-subtle rounded-4 p-4 text-center"
    }
    else{
        status.innerText="OBESE"
        message.innerText= "Your BMI is very high. Try to maintain a healthier lifestyle"
        resultbox.className="bg-danger-subtle rounded-4 p-4 text-center"
    }
})


let reset =document.getElementById("reset")
reset.addEventListener("click", function(){
    height.value=""
    weight.value=""
    bmiresult.innerText = "0.0"
    status.innerText="NORMAL"
    message.innerText= "Enter your details to calculate BMI"
    resultbox.className="bg-success-subtle rounded-4 p-4 text-center"
})
