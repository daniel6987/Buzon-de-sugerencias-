document.getElementById("register-button").addEventListener("click", function() {
    document.getElementById("welcome-message").style.display = "none";
    document.getElementById("content").style.display = "flex";
});

document.getElementById("save-button").addEventListener("click", function() {
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const area = document.getElementById("area-input").value;
    const report = document.getElementById("report-input").value;

    document.getElementById("name-summary").innerText = "Nombre: " + name;
    document.getElementById("email-summary").innerText = "Correo electrónico: " + email;
    document.getElementById("area-summary").innerText = "Área de trabajo: " + area;
    document.getElementById("report-summary").innerText = "Reporte: " + report;

    document.getElementById("content").style.display = "none";
    document.getElementById("content-summary").style.display = "flex";
});

document.getElementById("send-button").addEventListener("click", function() {
    const name = document.getElementById("name-summary").innerText;
    const email = document.getElementById("email-summary").innerText;
    const area = document.getElementById("area-summary").innerText;
    const report = document.getElementById("report-summary").innerText;

    window.location.href = `mailto:daniel.gutierrez@agnicoeagle.com?subject=Sugerencia de ${name}&body=${email}%0D%0A${area}%0D%0A${report}`;

    alert("Reporte enviado con éxito!");

    setTimeout(() => {
        location.reload();
    }, 1000);
});


