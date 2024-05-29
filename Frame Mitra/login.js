(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyCefDZdcoNjmh9XzMA-VaSh75F3SvPvtkI",
        authDomain: "framemitraa.firebaseapp.com",
        databaseURL: "https://framemitraa-default-rtdb.firebaseio.com",
        projectId: "framemitraa",
        storageBucket: "framemitraa.appspot.com",
        messagingSenderId: "748696189926",
        appId: "1:748696189926:web:d2a2f53cff3eb2f7abb427",
        measurementId: "G-CY85RE8GCT"
    };

    firebase.initializeApp(firebaseConfig);

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");


    btnLogin.addEventListener('click', e => {
        e.preventDefault()
        const emailVal = email.value;
        const passwordVal = password.value;

        const auth = firebase.auth();

        try {
            auth.signInWithEmailAndPassword(emailVal, passwordVal).then(user => {
                console.log("user is ", user)
                alert("Login Successful");
                window.location.href="home.html";
            }).catch(err => {
                alert(err.message);
            });

        } catch (error) {
            console.log(error)
        }

    });
}());
