// Funcionalidad para el formulario de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    
    // Intercambio de origen y destino
    const swapBtn = document.querySelector('.swap-btn');
    const originInput = document.querySelector('.field-group .field:first-child input');
    const destinationInput = document.querySelector('.field-group .field:last-child input');
    
    if (swapBtn && originInput && destinationInput) {
        swapBtn.addEventListener('click', function() {
            const tempValue = originInput.value;
            originInput.value = destinationInput.value;
            destinationInput.value = tempValue;
        });
    }
    
    // Tabs de tipo de vuelo
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Navegación principal
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Botón de búsqueda
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const destination = destinationInput.value;
            if (!destination.trim()) {
                alert('Por favor, ingresa un destino');
                return;
            }
            
            // Simular búsqueda
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Buscando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-search"></i> Buscar';
                this.disabled = false;
                alert(`Buscando vuelos a ${destination}...`);
            }, 2000);
        });
    }
    
    // Efectos de hover en las tarjetas de destino
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Efectos de hover en las ofertas especiales
    const offerCards = document.querySelectorAll('.offer-card');
    offerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Botones de las ofertas
    const offerBtns = document.querySelectorAll('.offer-btn, .destinations-btn, .search-trip-btn');
    offerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.offer-card');
            const title = card.querySelector('h3').textContent;
            alert(`Redirigiendo a ${title}...`);
        });
    });
    
    // Botones de servicios adicionales
    const serviceBtns = document.querySelectorAll('.service-btn');
    serviceBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.service-card');
            const title = card.querySelector('h3').textContent;
            alert(`Abriendo ${title}...`);
        });
    });
    
    // Botones de vuelos en las tarjetas de destino
    const roundTripBtns = document.querySelectorAll('.round-trip-btn');
    roundTripBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.destination-card');
            const destination = card.querySelector('h3').textContent;
            alert(`Buscando ${destination}...`);
        });
    });
    
    // Efecto de scroll suave para enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animación de entrada para las tarjetas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animación a las tarjetas
    const animatedElements = document.querySelectorAll('.destination-card, .offer-card, .service-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Funcionalidad del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('mobile-open');
        });
    }
    
    // Validación del formulario
    const form = document.querySelector('.search-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const destination = destinationInput.value.trim();
            const departureDate = document.querySelector('.date-field:first-child input').value;
            const returnDate = document.querySelector('.date-field:last-child input').value;
            
            if (!destination) {
                alert('Por favor, ingresa un destino');
                destinationInput.focus();
                return;
            }
            
            if (!departureDate) {
                alert('Por favor, selecciona una fecha de ida');
                return;
            }
            
            // Simular búsqueda exitosa
            showSearchResults(destination, departureDate, returnDate);
        });
    }
    
    // Función para mostrar resultados de búsqueda
    function showSearchResults(destination, departureDate, returnDate) {
        const resultsHtml = `
            <div class="search-results" style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <h3>Resultados de búsqueda para ${destination}</h3>
                <p>Fecha de ida: ${departureDate}</p>
                <p>Fecha de vuelta: ${returnDate}</p>
                <p>Se encontraron 15 vuelos disponibles con VivaAir</p>
            </div>
        `;
        
        form.insertAdjacentHTML('afterend', resultsHtml);
        
        // Scroll a los resultados
        setTimeout(() => {
            document.querySelector('.search-results').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }
    
    // Efecto de typing en el placeholder del destino
    const destinationPlaceholder = destinationInput.getAttribute('placeholder');
    const typingTexts = [
        'Ingresa hacia donde quieres viajar',
        'Medellín, Antioquia',
        'Cartagena, Bolívar',
        'Cali, Valle del Cauca',
        'Santa Marta, Magdalena',
        'Barranquilla, Atlántico'
    ];
    
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    function typeEffect() {
        const fullText = typingTexts[currentIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }
        
        destinationInput.setAttribute('placeholder', currentText);
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentText === fullText) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % typingTexts.length;
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Iniciar efecto de typing solo si el campo está vacío
    if (destinationInput.value === '') {
        typeEffect();
    }
    
    // Prevenir que el efecto de typing interfiera cuando el usuario escriba
    destinationInput.addEventListener('focus', function() {
        this.setAttribute('placeholder', destinationPlaceholder);
    });
    
    destinationInput.addEventListener('blur', function() {
        if (this.value === '') {
            typeEffect();
        }
    });
});

// Funciones adicionales para interactividad
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Agregar estilos CSS para las animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .mobile-open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        z-index: 100;
    }
    
    @media (max-width: 768px) {
        .main-nav .container {
            display: none;
        }
        
        .main-nav .container.mobile-open {
            display: flex !important;
        }
    }
`;
document.head.appendChild(style);
