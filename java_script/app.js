

function forAlert(){
    alert("JAVASCRIPT ALERT!")
}




// Function to show the alert
function showAlert() {
    alert("Mouse moved over the element!");
}



// Function to hide the element
function hideElement() {
    var element = document.getElementById("hideOnMouseout");
    element.style.display = "none";
}


// Function to open a new window
function openNewWindow() {
    // Determine the window size based on mouse position
    var windowWidth = window.innerWidth / 2;  // Half of the viewport width
    var windowHeight = window.innerHeight / 2; // Half of the viewport height
    
    // Open the new window with the calculated size
    var newWindow = window.open('', '_blank', 'width=' + windowWidth + ',height=' + windowHeight);

    // Set the content of the new window
    newWindow.document.write('<html><head><title>New Window</title></head><body>');
    newWindow.document.write('<h1>New Window Content</h1>');
    newWindow.document.write('<button onclick="closeWindow();">Close Window</button>');
    newWindow.document.write('</body></html>');

    // Close the new window function
    function closeWindow() {
        newWindow.close();
    }
}


function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var validationMessage = document.getElementById("validationMessage");

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        validationMessage.textContent = "All fields are required!";
    } else if (!isValidEmail(email)) {
        validationMessage.textContent = "Invalid email address!";
    } else {
        validationMessage.textContent = "Form submitted successfully!";
    }
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}



