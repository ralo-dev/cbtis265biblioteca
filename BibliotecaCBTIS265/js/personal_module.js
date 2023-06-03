const API_URL_manager = fetch("https://biblioteca-cbtis265.herokuapp.com/api/auth/usuarios");

function getManagers(done) {
    API_URL_manager
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getManagers(data => {
    data.forEach(usuario => {
        if (usuario.roles[0].name === "ROLE_LIBRARIAN") {
            const registro = document.createRange().createContextualFragment(/*html*/
                `<div class="div-table-row">
                <div class="div-table-cell">${usuario.id}</div>
                <div class="div-table-cell">${usuario.nombre}</div>
                <div class="div-table-cell">${usuario.apellidos}</div>
                <div class="div-table-cell">${usuario.username}</div>
                <div class="div-table-cell">${usuario.roles[0].name}</div>
            </div>`
            );
            const main = document.querySelector("#app");
            main.appendChild(registro);
        }
    });
})
