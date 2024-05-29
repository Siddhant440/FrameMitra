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
       const btnSignup = document.getElementById("btnSignup");
       const name = document.getElementById('name');
       const phone = document.getElementById('phone');
   

   btnSignup.addEventListener('click', e => {
      e.preventDefault()

      if (!name.value || !email.value || !phone.value || !gender.value || !password.value || !confirmPassword.value || !dob.value) {
        alert('Please fill in all required fields.');
        return;
    }

  
      const emailVal = email.value;
      const passwordVal = password.value;
      const nameVal  = name.value;
      const phoneVal = phone.value;
      const dobVal = dob.value;
      const genderVal = gender.value;

      if (passwordVal.length < 6) {
        alert('Password should have at least 6 characters');
        return;
    }

      console.log(emailVal,passwordVal,nameVal,phoneVal,genderVal,dobVal)
  
      const auth = firebase.auth();

      auth.createUserWithEmailAndPassword(emailVal, passwordVal).then(userObj => {
          console.log(userObj.user.uid)
          const user = userObj.user;
  
 
          var userDocRef = firebase.firestore().collection('users').doc(user.uid);
          userDocRef.set({
              name: nameVal?.toString(),
              number: phoneVal?.toString(),
              email: emailVal?.toString(),
              password:passwordVal?.toString(),
              confirmPassword:passwordVal?.toString(),
              gender:genderVal?.toString(),
              dob:dobVal?.toString()
          })
          
              .then(function () {

                  console.log('User sign-up successful');
                  alert('Signup Successful')
                  window.location.href="login.html";
              })

              .catch(function (error) {
                    
                  console.error('Error saving user details:', error);
              });
      });
   
   })
  }());