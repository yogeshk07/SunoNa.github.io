function validation() {
  var user = document.getElementById("user_name").value;
  var email=document.getElementById("email").value; 
  var number=document.getElementById("number").value;
  var pass=document.getElementById("pass").value;
  var rePass=document.getElementById("rePass").value;
  if (user == "" ) {
    alert("Please enter user name");
    return false;
  }
  if ((user.length <= 5 ) || (user.length >15)){
    alert(`user name should be between 5 to 15 characters`)
    return false
  }
  if (!isNaN(user)) {
    alert("Only characters are allowed in user name");
    return false;
  }

   if (email == "" ) {
    alert("Please enter email address");
    return false;
  }
   if (number == "" ) {
    alert("Please enter mobile number");
    return false;
  }
  if ((number.length<10 ) || (number.length>10)){
    alert("Number must be of 10 Digits");
    return false;
  }
   if (pass == "" ) {
    alert("Please enter password");
    return false;
  }
   if ((pass.length < 6)||(pass.length >8) ) {
    alert("password must be of 6 to 8 digits");
    return false;
  }
   if (rePass == "" ) {
    alert("Please re enter password");
    return false;
  }

  if (rePass !==pass ) {
    alert("password not matched");
    return false;
  }
  

}


////----------------songs
var S1=document.getElementById("S1")
var S2=document.getElementById("S2")
var S3=document.getElementById("S3")
var S4=document.getElementById("S4")
var S5=document.getElementById("S5")
var S6=document.getElementById("S6")


function song1(){
  S1.play()
}
function song1out(){
  S1.pause()
}

function song2(){
  S2.play()
}
function song2out(){
  S2.pause()
}

function song3(){
  S3.play()
}
function song3out(){
  S3.pause()
}

function song4(){
  S4.play()
}
function song4out(){
  S4.pause()
}

function song5(){
  S5.play()
}
function song5out(){
  S5.pause()
}


function song6(){
  S6.play()
}
function song6out(){
  S6.pause()
}

