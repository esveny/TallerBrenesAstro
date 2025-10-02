export function initScrollAnimations(): void {
  if (typeof window === 'undefined') return;

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observar todos los elementos con scroll-animate
  const elementsToAnimate = document.querySelectorAll('.scroll-animate');
  elementsToAnimate.forEach((el) => observer.observe(el));

  // Agregar delays escalonados a grupos de elementos
  addStaggeredDelays();
}

function addStaggeredDelays(): void {
  const cardGroups = document.querySelectorAll('.cards .card, .services-grid .service-item');
  const galleryItems = document.querySelectorAll('.gallery-grid .project-card');
  
  // Cards de servicios con delay escalonado
  cardGroups.forEach((card, index) => {
    (card as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
  });
  
  // Elementos de galería con delay escalonado
  galleryItems.forEach((item, index) => {
    (item as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
  });
}

// Función para inicializar lazy loading de imágenes
export function initLazyLoading(): void {
  if (typeof window === 'undefined') return;
  
  if ('loading' in HTMLImageElement.prototype) {
    // Soporte nativo de lazy loading
    const images = document.querySelectorAll('img[data-lazy]');
    images.forEach(img => {
      (img as HTMLImageElement).src = (img as HTMLElement).dataset.lazy || '';
      img.removeAttribute('data-lazy');
    });
  } else {
    // Fallback con Intersection Observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.lazy || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-lazy]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}