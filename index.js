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
        message.innerHTML='Your weight is below the healthy range <i class="bi bi-emoji-dizzy text-primary"></i>'
        resultbox.className="bg-primary-subtle rounded-4 p-4 text-center"
        bmiresult.className="display-1 fw-bold text-primary"
        status.className="badge bg-primary rounded-pill px-4 py-2 fs-6 mt-2"
        message.className="mt-3 mb-0 text-primary"

    }
    else if(bmi<25){
        status.innerText="NORMAL"
        message.innerHTML='You are in a healthy weight range <i class="bi bi-emoji-smile text-success"></i>'
        resultbox.className="bg-success-subtle rounded-4 p-4 text-center"
        bmiresult.className="display-1 fw-bold text-success"
        status.className="badge bg-success rounded-pill px-4 py-2 fs-6 mt-2"
        message.className=" mt-3 mb-0 text-success"
    }
    else if(bmi<30){
        status.innerText="OVERWEIGHT"
        message.innerHTML='Your weight is above the healthy range <i class="bi bi-emoji-neutral text-warning"></i>'
        resultbox.className="bg-warning-subtle rounded-4 p-4 text-center"
        bmiresult.className="display-1 fw-bold text-warning"
        status.className="badge bg-warning rounded-pill px-4 py-2 fs-6 mt-2"
        message.className=" mt-3 mb-0 text-warning"
    }
    else{
        status.innerText="OBESE"
        message.innerHTML='Your BMI is very high. Try to maintain a healthier lifestyle <i class="bi bi-emoji-frown text-danger"></i>'
        resultbox.className="bg-danger-subtle rounded-4 p-4 text-center"
        bmiresult.className="display-1 fw-bold text-danger"
        status.className="badge bg-danger rounded-pill px-4 py-2 fs-6 mt-2"
        message.className=" mt-3 mb-0 text-danger"

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
    bmiresult.className="display-1 fw-bold text-success"
    status.className="badge bg-success rounded-pill px-4 py-2 fs-6 mt-2"
    message.className=" mt-3 mb-0 text-muted"
})
