var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        window.location = "../admin/adminHomePage.html";
    }
    else {
        attempt--;
        if (username === "admin" && password !== "admin") {
            alert("Parolă incorectă! Reîncercați!");
        }
        else if (username !== "admin" && password === "admin") {
            alert("Utilizator incorect! Reîncercați!");
        }
        else {
            alert("Utilizator si parolă incorecte!")
        }
        alert("You have left " + attempt + " attempt;");
        if (attempt === 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        return false;
    }
}


