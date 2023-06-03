const url = "https://biblioteca-cbtis265.herokuapp.com/api/prestamos/";
const tablaPrestamos = document.getElementById("table-loans");
let datosPrestamos
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    // Hacer algo con los datos obtenidos
    datosPrestamos = data.data
    console.log(datosPrestamos);
    datosPrestamos.forEach(prestamo => {
      if(prestamo.estadoPrestamo == 'ACTIVO'){
        let fila = document.createElement("div")
      fila.className = "div-table";
      fila.style = "margin:0 !important;";
      let registro = fila.appendChild(document.createElement("div"));
      registro.className = "div-table-row div-table-row-list";
  
      let libro_isbn = registro.appendChild(document.createElement("div"));
      libro_isbn.className = "div-table-cell";
      libro_isbn.style = "width: 10%;";
      libro_isbn.appendChild(
        document.createTextNode(`${prestamo.libro.isbn}`)
      );
  
      let libro_titulo = registro.appendChild(document.createElement("div"));
      libro_titulo.className = "div-table-cell";
      libro_titulo.style = "width: 22%;";
      libro_titulo.appendChild(
        document.createTextNode(`${prestamo.libro.titulo}`)
      );  
      let estudiante_nControl = registro.appendChild(document.createElement("div"));
      estudiante_nControl.className = "div-table-cell";
      estudiante_nControl.style = "width: 10%;";
      estudiante_nControl.appendChild(
        document.createTextNode(`${prestamo.estudiante.numeroControl}`)
      );
      let estudiante_nombre= registro.appendChild(document.createElement("div"));
      estudiante_nombre.className = "div-table-cell";
      estudiante_nombre.style = "width: 22%;";
      estudiante_nombre.appendChild(
        document.createTextNode(`${prestamo.estudiante.nombreEstudiante}`)
      );
      let fechaPrestamo = registro.appendChild(document.createElement("div"));
      fechaPrestamo.className = "div-table-cell";
      fechaPrestamo.style = "width: 10%;";
      fechaPrestamo.appendChild(
        document.createTextNode(`${prestamo.fechaPrestamo}`)
      );
      let fechaEntrega = registro.appendChild(document.createElement("div"));
      fechaEntrega.className = "div-table-cell";
      fechaEntrega.style = "width: 10%;";
      fechaEntrega.appendChild(
        document.createTextNode(`${prestamo.fechaEntrega}`)
      );
      let libro_botonActualizar = registro.appendChild(document.createElement("div"));
      libro_botonActualizar.className = "div-table-cell";
      libro_botonActualizar.style = "width: 8%;";
      let boton = document.createElement("button");
      boton.className = "btn btn-success";
      boton.id ="button-update";
      let logo = document.createElement("i")
      logo.className = "zmdi zmdi-refresh"
      boton.appendChild(logo);
      libro_botonActualizar.appendChild(boton);
      boton.addEventListener('click', function(){
        fetch(`https://biblioteca-cbtis265.herokuapp.com/api/prestamos/terminar/${prestamo.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          //body: JSON.stringify(data),
        })
          .then(response => {
            if (response.ok) {
              console.log("La solicitud PUT fue exitosa");
              window.alert("Se ha devuelto el libro "+prestamo.libro.titulo)
              //window.location.reload()
            } else {
              console.error(`Error en la solicitud PUT. Código de estado: ${response.status}`);
            }
          })
          .catch(error => {
            console.error("Error en la solicitud PUT:", error);
          });
      })
      tablaPrestamos.appendChild(fila);
      }
    });
  })
  .catch(function(error) {
    console.error(error);
  });
  
  