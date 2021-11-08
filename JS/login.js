
    let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");
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
    if(email.value.trim()==""){
        return false;

    }
    else if(pwd.value.trim()==""){
        return false;

    }
    else if(pwd.value.length<=4){
        alert("password is too short");
        return false;

    }
    else {
        return true;
        
    }
    
}
 
