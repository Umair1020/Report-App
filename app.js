function Signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("name1", name)
    localStorage.setItem("email1", email)
    localStorage.setItem("password1", password)

}


function login() {

    var email = document.getElementById("email1").value;
    var password = document.getElementById("password").value;

    var email1 = localStorage.getItem("email1")
    var password1 = localStorage.getItem("password1")

    var email2 = localStorage.getItem("email2")
    var password2 = localStorage.getItem("password2")

    var email3 = localStorage.getItem("email3")
    var password3 = localStorage.getItem("password3")

    var email4 = localStorage.getItem("email4")
    var password4 = localStorage.getItem("password4")

    var email5 = localStorage.getItem("email5")
    var password5 = localStorage.getItem("password5")

    if (email == email1 && password == password1) {
        window.location.href = "Report.html";
    } else if (email == email2 && password == password2) {
        window.location.href = "Report.html";
    } else if (email == email4 && password == password4) {
        window.location.href = "Report.html";
    } else if (email == email3 && password == password3) {
        window.location.href = "Report.html";
    } else if (email == email5 && password == password5) {
        window.location.href = "Report.html";
    }
    else {
        alert("your email and password is incorrect")
    };
};
$("#password12").on('click', function () {
    var passwordField = $('#password')
    var passwordFieldType = passwordField.attr('type')
    if (passwordFieldType == 'password') {
        passwordField.attr('type', 'text');
        $(this).text('');
    } else {
        passwordField.attr('type', 'password');
        $(this).text('');
    }
});

function tn() {
    var TeamName = $('#inp').val()
    // var Categories = $('#drop').val();
    var Members = $('#email').val();

    $('#table').append("<tr><td>"  + TeamName  +  "</td><td>" + "<br>"+"<br>" + Members +  "</td><td>");
    $("input[type=text], textarea").val("");
    if(TeamName === ""){
        alert("Enter your team name")
     }else{
    alert("enter successful")
     }
}
