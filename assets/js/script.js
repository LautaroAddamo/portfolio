let menuVisible = false;
//Ocultar o mostrar menu
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //Oculta el menu al seleccionar una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Aplicar animacion a las barras de skills
function efectoHabilidades(){
var skills = document.getElementById("skills");
var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
if (distancia_skills>= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("java");
    habilidades[1].classList.add("springboot");
    habilidades[2].classList.add("javascript");
    habilidades[3].classList.add("htmlcss");
    habilidades[4].classList.add("mysql");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
}
}

//Detecta scrolling para aplicar la animacion a la barra de skills
window.onscroll = function(){
    efectoHabilidades();
}

