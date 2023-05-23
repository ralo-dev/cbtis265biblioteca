/*const API_URL_VerLibros = 'https://biblioteca-cbtis265.herokuapp.com/api/libros/all';
const xhr_verlibros = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        // 0 unset, no se ha llamado el metodo open
        // 1 = OPENED, se ha llamado al metodo open
        //2 = HEADERS_RECEIVED, se esta llamando al metodo send()
        // 3
        console.log(this.response)
    }
}
xhr_verlibros.addEventListener("load", onRequestHandler);
xhr_verlibros.open("GET", '${API_URL_VerLibros}/books');
xhr_verlibros.send();*/
const url = "https://biblioteca-cbtis265.herokuapp.com/api/libros/all";
const tablaLibros = document.getElementById('table-books');
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    // Hacer algo con los datos obtenidos
    data.forEach(libro => {
      let tabla = document.createElement("div");
      tabla.className = "table-responsive";
      let fila = tabla.appendChild(document.createElement("div"));
      fila.className = "div-table";
      fila.style = "margin:0 !important;";
      let registro = fila.appendChild(document.createElement("div"));
      registro.className = "div-table-row div-table-row-list";
      let libro_isbn = registro.appendChild(document.createElement("div"));
      libro_isbn.className = "div-table-cell";
      libro_isbn.style = "width: 6%;";
      libro_isbn.appendChild(
        document.createTextNode(`${libro.isbn}`)
      );
      let libro_titulo = registro.appendChild(document.createElement("div"));
      libro_titulo.className = "div-table-cell";
      libro_titulo.style = "width: 15%;";
      libro_titulo.appendChild(
        document.createTextNode(`${libro.titulo}`)
      );
      let libro_autor = registro.appendChild(document.createElement("div"));
      libro_autor.className = "div-table-cell";
      libro_autor.style = "width: 15%;";
      libro_autor.appendChild(
        document.createTextNode(`${libro.autor}`)
      );  
      let libro_editorial = registro.appendChild(document.createElement("div"));
      libro_editorial.className = "div-table-cell";
      libro_editorial.style = "width: 15%;";
      libro_editorial.appendChild(
        document.createTextNode(`${libro.editorial}`)
      );
      let libro_edicion= registro.appendChild(document.createElement("div"));
      libro_edicion.className = "div-table-cell";
      libro_edicion.style = "width: 12%;";
      libro_edicion.appendChild(
        document.createTextNode(`${libro.edicion}`)
      );
      let libro_anioP = registro.appendChild(document.createElement("div"));
      libro_anioP.className = "div-table-cell";
      libro_anioP.style = "width: 15%;";
      libro_anioP.appendChild(
        document.createTextNode(`${libro.anioPublicacion}`)
      );
      let libro_existencia = registro.appendChild(document.createElement("div"));
      libro_existencia.className = "div-table-cell";
      libro_existencia.style = "width: 9%;";
      libro_existencia.appendChild(
        document.createTextNode(`${libro.cantidad}`)
      );
      let libro_botonActualizar = registro.appendChild(document.createElement("div"));
      libro_botonActualizar.className = "div-table-cell";
      libro_botonActualizar.style = "width: 8%;";
      let boton = document.createElement("button");
      boton.className = "btn btn-success";
      boton.onclick = "";
      boton.id ="button-update";
      let logo = document.createElement("i")
      logo.className = "zmdi zmdi-refresh"
      boton.appendChild(logo);
      libro_botonActualizar.appendChild(boton);

      tablaLibros.appendChild(tabla);
      
    });
  })