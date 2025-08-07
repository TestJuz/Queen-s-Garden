    document.addEventListener("DOMContentLoaded", function () {
        fetch("../../Modulos/Pie.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("Pie-container").innerHTML = data;
            })
            .catch(error => console.error("Error al cargar el menú:", error));
    });

    