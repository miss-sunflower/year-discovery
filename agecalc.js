function getAge() {
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

}