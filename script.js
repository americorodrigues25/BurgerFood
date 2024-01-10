// ANIMAÇÕES
AOS.init();


// LÓGICA DO CARDÁPIO
let activeMenuItem = 'burgers';

function showMenu(menuType) {
    const menuSections = ['burgers', 'bebidas', 'porcoes', 'sobremesa'];
    
    menuSections.forEach(section => {
        const sectionElement = document.getElementById(`${section}Section`);
        const menuItem = document.querySelector(`[onclick="showMenu('${section}')"]`);
        
        if (section === menuType) {
            sectionElement.style.display = 'grid';
            menuItem.classList.add('active');
        } else {
            sectionElement.style.display = 'none';
            menuItem.classList.remove('active');
        }
    });

    activeMenuItem = menuType;
}


// LÓGICA PARA MENU HAMBURGUER
let show = true;
const menuContent = document.querySelector('.content');
const menuHamburguer = menuContent.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener('click', () => {

    menuContent.classList.toggle('on', show);
    show = !show;
});