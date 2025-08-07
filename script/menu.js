    document.addEventListener("DOMContentLoaded", function () {
        fetch("https://raw.githubusercontent.com/TestJuz/Queen-s-Garden/refs/heads/main/Modulos/menu.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("menu-container").innerHTML = data;
            })
            .catch(error => console.error("Error al cargar el menú:", error));
    });

    