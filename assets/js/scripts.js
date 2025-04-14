/**
 * Abre una ventana modal específica y aplica efectos visuales
 * @param {string} modalId - El ID del elemento modal que se desea mostrar
 * 
 * Esta función:
 * - Muestra la ventana modal especificada
 * - Deshabilita el scroll del fondo
 * - Aplica una animación de entrada con efecto de destello
 * - Reproduce un efecto de sonido (si está implementado)
 */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Evita scroll en el fondo
    
    // Efecto de entrada con destello
    const modal = document.getElementById(modalId);
    modal.style.animation = "modalFlash 0.5s";
    
    // Efecto de sonido gamer al abrir modal
    playGamerSound('open');
}

/**
 * Cierra una ventana modal específica
 * @param {string} modalId - El ID del elemento modal que se desea ocultar
 * 
 * Esta función:
 * - Oculta la ventana modal especificada
 * - Restaura el scroll del documento
 * - Reproduce un efecto de sonido de cierre (si está implementado)
 */
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Restaura scroll
    
    // Efecto de sonido gamer al cerrar modal
    playGamerSound('close');
}

/**
 * Maneja el evento de clic en la ventana
 * Cierra la modal si se hace clic fuera de su contenido
 * 
 * @param {Event} event - El evento de clic
 * 
 * Esta función:
 * - Verifica si el clic fue en el fondo de la modal
 * - Cierra la modal si corresponde
 * - Restaura el scroll del documento
 * - Reproduce efecto de sonido (si está implementado)
 */
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura scroll
        
        // Efecto de sonido gamer al cerrar modal
        playGamerSound('close');
    }
}

/**
 * Simula la reproducción de efectos de sonido estilo gamer
 * @param {string} type - El tipo de sonido a reproducir ('open' o 'close')
 * 
 * Esta función:
 * - Actualmente solo registra en consola (simulación)
 * - Está preparada para implementar sonidos reales
 * - Puede expandirse para incluir diferentes tipos de efectos
 */
function playGamerSound(type) {
    // Esta función simula efectos de sonido (no reproduce sonido real)
    console.log(`Gamer sound effect: ${type}`);
    // Para implementar sonidos reales, se podría usar:
    // const sound = new Audio('path/to/sound.mp3');
    // sound.play();
}

/**
 * Genera un color RGB aleatorio
 * @returns {string} Una cadena de color en formato RGB
 * 
 * Esta función:
 * - Genera valores aleatorios para R, G y B
 * - Retorna el color en formato 'rgb(r, g, b)'
 */
function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

/**
 * Genera colores RGB intensos típicos del estilo gamer
 * @returns {string} Un color RGB predefinido del estilo gamer
 * 
 * Esta función:
 * - Mantiene una paleta de colores vibrantes predefinidos
 * - Selecciona aleatoriamente uno de estos colores
 * - Es utilizada para efectos visuales en elementos interactivos
 */
function gamerRGB() {
    // Colores más vibrantes típicos de estética gamer
    const gamerColors = [
        'rgb(255, 0, 0)',    // Rojo intenso
        'rgb(0, 255, 0)',    // Verde neón
        'rgb(0, 0, 255)',    // Azul brillante
        'rgb(255, 0, 255)',  // Magenta
        'rgb(0, 255, 255)',  // Cian
        'rgb(255, 255, 0)'   // Amarillo
    ];
    return gamerColors[Math.floor(Math.random() * gamerColors.length)];
}

/**
 * Inicia un efecto de luces RGB intermitentes en elementos específicos
 * @param {Array<HTMLElement>} elements - Los elementos a los que se aplicará el efecto
 * @param {number} interval - El intervalo de cambio de color en milisegundos
 * @returns {number} El ID del intervalo para poder detenerlo si es necesario
 * 
 * Esta función:
 * - Aplica colores RGB cambiantes a los elementos
 * - Crea un efecto de iluminación con sombras
 * - Actualiza los colores periódicamente según el intervalo
 */
function startRGBEffect(elements, interval) {
    return setInterval(() => {
        elements.forEach(element => {
            if (element) {
                element.style.boxShadow = `0 0 25px ${gamerRGB()}, 0 0 40px rgba(0,0,0,0.8)`;
            }
        });
    }, interval);
}

/**
 * Inicializa los efectos visuales y la funcionalidad cuando el DOM está listo
 * Este evento:
 * - Aplica el modo oscuro gamer
 * - Configura las animaciones de las fotos de perfil
 * - Inicia efectos RGB y transiciones
 * - Configura interacciones y efectos hover
 * - Añade elementos decorativos y estilos dinámicos
 */
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar modo oscuro gamer a toda la página
    applyGamerDarkMode();
    
    // Verificar si estamos en la página del CV grupal
    const photoCircles = document.querySelectorAll('.photo-circle');
    
    if (photoCircles.length > 0) {
        // Añadir animación de entrada con rebote
        photoCircles.forEach((circle, index) => {
            circle.style.opacity = '0';
            circle.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                circle.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
                circle.style.opacity = '1';
                circle.style.transform = 'translateY(0)';
            }, 300 * index); // Retraso escalonado para cada círculo
        });
        
        // Iniciar efecto RGB en los círculos
        startRGBEffect(photoCircles, 1000);
        
        // Añadir efecto de pulso intensificado
        photoCircles.forEach(circle => {
            circle.style.animation = "enhancedPulse 2s infinite alternate";
        });
        
        // Añadir efecto de brillo al pasar el cursor
        photoCircles.forEach(circle => {
            circle.addEventListener('mouseenter', function() {
                this.style.boxShadow = `0 0 40px ${gamerRGB()}, 0 0 80px ${gamerRGB()}`;
                this.style.transform = 'scale(1.1) rotate(5deg)';
                playGamerSound('hover');
            });
            
            circle.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });
        
        // Añadir efectos al encabezado
        const header = document.querySelector('header');
        if (header) {
            // Crear efecto de borde brillante
            header.style.position = 'relative';
            header.style.overflow = 'hidden';
            header.style.backgroundColor = '#0a0a0a';
            header.style.borderBottom = '2px solid #333';
            
            // Añadir efecto de brillo al título
            const title = document.querySelector('h1');
            if (title) {
                title.style.animation = "textGlow 2s infinite alternate";
                title.style.textShadow = "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,0,255,0.8)";
                title.style.fontFamily = "'Orbitron', sans-serif";
                title.style.letterSpacing = "2px";
                title.style.color = "#fff";
            }
            
            // Crear efecto de línea de luz que recorre el borde
            const borderLight = document.createElement('div');
            borderLight.className = 'border-light';
            borderLight.style.position = 'absolute';
            borderLight.style.bottom = '0';
            borderLight.style.left = '-100%';
            borderLight.style.width = '100%';
            borderLight.style.height = '3px';
            borderLight.style.background = 'linear-gradient(90deg, transparent, #0f0, transparent)';
            borderLight.style.animation = "borderLight 3s linear infinite";
            header.appendChild(borderLight);
            
            // Añadir efecto de hexágono gamer
            addGamerHexagons(header);
        }
        
        // Añadir estilos CSS para las animaciones
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
            
            @keyframes enhancedPulse {
                0% { box-shadow: 0 0 15px rgba(0, 255, 0, 0.5); transform: scale(1); }
                50% { box-shadow: 0 0 30px rgba(0, 255, 0, 0.8), 0 0 50px rgba(0, 255, 255, 0.5); transform: scale(1.03); }
                100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.6), 0 0 40px rgba(255, 0, 255, 0.5); transform: scale(1); }
            }
            
            @keyframes textGlow {
                0% { text-shadow: 0 0 10px rgba(0,255,0,0.8), 0 0 20px rgba(0,255,0,0.5); }
                50% { text-shadow: 0 0 15px rgba(0,255,255,0.9), 0 0 30px rgba(0,255,255,0.7), 0 0 40px rgba(0,255,255,0.4); }
                100% { text-shadow: 0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,255,0.5); }
            }
            
            @keyframes borderLight {
                0% { left: -100%; }
                100% { left: 100%; }
            }
            
            @keyframes modalFlash {
                0% { opacity: 0; box-shadow: 0 0 0 rgba(0,255,0,0); }
                20% { opacity: 1; box-shadow: 0 0 50px rgba(0,255,0,0.8); }
                100% { opacity: 1; box-shadow: 0 0 0 rgba(0,255,0,0); }
            }
            
            @keyframes rotate3D {
                0% { transform: perspective(1000px) rotateY(0deg); }
                100% { transform: perspective(1000px) rotateY(360deg); }
            }
            
            @keyframes hexagonPulse {
                0% { opacity: 0.2; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(1.1); }
                100% { opacity: 0.2; transform: scale(1); }
            }
            
            .photo-circle:hover .photo-title {
                animation: colorCycle 2s linear infinite;
                background-color: rgba(0, 0, 0, 0.9);
                border-top: 1px solid #0f0;
                font-family: 'Orbitron', sans-serif;
            }
            
            @keyframes colorCycle {
                0% { color: #ff0000; }
                16% { color: #ff00ff; }
                33% { color: #0000ff; }
                50% { color: #00ffff; }
                66% { color: #00ff00; }
                82% { color: #ffff00; }
                100% { color: #ff0000; }
            }
            
            .modal-content {
                background-color: #0a0a0a !important;
                border: 1px solid #0f0 !important;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.7) !important;
            }
            
            .cv-section {
                border-bottom: 1px solid #0f0 !important;
            }
            
            .cv-section h3 {
                color: #0f0 !important;
                font-family: 'Orbitron', sans-serif !important;
            }
            
            .hexagon {
                position: absolute;
                opacity: 0.2;
                z-index: -1;
                animation: hexagonPulse 3s infinite alternate;
            }
            
            .gamer-dark-mode {
                background-color: #0a0a0a !important;
                color: #fff !important;
            }
            
            .gamer-dark-mode .container {
                background-color: #111 !important;
                border: 1px solid #333 !important;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.8) !important;
            }
            
            .gamer-dark-mode footer {
                background-color: #0a0a0a !important;
                border-top: 1px solid #0f0 !important;
            }
            
            .gamer-dark-mode h2 {
                color: #0f0 !important;
                font-family: 'Orbitron', sans-serif !important;
                text-shadow: 0 0 10px rgba(0, 255, 0, 0.5) !important;
            }
            
            .gamer-dark-mode p {
                color: #ccc !important;
            }
            
            .gamer-dark-mode .btn {
                background-color: #0f0 !important;
                color: #000 !important;
                border: none !important;
                font-family: 'Orbitron', sans-serif !important;
                text-transform: uppercase !important;
                letter-spacing: 1px !important;
                transition: all 0.3s !important;
            }
            
            .gamer-dark-mode .btn:hover {
                background-color: #00ff00 !important;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.8) !important;
                transform: scale(1.05) !important;
            }
            
            .gamer-dark-mode .close {
                color: #0f0 !important;
                text-shadow: 0 0 10px rgba(0, 255, 0, 0.8) !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    // Añadir efecto de partículas brillantes si estamos en la página del CV grupal
    if (document.querySelector('.cv-grupal')) {
        createParticles();
    }
});

// Función para aplicar modo oscuro estilo gamer
function applyGamerDarkMode() {
    document.body.classList.add('gamer-dark-mode');
    
    // Añadir fondo con patrón de circuito
    const circuitBg = document.createElement('div');
    circuitBg.className = 'circuit-background';
    circuitBg.style.position = 'fixed';
    circuitBg.style.top = '0';
    circuitBg.style.left = '0';
    circuitBg.style.width = '100%';
    circuitBg.style.height = '100%';
    circuitBg.style.backgroundImage = 'radial-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px)';
    circuitBg.style.backgroundSize = '30px 30px';
    circuitBg.style.pointerEvents = 'none';
    circuitBg.style.zIndex = '-2';
    document.body.appendChild(circuitBg);
    
    // Añadir líneas de "circuito" al fondo
    addCircuitLines();
}

// Función para añadir líneas de circuito al fondo
function addCircuitLines() {
    const circuitContainer = document.createElement('div');
    circuitContainer.className = 'circuit-lines';
    circuitContainer.style.position = 'fixed';
    circuitContainer.style.top = '0';
    circuitContainer.style.left = '0';
    circuitContainer.style.width = '100%';
    circuitContainer.style.height = '100%';
    circuitContainer.style.pointerEvents = 'none';
    circuitContainer.style.zIndex = '-1';
    document.body.appendChild(circuitContainer);
    
    // Crear líneas horizontales y verticales
    for (let i = 0; i < 10; i++) {
        // Línea horizontal
        const hLine = document.createElement('div');
        hLine.style.position = 'absolute';
        hLine.style.height = '1px';
        hLine.style.width = Math.random() * 30 + 10 + '%';
        hLine.style.top = Math.random() * 100 + '%';
        hLine.style.left = Math.random() * 70 + '%';
        hLine.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        circuitContainer.appendChild(hLine);
        
        // Línea vertical
        const vLine = document.createElement('div');
        vLine.style.position = 'absolute';
        vLine.style.width = '1px';
        vLine.style.height = Math.random() * 30 + 10 + '%';
        vLine.style.left = Math.random() * 100 + '%';
        vLine.style.top = Math.random() * 70 + '%';
        vLine.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        circuitContainer.appendChild(vLine);
    }
}

// Función para añadir hexágonos estilo gamer
function addGamerHexagons(container) {
    for (let i = 0; i < 5; i++) {
        const hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        
        // Crear SVG hexágono
        const size = Math.random() * 100 + 50;
        hexagon.innerHTML = `
            <svg width="${size}" height="${size * 0.866}" viewBox="0 0 100 86.6">
                <polygon points="0,43.3 25,0 75,0 100,43.3 75,86.6 25,86.6" 
                         fill="none" 
                         stroke="${gamerRGB()}" 
                         stroke-width="1" />
            </svg>
        `;
        
        // Posicionar aleatoriamente
        hexagon.style.top = Math.random() * 100 + '%';
        hexagon.style.left = Math.random() * 100 + '%';
        hexagon.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(hexagon);
    }
}

// Función para crear partículas brillantes en el fondo
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '-1';
    document.body.appendChild(particlesContainer);
    
    // Crear 50 partículas
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

// Función para crear una partícula individual
function createParticle(container) {
    const particle = document.createElement('div');
    
    // Estilos base de la partícula
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 5 + 2 + 'px';
    particle.style.height = particle.style.width;
    
    // Usar colores gamer para las partículas
    const particleColor = gamerRGB();
    particle.style.backgroundColor = particleColor;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    
    // Posición inicial aleatoria
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    
    // Añadir brillo
    particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${particleColor}`;
    
    // Añadir a contenedor
    container.appendChild(particle);
    
    // Animar la partícula
    animateParticle(particle);
}

// Función para animar una partícula
function animateParticle(particle) {
    // Duración aleatoria entre 10 y 30 segundos
    const duration = Math.random() * 20000 + 10000;
    
    // Posición final aleatoria
    const endX = Math.random() * 100 + 'vw';
    const endY = Math.random() * 100 + 'vh';
    
    // Configurar la animación
    particle.style.transition = `left ${duration}ms linear, top ${duration}ms linear, opacity ${duration/4}ms ease-in-out`;
    
    // Iniciar la animación después de un pequeño retraso
    setTimeout(() => {
        particle.style.left = endX;
        particle.style.top = endY;
        
        // Parpadeo aleatorio
        setInterval(() => {
            particle.style.opacity = Math.random() < 0.5 ? '0.2' : '1';
        }, Math.random() * 2000 + 1000);
        
    }, 100);
    
    // Reiniciar la partícula cuando termine la animación
    setTimeout(() => {
        particle.style.transition = 'none';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        // Reiniciar la animación
        animateParticle(particle);
    }, duration + 100);
}

// Funcionalidad para abrir y cerrar modales
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar modales cuando se hace clic fuera de ellos
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Funcionalidad para el modo oscuro
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Verificar si hay una preferencia guardada
    const darkMode = localStorage.getItem('darkMode');
    
    // Si hay una preferencia guardada, aplicarla
    if (darkMode === 'enabled') {
        enableDarkMode();
    }
    
    // Función para activar el modo oscuro
    function enableDarkMode() {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    }
    
    // Función para desactivar el modo oscuro
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
    
    // Alternar entre modo claro y oscuro al hacer clic en el botón
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});