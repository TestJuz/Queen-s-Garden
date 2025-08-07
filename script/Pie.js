    document.addEventListener("DOMContentLoaded", function () {
        fetch("https://raw.githubusercontent.com/TestJuz/Queen-s-Garden/refs/heads/main/Modulos/Pie.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("Pie-container").innerHTML = data;
            })
            .catch(error => console.error("Error al cargar el menú:", error));
    });

    