var userNameReg = document.getElementById('userNameReg');
var userPwReg = document.getElementById('userPwReg');
var emailReg = document.getElementById('emailReg');
var signUpBtn = document.getElementById('signUpBtn');

var userPw = document.getElementById('userPw')
var userEmail = document.getElementById('userEmail')
var loginBtn = document.getElementById('loginBtn')
var users = [];

var data = localStorage.getItem('storage');
var userData = JSON.parse(data);
var test = []
test = userData



signUpBtn.onclick = function creatData() {

    var user =
    {
        pw: userPwReg.value,
        email: emailReg.value
    }
    users.push(user);
    localStorage.setItem('storage', JSON.stringify(users));
    console.log(users);

}



// login 
loginBtn.onclick = function shit() {
    for (var i=0; i <= test.length; i++) {



        if (userEmail.value == userData[i].email && userPw.value== userData[i].pw) 
        {
            alert('success')
            var URL = "file:///D:/Web%20Development/Route/Sessions/week9/Bahnas/week9/6/index.html";

   window.open(URL, null);
       

            
        }
        else if (userEmail.value==""||userPw.pw=="")
        {
            alert('plsease fill the username/password to login');

        }
        
        
        else if(userEmail.value!==userData[i].email && userPw.value !== userData[i].pw)
    {
        alert('wrong password/username');

    }
 
    }
}

