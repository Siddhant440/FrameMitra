document.getElementById("feedBackButton").addEventListener("click", function() {
    window.location.href = "feedback.html";
        });

var photographers = [
    { id: 1, name: "Kevin De Bruyne", location: "Ramnagar", image: "img/card1.png", portfolio:"" },
    { id: 2, name: "Piyush Kumar", location: "Haldwani", image: "img/web2.jpg", portfolio:"https://drive.google.com/drive/folders/1G7O3X1-OtMVsQ05S2odMRlheECLmv3I3" },
    { id: 3, name: "Harry Maguire", location: "Ranikhet", image: "img/card2.png", portfolio:"" },
    { id: 4, name: "Andres Iniesta", location: "Dehradun", image: "img/card3.png", portfolio:"" },
    { id: 5, name: "Robert Lewandowski", location: "Kashipur", image: "img/card4.png", portfolio:"" },
    { id: 6, name: "Jack Grealish", location: "Munsyari", image: "img/card5.png", portfolio:"" },
    { id: 7, name: "Zinedine Zidane", location: "Rudrapur", image: "img/card7.png", portfolio:"" },
    { id: 8, name: "The Great Khali", location: "Aise Maarunga Mysterio Ko", image: "img/card8.png", portfolio:"" },
];

function createPhotographerCard(photographer) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.onclick = function () {
        showBookingDialog(photographer.id, photographer.name, photographer.location);
    };

    var img = document.createElement("img");
    img.src = photographer.image;
    img.alt = "Photographer " + photographer.id;

    var label = document.createElement("div");
    label.classList.add("label");
    label.innerHTML = `<h3>${photographer.name}</h3><p>Location: ${photographer.location}</p>`;

    card.appendChild(img);
    card.appendChild(label);

    return card;
}

function addPhotographers() {
    var photographersSection = document.getElementById("photographers");

    photographers.forEach(function (photographer) {
        var photographerCard = createPhotographerCard(photographer);
        photographerCard.setAttribute("data-location", photographer.location.toLowerCase());
        photographersSection.appendChild(photographerCard);
    });
}

window.onload = addPhotographers;

function showBookingDialog(id, name, location) {
    var dialog = document.getElementById("booking-dialog");
    var photographerName = document.getElementById("photographerName");
    var photographerLocation = document.getElementById("photographerLocation");
    var photographerImage = document.getElementById("photographerImage");

    photographerName.textContent = name;
    photographerLocation.textContent = "Location: " + location;
    photographerImage.src = photographers.find(p => p.id === id).image;

    dialog.style.display = "block";
}

function cancelBooking() {
    var dialog = document.getElementById("booking-dialog");

    dialog.style.display = "none";
}
function showBookingDialog(id, name, location) {
var overlay = document.getElementById("overlay");
var dialog = document.getElementById("booking-dialog");
var photographerName = document.getElementById("photographerName");
var photographerLocation = document.getElementById("photographerLocation");
var photographerImage = document.getElementById("photographerImage");

document.getElementById("submit").addEventListener("click", function() {
    submitForm(name, location);
});

var portfolioLink = document.getElementById("portfolio");
portfolioLink.addEventListener("click", function() {
    var portfolioUrl = photographers.find(p => p.id === id).portfolio;
    window.open(portfolioUrl, "_blank");
});

photographerName.textContent = name;
photographerLocation.textContent = "Location: " + location;
photographerImage.src = photographers.find(p => p.id === id).image;

overlay.style.display = "block";
dialog.style.display = "block";


overlay.addEventListener("click", function () {
    cancelBooking();
});
}

function filterPhotographers() {
    var input = document.getElementById("locationFilter");
    var filter = input.value.toLowerCase();
    var photographerCards = document.getElementsByClassName("card");

    for (var i = 0; i < photographerCards.length; i++) {
        var location = photographerCards[i].getAttribute("data-location");
        if (location.includes(filter)) {
            photographerCards[i].style.display = "block";
        } else {
            photographerCards[i].style.display = "none";
        }
    }
}

function clearAllFields() {
    document.getElementById("phoneNumber").value = "";
    document.getElementById("occasion").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventLocation").value = "";
}

function cancelBooking() {
var overlay = document.getElementById("overlay");
var dialog = document.getElementById("booking-dialog");
var successDialog = document.getElementById("success-dialog");


overlay.style.display = "none";
dialog.style.display = "none";


overlay.removeEventListener("click", function () {
    cancelBooking();
});

}

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

  var db = firebase.firestore();

  function submitForm(photographerName, photographerLocation) {

    var phoneNumber = document.getElementById("phoneNumber").value;
    var occasion = document.getElementById("occasion").value;
    var eventDate = document.getElementById("eventDate").value;
    var eventLocation = document.getElementById("eventLocation").value;

    db.collection("bookings").add({
        photographerName: photographerName,
        photographerLocation: photographerLocation,
        phoneNumber: phoneNumber,
        occasion: occasion,
        eventDate: eventDate,
        eventLocation : eventLocation

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        showSuccessDialog();

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    function showSuccessDialog() {
        var successDialog = document.getElementById("success-dialog");
        var closeButton = document.getElementById("close-button");
        var bookingDialog = document.getElementById("booking-dialog");
        var overlay = document.getElementById("overlay");

        document.getElementById("close-button").addEventListener("click", function() {
            successDialog.style.display = "none";
            overlay.style.display = "none";
            bookingDialog.style.display = "none";
            
        });


        successDialog.style.display = "block";
        overlay.style.display = "block";
    }
}