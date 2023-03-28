function getAge(){
let ynumber = document.getElementById("age");
let myYear;
if (myYear >= 1000 && myYear <= 9999){
    getAge();
} else {
console.log("The Year Entered is not valid. Try Again!")
}
const currentYear = 2023;
let myAge = currentYear - myYear;
console.log(`You're currently ${myAge} years old.`);

}
