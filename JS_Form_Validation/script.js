function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false

    
    //validation for username
    var username = document.forms['myForm']["fusername"].value;

    if (username === ''){
        seterror("username", "*Please fill the username field!");
        returnval = false;
    }

    else if (!/^[a-zA-Z]*$/g.test(username)){
        seterror("username", "*Username can include only alphabets.");
        returnval = false;
    }

    else if (username.length>10){
        seterror("username", "*Length of name must be less than 10 characters.");
        returnval = false;
    }

    //validation for email

    var email = document.forms['myForm']["femail"].value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");

    if (email === ''){
        seterror("email", "*Please fill the email field!");
        returnval = false;
    }

    else if (atposition<2 || dotposition<atposition+2 || dotposition+2>=email.length){  
        seterror("email", "*Please enter a valid e-mail address --> \n atpostion:"+atposition+"\n dotposition:"+dotposition+".");
        returnval = false;
    }

    //validation for phone

    var phone = document.forms['myForm']["fphone"].value;

    if (phone === ''){
        seterror("phone", "*Please fill the phone field!");
        returnval = false;
    }

    else if(!/^[0-9]+$/.test(phone)){
        seterror("phone", "*Phone number can include only numerical values.");
        returnval = false;
    }

    else if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits.");
        returnval = false;
    }

    //validation for name

    var name = document.forms['myForm']["fname"].value;

    if (!/^[a-zA-Z]*$/g.test(name)){
        seterror("name", "*Name can include only alphabets.");
        returnval = false;
    }

    //validation for password

    var password = document.forms['myForm']["fpass"].value;

    if (password === ''){
        seterror("pass", "*Please fill the password field!");
        returnval = false;
    }

    else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,8}$/.test(password)){
        seterror("pass", "*Password must be of min 5 and max 8 digits that include one uppercase, one lowercase, one numerical and one special character.");
        returnval = false;
    }

    //validation for confirm password

    var cpassword = document.forms['myForm']["fcpass"].value;

    if (cpassword === ''){
        seterror("cpass", "*Please fill the confirm password field!");
        returnval = false;
    }

    else if (cpassword != password){
        seterror("cpass", "*Password and Confirm password does not match.");
        returnval = false;
    }

    return returnval;
}

    // if (name.length == 0){
    //     seterror("name", "*Please fill the name field");
    //     returnval = false;
    // }

    // var email = document.forms['myForm']["femail"].value;
    // if (email.length>15){
    //     seterror("email", "*Email length is too long");
    //     returnval = false;
    // }