const url = "https://biblioteca-cbtis265.herokuapp.com/api/reservas/";
var tablaAgenda = document.getElementById('tabla');
fetch(url)
  .then(response => response.json())
  .then(data => {
    var cuerpoTabla = document.getElementById('body-tabla')
    data.forEach(registro => {
      let fila = document.createElement("tr")
      let profesor = fila.appendChild(document.createElement("td"))
      profesor.appendChild(document.createTextNode(`${registro.nombreProfesor}`))

      let clase = fila.appendChild(document.createElement("td"))
      clase.appendChild(document.createTextNode(`${registro.materia}`))

      let grupo = fila.appendChild(document.createElement("td"))
      grupo.appendChild(document.createTextNode(`${registro.grupo}`))

      let fechaR = fila.appendChild(document.createElement("td"))
      fechaR.appendChild(document.createTextNode(`${registro.fechaReserva}`))

      let horaI = fila.appendChild(document.createElement("td"))
      horaI.appendChild(document.createTextNode(`${registro.horaInicio}`))

      let horaF = fila.appendChild(document.createElement("td"))
      horaF.appendChild(document.createTextNode(`${registro.horaFin}`))
      let div_boton = fila.appendChild(document.createElement("td"))
      let boton = document.createElement("button")
      boton.className = "btn btn-danger"
      boton.addEventListener("click", function () {
        fetch(`https://biblioteca-cbtis265.herokuapp.com/api/reservas/${registro.id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        })
          .then(function (response) {
            if (response.status == 204) {
              window.alert("Se ha eliminado la reservación")
              window.location.reload(); // Recarga la página si la respuesta es exitosa
            } else {
              throw new Error('Error en la respuesta de la solicitud');
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      let icono_boton = document.createElement("i")
      icono_boton.className = "zmdi zmdi-delete"
      boton.appendChild(icono_boton)
      div_boton.appendChild(boton)
      cuerpoTabla.appendChild(fila)
    });
    $(document).ready(function () {
      let dtable = $(tablaAgenda).DataTable({
        language: {
          url: "assets/utils/es-ES.json",
        },
        responsive: true,
        autoWidth: false,
        dom: "Blfrtip",
        pageLength: 10,
        lengthMenu: [
          [5, 10, 15, 20, 50],
          [
            "5",
            "10",
            "15",
            "20",
            "50",
          ],
        ],
      });
    })
  })