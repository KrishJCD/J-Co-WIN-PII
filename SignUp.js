let email=document.getElementsByClassName("form-control1");
let phone=document.getElementsByClassName("form-control2");
let password=document.getElementsByClassName("form-control3");
let state=document.getElementsByClassName("form-control5");
let age=document.getElementsByClassName("form-control4");

var eVal="",phoneVal=0,passwordVal="",stateVal="",ageVal=0;






var i=0;
var database;
function preload(){
  //bgImg=loadImage("bg.jpg");
}

function setup()
{
  createCanvas(400,400);
  database=firebase.database();
  
  var countRef=database.ref('count');
  countRef.on("value",(data)=>{
    i=data.val();
  });
  
}


window.onload=function(){
  document.getElementsByClassName("btn")[0].onclick=function(){
    eVal=email[0].value;
    phoneVal=phone[0].value;
    passwordVal=password[0].value;
    stateVal=state[0].value;
    ageVal=age[0].value;

    updateDetails();

  }

}


function draw()
{

}

function updateDetails(){
  if(!(email==="" || passwordVal==="" || phoneVal===0 || ageVal==="" || stateVal==="")){
    database.ref('userdet/user'+i).set({
      'email':eVal,
      'password':passwordVal,
      'phone':phoneVal,
      'age':ageVal,
      'state':stateVal,
    });
    i++;
    database.ref('/').update({
      'count':i
    });

    alert("Sign Up Successful");
  }
  else{
    alert("One or Multiple Fields have been Left Empty. Please Provide the Necessary Details");
  }
}
