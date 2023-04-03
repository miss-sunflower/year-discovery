/*function getAge() {
    let err_container = document.querySelector("#err_container");
    err_container.innerHTML = '';

    let ynumber = parseInt(document.querySelector("#age").value);
    let current_year = new Date().getFullYear();

    if(!ynumber || (ynumber < 1000 || ynumber > 9999)){
        err_container.innerHTML = "Invalid Year Entered";
        return;
    }

    let myAge = current_year - ynumber;
    
    err_container.innerHTML = `You're currently ${myAge} years old.`;

}*/
function getAge(){
let ynumber = parseInt(document.querySelector("#age").value); //parseInt to make sure it's a number
let currentYear = new Date().getFullYear();
let some_thing = document.querySelector("#some_thing");
some_thing.innerHTML = '';

 if (ynumber >= 1000 && ynumber <= 9999){
    let myAge = currentYear - ynumber;
    some_thing.innerHTML = `You're currently ${myAge} years old.`;
} else {
  some_thing.innerHTML = "The Year Entered is not valid. Try Again!";
}
}

