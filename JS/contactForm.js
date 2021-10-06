// form validation

function validate() {
    if (document.contactForm.firstName.value == ""||
        document.contactForm.firstName.value.length > 24) {
        alert("Please provide your first name: 1-24 characters.");
        document.contactForm.firstName.focus();
        return false;
    }

    if (document.contactForm.lastName.value == "" ||
        document.contactForm.lastName.value.length > 24) {
        alert("Please provide your last name: 1-24 characters.");
        document.contactForm.lastName.focus();
        return false;
    }

    if (document.contactForm.age.value == "" ||
        isNaN(contactForm.age.value) ||
        document.contactForm.age.value < 19 || document.contactForm.age.value > 99)
    {
        alert("You should be older than 18 (and younger than 100)");
        document.contactForm.age.focus();
        return false;
    }
    
        if (document.contactForm.gender.value == "-1")
    {
        alert("Please provide your gender");
        return false;
    }

       
    if (document.contactForm.email.value == ""||
        document.contactForm.email.value.length > 49){
        alert("Please provide your Email. It should be less than 50 characters.");
        document.contactForm.email.focus();
        return false;
    }
    
        if (document.contactForm.www.value == ""||
        document.contactForm.www.value.length > 49) {
        alert("Please provide your url address. It should be less than 50 characters.");
        document.contactForm.www.focus();
        return false;
    }

        if (document.contactForm.comment.value == ""||
        document.contactForm.comment.value.length > 254)    {
        alert("Please write some comment. Maximum length is 254 characters.");
        document.contactForm.comment.focus();
        return false;
    }


    return (true);
	}


// remaining characters counter

function charCount() {
  var textEntered = document.getElementById('comment').value;
  var showChar = document.getElementById('showChar');
  var counter = (254-(textEntered.length));
  showChar.textContent = counter+' characters left';
}

var el = document.getElementById('comment');
el.addEventListener('keyup',charCount,false);