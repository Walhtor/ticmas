function getUsers() {
  fetch("https://randomuser.me/api/?nat=es")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      console.log(data);
      
      const fecha = new Date(data.results[0].dob.date).toLocaleDateString('es-AR');
      const regionNames = new Intl.DisplayNames(['es'], {type: 'region'});
      
      document.getElementById("foto").src = data.results[0].picture.large;

      document.getElementById("nombre_ppal").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
      document.getElementById("nombre").innerHTML = "Nombre: " + data.results[0].name.first + " " + data.results[0].name.last;
      document.getElementById("email").innerHTML = "email: " + data.results[0].email;
      document.getElementById("telefono").innerHTML = "Teléfono: " + data.results[0].phone + " / " + data.results[0].cell;
      document.getElementById("fecha_nac").innerHTML = "Fecha de Nacimiento: " + fecha;
      document.getElementById("domicilio").innerHTML = "Domicilio: " + data.results[0].location.street.name + " " + data.results[0].location.street.number
        + ", " + data.results[0].location.city + ", " + data.results[0].location.state;
      
      document.getElementById("nacionalidad").innerHTML = "Nacionalidad: " + regionNames.of(data.results[0].nat);
      

    });
}

getUsers();
