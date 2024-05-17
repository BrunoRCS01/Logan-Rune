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



function tabClicked(){
 
  let contentShop = document.getElementById('local');
  let contentNot = document.getElementById('noticias');

  let exibirShop = document.querySelector('.content-tab-two');
  let exibirNot = document.querySelector('.content-tab');




  if(exibirNot.style.display === 'block' || exibirShop.style.display === 'none'){
        
         exibirShop.style.display = 'block';
         exibirNot.style.display = 'none';

         contentShop.removeAttribute('onclick');
         contentNot.setAttribute('onclick','tabClicked()');
    
  }else{
        exibirShop.style.display = 'none';
        exibirNot.style.display = 'block';

        contentShop.setAttribute('onclick','tabClicked()');
        contentNot.removeAttribute('onclick');

  }
  
}

function minimizarJanela() {


    let btnClassContent = document.querySelector('.triangleTabBtn');
    console.log(btnClassContent);
    let classContent = document.querySelector('.tab-contents');
    let computedStyle = window.getComputedStyle(classContent);

    if (computedStyle.display === 'block') {
        
        let alturaAtual = classContent.scrollHeight + 'px';

        classContent.style.height = alturaAtual;
        void classContent.offsetHeight;

        classContent.style.transition = 'height 0.5s ease'; 
        classContent.style.height = '0'; 
        classContent.style.overflow = 'hidden'; 
        setTimeout(() => {
            classContent.style.display = 'none'; 
            btnClassContent.classList.remove('btn');
        }, 500); 
    } else {
        classContent.style.display = 'block'; 
        void classContent.offsetHeight;
        btnClassContent.classList.add('btn');
        let novaAltura = classContent.scrollHeight + 'px';
        classContent.style.transition = 'height 1.5s ease'; 
        classContent.style.height = novaAltura; 
    }
}


    





