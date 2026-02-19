/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  /*==================== sticky navbar ====================*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  // distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .timeline, .timeline-item, .contact form, .certificaciones-box, .portfolio-swiper, .logros-swiper, .Experiencia-box, .particulas', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  strings: ['Analista en Informática', 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});



/*==================== Modal ====================*/

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar elementos
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.querySelector(".close");

  // Inicialmente, ocultar el modal
  modal.style.display = "none";

  // Abrir el modal al hacer clic en el botón
  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    modal.style.display = "flex"; // Mostrar el modal
  });

  // Cerrar el modal al hacer clic en el botón de cierre
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Ocultar el modal
  });

  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"; // Ocultar el modal
    }
  });
});


/*==================== Email ====================*/

// Initialize EmailJS
// emailjs.init('G_yripSlALquN7bi5'); // Reemplaza 'YOUR_PUBLIC_KEY' con tu clave pública de EmailJS

// // Add event listener to the form
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita el envío del formulario

//     // Recoge los datos del formulario
//     const formData = {
//         from_name: document.getElementById('fullName').value, // Nombre del remitente
//         from_email: document.getElementById('email').value, // Email del remitente
//         message: document.getElementById('message').value, // Mensaje
//     };

//     // Send the email
//     emailjs.send('service_u8b1m3r', 'template_1kvo1io', formData)
//         .then(response => {
//             // Alerta de éxito con SweetAlert
//             Swal.fire({
//                 icon: 'success',
//                 title: '¡Mensaje enviado!',
//                 text: 'Tu mensaje se ha enviado correctamente.',
//                 confirmButtonText: 'Aceptar'
//             });
//         })
//         .catch(error => {
//             // Alerta de error con SweetAlert
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'No se pudo enviar el mensaje. Por favor, intenta de nuevo.',
//                 confirmButtonText: 'Aceptar'
//             });
//             console.error(error);
//         });
// });





/*==================== Particulas ====================*/

// Initialize particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function () {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);



