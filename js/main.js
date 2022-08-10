'use strict'

// // Step 3: Add Event Listener -JS

// let logForm = document.getElementById('logForm');
// logForm.addEventListener('submit', logUserInput)

// // Step 4: Code the Event Handler
// function logUserInput(event){
//     event.preventDefault();
//     // console.log(event);
//     let form = event.target;
//     console.log(form.userText.value);
// }


// let foodOrder = document.getElementById('foodOrder');
// foodOrder.addEventListener('submit', logFoodOrder);

// function logFoodOrder(event){
//     event.preventDefault();
//     // The actual HTML of form 
//     let form = event.target;
//     let name = form.name.value;
//     let flavor = form.flavor.value;
//     let toppings = form.toppings;
//     let instructions = form.instructions.value;
    
//     for (let i = 0; i < toppings.length; i ++) {
//         let topping = toppings[i];
//         if (topping.checked) {
//             console.log(topping.value);
//         }
//     }

//     console.log(name, flavor, instructions);
// }