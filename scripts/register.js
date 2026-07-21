const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Generate a random registration code
    const year = new Date().getFullYear();

    const random = Math.random()
        .toString(36)
        .substring(2,10)
        .toUpperCase();

    const code = `TEAMS-${year}-${random}`;

    // Save temporarily for the success page
    localStorage.setItem(
        "registrationCode",
        code
    );

    const firstName =
        document.querySelector("[name='first_name']").value;

    const lastName =
        document.querySelector("[name='last_name']").value;

    localStorage.setItem(
        "applicantName",
        firstName + " " + lastName
    );

    // Go to success page
    window.location.href = "success.html";

});