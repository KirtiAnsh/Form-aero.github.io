// Include Firebase via CDN in your HTML instead of importing in JS
const firebaseConfig = {
    apiKey: "AIzaSyBMWAY4jRG61IhTU9D89CXG8VnUywGS8Uo",
    authDomain: "airo-appointment-db.firebaseapp.com",
    databaseURL: "https://airo-appointment-db-default-rtdb.firebaseio.com",
    projectId: "airo-appointment-db",
    storageBucket: "airo-appointment-db.firebasestorage.app",
    messagingSenderId: "803827001453",
    appId: "1:803827001453:web:9bc3b8a5f48ea60e663764",
    measurementId: "G-R5YCY5Y348"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("appointment-form");

// Add event listener for form submission
document.getElementById("appointment-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault(); // Fixed capitalization

    // Retrieve form values
    var name = getElementVal('name');
    var company = getElementVal('company');
    var phone = getElementVal('phone');
    var email = getElementVal('email');
    var service = getElementVal('service');
    var date = getElementVal('date');
    var time = getElementVal('time');

    console.log(name, company, phone, email, service, date, time);

    // Push data to Firebase Realtime Database
    db.push({
        name: name,
        company: company,
        phone: phone,
        email: email,
        service: service,
        date: date,
        time: time
    }).then(() => {  // Corrected single dot here
        alert("Appointment submitted successfully!");
        location.reload(); // Reload the page
    }).catch((error) => {
        console.error("Error saving appointment: ", error);
    });}
    
// Helper function to get form values
const getElementVal = (id) => {
    return document.getElementById(id).value;
};


