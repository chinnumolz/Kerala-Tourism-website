
    let email = document.getElementById("email");
    let error = document.getElementById("error");
     function validate(){
      let   regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color ="green";
        error.style.textAlign = "left";
        return true;


    }

    else {
        error.innerHTML ="invalid";
        error.style.color ="red";
        return false;
    }
}
 
