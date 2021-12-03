// let contenedor = document.getElementById('container');
// let items = contenedor.getElementsByClassName('item');



// let links = contenedor.getElementsByClassName('main__indice--container--wrapper--item--content');


// let breadcrumbContainer = document.getElementById('breadcrumbContainer');
// let links = breadcrumbContainer.getElementsByClassName('.main__indice--container--wrapper--item--content');
// // let btn = document.getElementsByClassName('btn');
// for (var i = 0; i < links.length; i++) {

//   links[i].addEventListener('click', function () {

//     var current = document.getElementsByClassName('breadcrumb-active');
//     current[0].className = current[0].className.replace(' breadcrumb-active');
//     this.className += ' breadcrumb-active';

//   })

// } 




// var btnContainer = document.getElementById("breadcrumbs");
// var btns = btnContainer.getElementsByClassName("breadcrumb");


var links = document.querySelectorAll(".main__indice--container--wrapper li a");

links.forEach(a => {
  a.addEventListener("click", () => {
    resetLinks();
    a.classList.add('activine');
  })
})

function resetLinks () {
  links.forEach(a => {
    a.classList.remove('activine')
  })
}