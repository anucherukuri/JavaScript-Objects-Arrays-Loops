/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

//To display Exercise number 

const displayExercise = (n) => {
    console.log("                                                                                                                                                     ");
    console.log("************************************************** Exercise-"+n+" *********************************************************************");
    console.log("                                                                                                                                                     ");
}

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

displayExercise(1);

let arr = [1, 2, 3, 4, 5];
console.log("The given array of 5 positive numbers is: "+arr);


/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

displayExercise(2);

let person1 = {
    name: "Anusha",
    surname: "Cherukuri",
    "email address": "anusharaocherukuri@gmail.com",
    age: 25
};

console.log(person1);
// console.log("abc: "+person1);
console.log("Name in the given person1 object is: "+person1.name);
console.log("SurName in the given person object is: "+person1.surname);
console.log("Emailid in the given person object is: "+person1["email address"]);
console.log("Age in the given person object is: "+person1.age);



/* EXERCISE 3
 Add to the previously created object a property with a boolean value to represent wheter you have or not a driving license.
*/

displayExercise(3);

person1.isDriving = true;
console.log("Driving License: "+person1.isDriving);
console.log(person1);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
displayExercise(4);

delete person1.age;
console.log("After deleting age: "+person1.age);
console.log(person1);


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
displayExercise(5);

let person2 = {
    name: "Anudeep",
    surname: "Basavaraju",
    "email address": "basavarajuanudeep@gmail.com"
};
console.log(person2);
console.log("Emailid in the given person2 object is: "+person2["email address"]);

const compareEmails = (obj1, obj2) => {
    if(obj1["email address"] == obj2["email address"]){
        console.log("Both Persons email addresses are same");
    }else{
        console.log("Both email addresses are different");
    }
}
compareEmails(person1, person2);


/* EXERCISE 6
 You are working on an e-commerce website. In the variable 'totalShoppingCart' you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
displayExercise(6);

const shoppingPromotion = (totalShoppingCart) =>{
    grandTotal = totalShoppingCart +10;
    if(totalShoppingCart > 50){
        
        console.log("Your Grand Total is: $"+totalShoppingCart);
        console.log("HURRAY!! Your order is eligible for FREE $HIPPING!");
    }else{
        buyMore = 51-totalShoppingCart;
        console.log("Your sub total is: $"+totalShoppingCart+ " and if you are done with shopping, your grand total is: $"+grandTotal);
        console.log("You can buy for $"+buyMore+" more to be ELIGIBLE for FREE $HIPPING!!!")
    }
}

shoppingPromotion(50);
shoppingPromotion(70);
shoppingPromotion(30);


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

displayExercise(7);

const blackFridaySale = (totalShoppingCart) => {
    let discount = 20/100;
    grandTotal = totalShoppingCart +10;
    if(totalShoppingCart > 50){ 
        console.log("Enjoy our BLACK FRIDAY SALE discount for every order!!!");
        console.log("Your Grand Total is: $"+(totalShoppingCart - (discount * totalShoppingCart)));
        console.log("HURRAY!! Your order is eligible for FREE $HIPPING!");
    }else{
        buyMore = 51-totalShoppingCart;
        console.log("Enjoy our BLACK FRIDAY SALE discount for every order!!!");
        console.log("Your sub total is: $"+((grandTotal)-(discount * grandTotal))+ " and if want to done shopping, your grand total is: $"+(grandTotal-(discount * grandTotal)));
        console.log("You can buy for $"+buyMore+" more to be ELIGIBLE for FREE $HIPPING!!!")
    }
}

blackFridaySale(70);
blackFridaySale(30);


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

displayExercise(8);

let cars = {
    brand: "BMW",
    model: "M60",
    licensePlate: "M JR 365E"
}
//Creating Empty Objects
let car1 = { }
let car2 = { }
let car3 = { }
let car4 = { }
let car5 = { }

//CLONING the Objects from 'cars' object
Object.assign(car1, cars);
Object.assign(car2, cars);
Object.assign(car3, cars);
Object.assign(car4, cars);
Object.assign(car5, cars);

console.log(car1, car2, car3, car4, car5);

car1.licensePlate = "M GR 365E";
car2.licensePlate = "M GT 234T";
car3.licensePlate = "M JG 1234";
car4.licensePlate = "M GH 2468";
car5.licensePlate = "M AB 3579";

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);



/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

displayExercise(9);

console.log("exercise-9")
let carsForRent  = [ car1, car2, car3, car4, car5];

console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

displayExercise(10);

carsForRent.pop();
carsForRent.splice(3,1);
console.log("Deletion Successful");


/* 
delete 
*/

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

displayExercise(11);

console.log(carsForRent);


/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.
*/

displayExercise(12);

let carsForSale = carsForRent;
let totalCars = carsForSale;
console.log("carsForSale array: ", [carsForSale]);
console.log("totalCars array: ",[totalCars]);


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
displayExercise(13);

for(i = 0; i <= ((totalCars.length)-1); i++){
    console.log(totalCars[i]);
}


