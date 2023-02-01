var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var score = document.getElementById("score");
var sum = document.getElementById("sum");
var error = document.querySelector('.error');
var btn = document.querySelector('.btn');
var coupan = document.getElementById("cupan");
var Dispname = document.getElementById("names");
var Dispusername = document.getElementById("user_name") ;
var images = document.querySelectorAll("imgs");
var sgn = document.querySelector('.signup');
var er = document.getElementById("e");


//after clicking Disable
 
// img2.querySelector('#img2').disabled = false; 
// img3.getElementById("img3").disabled = false; 
var counts = 0
var d = 0;

//1st image click
img1.addEventListener("click", auth )

function auth() {
    
     if (d==0) {
    img1.style.border = "5px solid red"
    sgn.style.display= "block";
    d = 1;
    }
    
 }



//2nd image click
var a = 2;
let data
 img2.addEventListener("click" , viewname ) 
 function viewname() {
    
    if(d==2) {
        img2.style.border = "5px solid red"
        a=3;
    counts = 1;
    data = JSON.parse(localStorage.getItem('data'));
    Dispname.innerHTML ="Name :" +localStorage.getItem("name" , name);
    Dispusername.innerHTML ="Username :"+ window.localStorage.username;
    d=3;
    }
}
  
 //img 3 change img
 var click = 0;
 function changeImg() {
    if(counts==1) {
        img3.style.border = "5px solid red"
    img3.src = 'https://illustoon.com/photo/8064.png'
    score.style.display="block"
    sum.style.display="block"
    click=++click;
    }
 }

 //rolling dice
 var counts2 = 0;
 var add = 0;
 var t = 3
 img3.addEventListener("click" , rolldice ) 
 function rolldice() {
    if(counts<3 && d==3) {
    if(click>1&&click<5 ){
    let arr = [1,2,3,4,5,6]
    let RandomIndex = Math.floor(Math.random()*arr.length)
    let randomDice = arr[RandomIndex]
    score.innerHTML = "Score : " + randomDice
    add = add+randomDice
    sum.innerHTML="Sum :" + (add);
    
     if(add<=10 && click==4) {
         errors.style.display = "block"
         btn.style.display = "block"
         errors.innerHTML = "please try Scoring more then 10"
             }
    else{
        errors.style.display = "none"
        btn.style.display = "none"
    }
     counts = counts++;
 }
     counts2 = counts2+1;
}
 }
    
//retry btn
var x = 2;
btn.addEventListener("click" , reload)
        function reload(){
            if(x<=3 ) {
            d = 3;
            counts2 = 0;
         score.innerHTML = "Score : " + 0;
         sum.innerHTML="Sum :" + 0;
         click = 1;
         add = 0;
            }
         else {
            if(add<=10){
             errors.style.display = "none"
             btn.style.display = "none"
             er.innerHTML = "Bad Luck"
        }
        }
        x++;
        console.log("hi");
    }

    


 //img 4
 var clicked = 0;
 img4.addEventListener("click" , cupan) 
 function cupan(e) {
    
    if(counts2>3 && clicked<=1 && add>10 ){
        img4.style.border = "5px solid red"
    var random_string = '';
    var ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqustuvwxyz'
    for(var i=0;i<12;i++) {
        random_string +=ch.charAt(Math.random()*ch.length) 
        clicked = 2
    }
    
    coupan.innerHTML = "Coupon :" + random_string
    
    img4.src = "https://t3.ftcdn.net/jpg/01/33/08/02/360_F_133080263_bYBEgnI4ycTfMFvIa0uLXffNWsyBUTUv.jpg"

}

 }
 



 //sign up form
 let signup_form  = document.querySelector('.signup');
    
          let input_name = document.querySelector('#name');
          let input_username = document.querySelector('#username');
          let input_email = document.querySelector('#email');
          let errors = document.querySelector('.errors');
    
    
    
          signup_form.addEventListener('submit', validateForm)
    
          let arr = []
          let id = 1
          function validateForm(e) {
               e.preventDefault();
                  let name = input_name.value;
                  let username = input_username.value;
                  let email = input_email.value;
                  let ans = 0;
                  if(checkNumberofWords(name) <2){
                     error.innerHTML = 'Name must be at least 2 words';
                  }
                  else if(checkNumberofWordss(username) <2){
                     error.innerHTML = 'Username must be at least 1 words';
                  }
                  else if(email.indexOf('@') == -1){
                      error.innerHTML = 'Email must contain @';
                  }
                 else if(checkEmail(email) == false){
                      error.innerHTML = 'Email already exists';
                  }
                else{
                  flag = true;
                      let obj = {id: id++, name, email , username }
                      arr.push(obj)
                      // console.log(arr)
                      input_name.value = '';
                      input_username.value = '';
    
                      //storing data
                      localStorage.setItem("data" , JSON.stringify(arr))
                    var N = localStorage.setItem("name" , name);
                    var uid = localStorage.setItem("username" , username); 
                    var c = 3;
                    sgn.style.display = "none"
                    d = 2;
                    error.style.display = "none"
                }
    
    
           }
    
           function checkNumberofWords(name){
    
                name = name.trim();
    
                let arr = name.split(' ');
    
                return arr.length
           }
           function checkNumberofWordss(username){
              username = username.length
              return username
           }
    
    
            function checkEmail(email){
               for( t of arr){
                      if(t.email == email){
                          return false
                      }
               }
                  return true
           }
        //     var submit = document.getElementById("submit");
        //     submit.addEventListener("click" , GoBack)
        //    function GoBack() {
        //     sgn.style.display = "none"
        //     d = 2;
        //    }