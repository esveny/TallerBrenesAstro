export function initScrollAnimations(): void {
  if (typeof window === 'undefined') return;

  let isInitialLoad = true;
  setTimeout(() => {
    isInitialLoad = false;
  }, 100);

  const revealInstantly = (el: HTMLElement) => {
    el.style.transition = 'none';
    el.style.transitionDelay = '0s';
    el.classList.add('animate');
    setTimeout(() => {
      el.style.transition = '';
      el.style.transitionDelay = '';
    }, 50);
  };

  // Collect elements managed by stagger parents so we skip them in the solo observer
  const staggerManaged = new Set<Element>();
  document.querySelectorAll('.stagger-children, .stagger-once').forEach((parent) => {
    parent.querySelectorAll('.scroll-animate').forEach((child) => staggerManaged.add(child));
  });

  // ── Solo observer: elements NOT inside a stagger container ──
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isInitialLoad) {
            revealInstantly(entry.target as HTMLElement);
          } else {
            entry.target.classList.add('animate');
          }
        } else {
          entry.target.classList.remove('animate');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.scroll-animate').forEach((el) => {
    if (!staggerManaged.has(el)) {
      observer.observe(el);
    }
  });

  // ── Stagger observer (repeatable): parent enters/exits view → animate children ──
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const children = entry.target.querySelectorAll('.scroll-animate');
        if (entry.isIntersecting) {
          if (isInitialLoad) {
            children.forEach((child) => revealInstantly(child as HTMLElement));
          } else {
            children.forEach((child, i) => {
              const el = child as HTMLElement;
              el.style.transitionDelay = `${i * 0.15}s`;
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  el.classList.add('animate');
                });
              });
            });
          }
        } else {
          children.forEach((child) => {
            const el = child as HTMLElement;
            el.style.transitionDelay = '0s';
            el.classList.remove('animate');
          });
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.stagger-children').forEach((el) => staggerObserver.observe(el));

  // ── Stagger-once observer: animate once then stop ──
  const staggerOnceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.scroll-animate');
          if (isInitialLoad) {
            children.forEach((child) => revealInstantly(child as HTMLElement));
          } else {
            children.forEach((child, i) => {
              const el = child as HTMLElement;
              el.style.transitionDelay = `${i * 0.15}s`;
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  el.classList.add('animate');
                });
              });
            });
          }
          staggerOnceObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.stagger-once').forEach((el) => staggerOnceObserver.observe(el));
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