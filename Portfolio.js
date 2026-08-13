function showMessage() {

    alert("Project details will be added soon!");

}


function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been received.");

}