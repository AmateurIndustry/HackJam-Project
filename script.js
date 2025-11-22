function goToForms() {
    // 30% chance of redirecting to wrong page
    if (Math.random() < 0.30) {
        alert("ERROR 418: I'm a teapot.");
    } else {
        window.location.href = "form.html";
    }
}

function goToAppointments() {
    alert("Processing your request... This may take 6–8 weeks.");
    window.location.href = "appointments.html";
}

function randomRedirect() {
    let pages = ["success.html", "form.html", "index.html", "appointments.html"];
    let page = pages[Math.floor(Math.random() * pages.length)];

    alert("Redirecting due to calendar malfunction...");
    window.location.href = page;
}

function startOver() {
    window.location.href = "index.html";
}