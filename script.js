function abrirSubMenu() {

    let subMenu = document.getElementById('subMenu');
    let subMenuClick = document.getElementById('imgSubMenu');

    if (subMenu.style.display === 'block') {

        subMenu.style.display = 'none';

        subMenuClick.classList.remove('imgSubMenu-click');
        subMenuClick.classList.add('imgSubMenu');
        
    } else {

        subMenu.style.display = 'block';

        subMenuClick.classList.remove('imgSubMenu');
        subMenuClick.classList.add('imgSubMenu-click');
    };
};


