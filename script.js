/*
 * Archivo: script.js
 * Funcionalidad mínima para el sitio web de EcoSnackBot
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página de Greenbites cargada. El asistente virtual está listo.");
    
    // --------------------------------------------------------------------
    // Lógica para cargar el widget del Chatbot (Simulación)
    // --------------------------------------------------------------------

    const chatbotContainer = document.getElementById('chatbot-widget');

    // **NOTA IMPORTANTE:**
    // En un entorno real, la línea de código para cargar Botsonic (o cualquier otro chatbot)
    // se proporcionaría como un <script> o un fragmento de código JS/HTML por el proveedor.
    // Esto es un ejemplo de cómo se podría inyectar el código, asumiendo que el proveedor
    // da un script que se puede adjuntar dinámicamente.

    function loadChatbotWidget() {
        // Simulación de la inyección de script:
        // 1. Crear el elemento script
        const chatbotScript = document.createElement('script');
        // 2. Asignar la fuente real del widget (reemplazar con el enlace real de Botsonic/Proveedor)
        // Ejemplo ficticio de URL:
        // chatbotScript.src = 'https://widgets.botsonic.ai/tu-id-unico.js'; 
        
        // Mientras tanto, para la simulación, simplemente reemplazamos el placeholder
        if (chatbotContainer) {
            chatbotContainer.innerHTML = `
                <div style="height: 100%; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <p style="color: var(--color-principal); font-weight: bold;">¡El Chatbot de EcoSnackBot está activo! 🚀</p>
                    <p> (Aquí aparecería la interfaz real del widget cargado.) </p>
                </div>
            `;
            // En un entorno real, adjuntarías el script al body
            // document.body.appendChild(chatbotScript);
        }
    }

    // Retrasar la carga del widget unos segundos para mejorar la percepción de velocidad
    // o para asegurar que el resto de la página ha terminado de renderizar.
    setTimeout(loadChatbotWidget, 500);


    // --------------------------------------------------------------------
    // Funcionalidades Adicionales (Ejemplo de interacciones mínimas)
    // --------------------------------------------------------------------

    // Ejemplo: Añadir un pequeño efecto al hacer clic en el contenedor de introducción
    const introSection = document.getElementById('introduccion');
    if (introSection) {
        introSection.addEventListener('click', () => {
            introSection.style.backgroundColor = '#fff3e0'; // Color temporal para feedback
            setTimeout(() => {
                introSection.style.backgroundColor = 'white';
            }, 300);
        });
    }

});