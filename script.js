const height = document.getElementById("height")
const height_error = document.querySelector(".height_error")
const weight = document.getElementById("weight")
const weight_error = document.querySelector(".weight_error")
const button = document.querySelector(".submit")
let result = document.querySelector(".result");
const massage = document.querySelector(".massage")
let resultcontainer = document.querySelector(".result_container");

button.addEventListener("click", function () {

    if (height.value == "") {
        height_error.innerHTML = "Please enter your height (foot) !";
      } else {
        height_error.innerHTML = "";
      }
      if (weight.value == "") {
        weight_error.innerHTML = "Please enter your weight (kg) !";
      } else {
        weight_error.innerHTML = "";
      }




    if (!weight.value == "" && !height.value == "") {

       // let bmi = 703 * ((weight.value * 2.20462) / (height.value * height.value));
      // let bmi = (weight.value / ((height.value / 39.37)*(height.value / 39.37)));
      let bmi = 703 * ((weight.value * 2.20462) / (height.value * 12 * (height.value * 12)));

        result.innerHTML = `BMI Result: ${bmi.toFixed(2)}`;

        if (bmi < 18.5) {
          massage.innerHTML = "Underweight- You need to gain weight";
          resultcontainer.classList.add("underweight")
        } else{
          resultcontainer.classList.remove("underweight")
        } 

        if (bmi >= 18.5 && bmi < 24.9) {
          massage.innerHTML = "Healthy Weight- You are perfect";
          resultcontainer.classList.add("healthy_weight")
        }else{
          resultcontainer.classList.remove("healthy_weight")
        } 
        if (bmi >= 25.0 && bmi < 29.9) {
          massage.innerHTML = "Healthy Weight- You are overweight";
          resultcontainer.classList.add("overweight")
        }else{
          resultcontainer.classList.remove("overweight")
        } 
        if (bmi >= 30.0 ) {
          massage.innerHTML = "Healthy Weight- You need to lose weight";
          resultcontainer.classList.add("obesity")
        }else{
          resultcontainer.classList.remove("obesity")
        }

       
    }
    //  height (inches) // weight (kg)
    // let bmi = 703 * ((weight.value * 2.20462) / (height.value * height.value));  
    
    //  height (foot) // weight (kg)
    // let bmi = 703 * ((weight.value * 2.20462) / (height.value * 12 * (height.value * 12)));

    //  height (meters) // weight (kg)
    // let bmi = (weight.value / ((height.value / 39.37)*(height.value / 39.37)));
})