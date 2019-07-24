console.log("Hola desde JS");

//Dom
//querySelector != querySelectorAll

/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});
*/

//console.log(links);

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this);
  });

});


//Obtener los elementos de la clase close para evitar que se cierren
let links = document.querySelectorAll(".close");

links.forEach(function(link){
  link.addEventListener('click', function(ev){
    ev.preventDefault();

    let content = document.querySelector('.content');

    //Quitar clase animacion que ya tiene
    content.classList.remove("fadeIn");
    content.classList.remove("animated");
    //Agregar nueva animacion
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
      location.href = "/";
    }, 600);

    return false;
  });
});
