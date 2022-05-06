function ValidateForm(e){
  let firstName = document.getElementById("sign-up__first-name");
  let lastName = document.getElementById("sign-up__last-name");
  let emailAddress = document.getElementById("sign-up__email-address");
  let password = document.getElementById("sign-up__password");
  
  const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  ToggleError(firstName, firstName.value.length <= 0);
  ToggleError(lastName, lastName.value.length <= 0);
  ToggleError(emailAddress, !emailAddress.value.match(validEmailRegex));
  ToggleError(password, password.value.length <= 0);
  
  e.preventDefault();
  
  function ToggleError(elem, cond){
    const errorClass = "is-error";
    
    if(cond){
      elem.classList.add(errorClass);
      elem.nextElementSibling.classList.add(errorClass);
      
      if(elem == emailAddress){
        emailAddress.placeholder = "email@example/com";
      }
    }
    else{
      elem.classList.remove(errorClass);
      elem.nextElementSibling.classList.remove(errorClass);
    }
  }
}