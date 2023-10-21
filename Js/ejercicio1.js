document.addEventListener("DOMContentLoaded", function () {
    tabla = document.getElementById("tablaImagenes");

    imagenes = [
        "../recursos/imagenes/descargar (1).jfif",
        "../recursos/imagenes/descargar (1).png",
        "../recursos/imagenes/descargar.jfif",
        "../recursos/imagenes/descargar.png",
        "../recursos/imagenes/images (1).jfif",
        "../recursos/imagenes/images.jfif",
       
    ];

    for (let i = 0; i < imagenes.length; i++) {
        if (i % 3 === 0) {
            fila = tabla.insertRow();
        }
       celda = tabla.rows[tabla.rows.length - 1].insertCell();
         imagen = document.createElement("img");
        imagen.src = imagenes[i];
        imagen.alt = "Imagen " + (i + 1);
        boton1 = document.createElement("button");
        boton1.textContent = "Botón 1";
        boton1.addEventListener("click", function () {
            alert("Has hecho clic en el Botón 1");
        });
     boton2 = document.createElement("button");
        boton2.textContent = "Botón 2";
        boton2.addEventListener("click", function () {
            alert("Has hecho clic en el Botón 2");
        });
        celda.appendChild(imagen);
        celda.appendChild(document.createElement("br"));
        celda.appendChild(boton1);
        celda.appendChild(boton2);
    }
});
