
// form validation



function validateinputfeild(Valuee){
    if(Valuee==="")
    {
        alert('please enter the Required feild');
    }
    else{
        console.log(Valuee);
    }
}


function formsubmit(fname,lname,email,phone){

let letters = /^[A-Z]?[a-z]+$/;
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

if (fname.match(letters)) {
    console.log('fname valid')
  }
  else {
    alert("Please enter charactor only Firstname is incorrect");
  }
if (lname.match(letters)) {
    console.log('fname valid')
  }
  else {
    alert("Please enter charactor only");
  }



if (email.match(mailformat)) {
console.log('valid email')
  }
  else {
    alert("Invalid email address!");
  }
if(phone.match(phoneno))
  {
    console.log("Valid  Phonenumber!");
  }
else
  {
    alert("Invalid  phonenumber!");
  }

}



 