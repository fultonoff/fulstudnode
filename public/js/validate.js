
//Form Submition

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYz6nTjwQTphFVwbJteiY1CWodKN1XUp4",
    authDomain: "fulstud.firebaseapp.com",
    databaseURL: "https://fulstud-default-rtdb.firebaseio.com",
    projectId: "fulstud",
    storageBucket: "fulstud.appspot.com",
    messagingSenderId: "989777743843",
    appId: "1:989777743843:web:4661d4628c9372374d5ad6",
    measurementId: "G-K0D3MWFS3G"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector("#contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let subject = document.querySelector(".subject").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let message = document.querySelector(".message").value;
    // console.log(name, email, message);
  
    saveContactInfo(name, email,phone, subject,  message);

     // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

    document.querySelector('#contact-form').reset();

    sendEmail(name, email,phone, subject, message);
}
// Save infos to Firebase
function saveContactInfo(name, email,phone, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    });
}



/// Send Email Info
// function sendEmail(name, email,phone, subject, message){

//     Email.send({

//         Host: "smtp.gmail.com", 
//         Username: 'stravels965@gmail.com',
//         Password: 'cbpwbfcpevhacykb',
//         To: 'stravels965@gmail.com',
//         From: 'stravels965@gmail.com',
//         Subject: `${name} Sent you a message`,
//         Body: `name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/>  Subject: ${subject} <br/> Message: ${message}`,
//     })

// }


