// PROPIEDADES MENU MOVIL

var propMenu = {

  burger_menu: document.getElementById('burger_menu'),
  slideMenu: document.getElementById('slideMenu'),
  menu_activo: false,
  elem_menu: document.querySelectorAll('#slideMenu .menu__container--slide--active--main')

}


// METODOS MENU MOVIL

var metMenu = {

  inicio: function () {

      propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

      for(var i = 0; i < propMenu.elem_menu.length; i++) {

          propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);

      }

  },

  toggleMenu: function () {

      if (propMenu.menu_activo == false) {

          propMenu.menu_activo = true;
          propMenu.slideMenu.className = propMenu.slideMenu.className + ' menu__container--slide--active';

      } else {

          propMenu.menu_activo = false;
          propMenu.slideMenu.className = propMenu.slideMenu.className.replace('menu__container--slide--active', '');

      }

  },

  ocultarMenu: function () {

      propMenu.menu_activo = false;
      propMenu.slideMenu.className = propMenu.slideMenu.className.replace('menu__container--slide--active', '');

  }

}

metMenu.inicio();