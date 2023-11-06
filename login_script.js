function validateForm() {
    let userEmail = document.getElementById("email").value;
    /* Pattern for email*/
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    let userPass = document.getElementById("password").value;

      /* Pattern for password*/
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
      /* Validation for email and password*/
    if(emailRegex.test(userEmail) && regularExpression.test(userPass)){
        alert("Login successfuly !");
        
    } 
    else {
        alert("Login failed !");
    }
}

function validateFormSignUp() {
    let userEmail = document.getElementById("email").value;
    /* Pattern for email*/
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    let userPass = document.getElementById("password").value;

      /* Pattern for password*/
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    let userName = document.getElementById("Username").value;
    let userNameRegex = /^[a-zA-Z\-]+$/;
      /* Validation for email and password*/
    if(emailRegex.test(userEmail) && regularExpression.test(userPass) && userNameRegex.test(userName)){
        alert("Login successfuly !");
        
    } 
    else {
        alert("Login failed !");
    }
}


/* Buttons for manipulating with form of Login(actualy don't work)*/
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconCLose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

iconCLose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});