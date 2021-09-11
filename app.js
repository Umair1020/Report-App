firebase.initializeApp(firebaseConfig);

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);


    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });

}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function Signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}


const auth = firebase.auth();
var database = firebase.database();

auth.onAuthStateChanged((user) => {
    if (user) {
        database.ref('users/' + user.uid).update({
            email: user.email,
            lastLoggedInAt: new Date()
        });
        setData(user);
        // setMessages();
        document.getElementById("user").innerHTML = user.email;
        document.getElementById("login_box").style.display = "none";
        document.getElementById("welcome_box").style.display = "block";
    } else {
        document.getElementById("login_box").style.display = "block";
        document.getElementById("welcome_box").style.display = "none";
    }
});

const setData = (user) => {
    const databaseRef = database.ref('users/' + user.uid);
    databaseRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const lastLoggedInAt = data.lastLoggedInAt;
        const lastLoggedInSpan = document.getElementById("lastLoggedIn");
        lastLoggedInSpan.innerHTML = lastLoggedInAt;

    });
}

function tn() {
    var TeamName = $('#inp').val()
    // var Categories = $('#drop').val();
    var Members = $('#email-1').val();
    if(user){
        $('#table').append("<ul>" + TeamName + "</ul>" + "Members: " + Members + ` <input type="text" id="text1">
        <button type="button" id="button1"  onclick="email();">Add</button>
        <button type="button" id="button2"  onclick="display_array();">Remove</button>
        ` );
        $("input[type=text], textarea").val("");
        database.ref('Groups/' + TeamName).update({
            TeamName: TeamName,
            Members: Members,
        });
        document.getElementById("inp").innerHTML = user.TeamName;
        document.getElementById("email-1").innerHTML = user.Members;
        document.getElementById("welcome_box").style.display = "block";
    }
}
$(document).ready(function () {
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
});
