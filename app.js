function validation(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.getElementsByName("gender")
    var error_message = document.getElementById("error_message");
    var options = document.getElementsByName("options").value;

    error_message.style.padding = "10px";
    var text;
    if(name.length < 1){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(surname.length < 3){
      text = "Please Enter Surname";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
         text = "Please Enter valid Email";
         error_message.innerHTML = text;
         return false;
        }
    if(isNaN(phone) || phone.length != 9){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if( birthday==''){
        text = "Please Enter Birthday";
        error_message.innerHTML = text;
        return false;
    }
    if (gender[0].checked == true) {
       gender="male";
    } else if (gender[1].checked == true) {
        gender="female";
    } else {
        // no checked
        text = "Please Enter Gender";
        error_message.innerHTML = text;
        return false;
    }
    console.log("Name:",name,"Surname:",surname,"Email:",email,"Phone Number:",phone,"Birthday:",birthday,"Gender:",gender);
    alert("Form Submitted Successfully!");
    return true;
  }
