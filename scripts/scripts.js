// Seleccionamos los elementos del menú
const menuToggle1 = document.getElementById("menu-toggle-1");
const menuToggle2 = document.getElementById("menu-toggle-2");
const menu1 = document.getElementById("navbar-menu-1");
const menu2 = document.getElementById("navbar-menu-2");

// Función para cerrar todos los menús
function closeMenus() {
    menu1.classList.add("hidden");
    menu1.classList.remove("flex");
    menu2.classList.add("hidden");
    menu2.classList.remove("flex");
}

// Alternar el menú principal en móviles
menuToggle1.addEventListener("click", function () {
    if (menu1.classList.contains("hidden")) {
        closeMenus(); // Cierra otros menús antes de abrir este
        menu1.classList.remove("hidden");
        menu1.classList.add("flex");
    } else {
        menu1.classList.add("hidden");
        menu1.classList.remove("flex");
    }
});

// Alternar el menú secundario en móviles
menuToggle2.addEventListener("click", function () {
    if (menu2.classList.contains("hidden")) {
        closeMenus(); // Cierra otros menús antes de abrir este
        menu2.classList.remove("hidden");
        menu2.classList.add("flex");
    } else {
        menu2.classList.add("hidden");
        menu2.classList.remove("flex");
    }
});


const palabras = ["Eficiencia", "Innovación", "Calidad", "Compromiso"];
let index = 0;
const texto = document.getElementById("changing-text");

function cambiarTexto() {
    // Animación de opacidad
    texto.style.opacity = 0;
    
    setTimeout(() => {
        // Cambia la palabra
        index = (index + 1) % palabras.length;
        texto.textContent = palabras[index];
        texto.style.opacity = 1;
    }, 500); // Tiempo de espera para cambiar la palabra
}

setInterval(cambiarTexto, 2000); // Cambia cada 3 segundos


function startCounter() {
    const counters = document.querySelectorAll('.number');
    const speed = 50; // Velocidad del conteo

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-value');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target.toLocaleString("es-ES"); // Formato de número con comas
            }
        };

        updateCount();
    });
}

// Detecta cuando la sección es visible en pantalla
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
            observer.disconnect(); // Detiene la animación una vez que ha iniciado
        }
    });
});

observer.observe(document.querySelector("#indicators-section"));


window.addEventListener("scroll", function() {
    let navbar = document.getElementById("secondary-navbar");
    let hero = document.getElementById("hero-section");
    let heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY > heroBottom - 100) {
        navbar.classList.remove("text-white");
        navbar.classList.add("text-black", "bg-gray-900/50", "shadow-lg");
    } else {
        navbar.classList.remove("text-black", "bg-gray-900/50", "shadow-lg");
        navbar.classList.add("text-white");
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
