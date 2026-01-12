import { c as createComponent, e as createAstro, a as renderTemplate, d as addAttribute, m as maybeRenderHead, r as renderComponent, b as renderScript } from './astro/server_CnO6xEk4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BusinessStatus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BusinessStatus;
  const { id = "status-indicator" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="business-status-container inline-flex items-center"> <span', ` class="status-indicator px-3 py-1 text-sm font-bold rounded-full bg-yellow-500 text-white animate-pulse">
\u23F3 Verificando...
</span> </div> <script>
  function getCurrentBusinessStatus() {
    const businessHours = [
      { day: 0, openTime: 0, closeTime: 0, closed: true }, // Domingo
      { day: 1, openTime: 6, closeTime: 17, closed: false }, // Lunes
      { day: 2, openTime: 6, closeTime: 17, closed: false }, // Martes  
      { day: 3, openTime: 6, closeTime: 17, closed: false }, // Mi\xE9rcoles
      { day: 4, openTime: 6, closeTime: 17, closed: false }, // Jueves
      { day: 5, openTime: 6, closeTime: 17, closed: false }, // Viernes
      { day: 6, openTime: 6, closeTime: 12, closed: false }, // S\xE1bado
    ];

    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour + (currentMinute / 60);
    
    const todayHours = businessHours.find(h => h.day === currentDay);
    
    if (!todayHours || todayHours.closed) {
      return {
        isOpen: false,
        message: '\u{1F534} Cerrado'
      };
    }
    
    const isCurrentlyOpen = currentTime >= todayHours.openTime && currentTime < todayHours.closeTime;
    
    if (isCurrentlyOpen) {
      return {
        isOpen: true,
        message: '\u{1F7E2} Abierto ahora'
      };
    }
    
    return {
      isOpen: false,
      message: '\u{1F534} Cerrado'
    };
  }
  
  function updateBusinessStatus() {
    const indicators = document.querySelectorAll('.status-indicator');
    if (!indicators.length) return;
    
    const status = getCurrentBusinessStatus();
    
    indicators.forEach(function(indicator) {
      indicator.textContent = status.message;
      indicator.className = 'status-indicator px-3 py-1 text-sm font-bold rounded-full ' + (
        status.isOpen 
          ? 'bg-green-500 text-white' 
          : 'bg-red-500 text-white'
      );
    });
  }
  
  // Ejecutar cuando el DOM est\xE9 listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateBusinessStatus);
  } else {
    // DOM ya est\xE1 listo, ejecutar inmediatamente
    updateBusinessStatus();
  }
  
  // Actualizar cada minuto
  setInterval(updateBusinessStatus, 60000);
<\/script>`])), maybeRenderHead(), addAttribute(id, "id"));
}, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/components/BusinessStatus.astro", void 0);

const $$Astro = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" class="bg-gradient-to-r from-black/90 via-dark-900/90 to-black/90 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-white/5 transition-all duration-300" data-astro-cid-5blmo7yk> <div class="container mx-auto px-4" data-astro-cid-5blmo7yk> <div class="flex items-center justify-between py-4" data-astro-cid-5blmo7yk> <!-- Logo --> <div class="flex items-center" data-astro-cid-5blmo7yk> <a href="/" class="block hover:scale-105 transition-transform duration-300 group" aria-label="Ir al inicio - Taller Industrial Brenes" data-astro-cid-5blmo7yk> <img src="https://zjpgpagdnpmfgmesglvv.supabase.co/storage/v1/object/public/images/LogoTBrenesLetrasBlancas.png" alt="Taller Industrial Brenes Logo" class="h-14 w-auto cursor-pointer filter drop-shadow-lg group-hover:drop-shadow-xl transition-all" data-astro-cid-5blmo7yk> </a> </div> <!-- Navigation Links --> <div class="hidden md:flex items-center space-x-2" data-astro-cid-5blmo7yk> <a href="/"${addAttribute(`nav-link relative text-white px-5 py-2 rounded-lg transition-all duration-300 font-medium ${currentPath === "/" ? "text-accent-400 bg-white/10" : "hover:text-accent-300 hover:bg-white/5"}`, "class")} data-astro-cid-5blmo7yk>
Inicio
${currentPath === "/" && renderTemplate`<span class="nav-indicator" data-astro-cid-5blmo7yk></span>`} </a> <a href="/servicios"${addAttribute(`nav-link relative text-white px-5 py-2 rounded-lg transition-all duration-300 font-medium ${currentPath === "/servicios" ? "text-accent-400 bg-white/10" : "hover:text-accent-300 hover:bg-white/5"}`, "class")} data-astro-cid-5blmo7yk>
Servicios
${currentPath === "/servicios" && renderTemplate`<span class="nav-indicator" data-astro-cid-5blmo7yk></span>`} </a> <a href="/productos"${addAttribute(`nav-link relative text-white px-5 py-2 rounded-lg transition-all duration-300 font-medium ${currentPath === "/productos" ? "text-accent-400 bg-white/10" : "hover:text-accent-300 hover:bg-white/5"}`, "class")} data-astro-cid-5blmo7yk>
Galería
${currentPath === "/productos" && renderTemplate`<span class="nav-indicator" data-astro-cid-5blmo7yk></span>`} </a> <a href="/contacto"${addAttribute(`nav-link relative text-white px-5 py-2 rounded-lg transition-all duration-300 font-medium ${currentPath === "/contacto" ? "text-accent-400 bg-white/10" : "hover:text-accent-300 hover:bg-white/5"}`, "class")} data-astro-cid-5blmo7yk>
Contacto
${currentPath === "/contacto" && renderTemplate`<span class="nav-indicator" data-astro-cid-5blmo7yk></span>`} </a> <div class="ml-4 pl-4 border-l border-white/10" data-astro-cid-5blmo7yk> ${renderComponent($$result, "BusinessStatus", $$BusinessStatus, { "id": "status-indicator-desktop", "data-astro-cid-5blmo7yk": true })} </div> </div> <!-- Mobile Menu Button --> <div class="md:hidden" data-astro-cid-5blmo7yk> <button id="mobile-menu-button" class="text-white hover:text-accent-300 p-2" aria-label="Abrir menú" data-astro-cid-5blmo7yk> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="md:hidden hidden pb-4 border-t border-white/10 mt-2" data-astro-cid-5blmo7yk> <div class="flex flex-col space-y-1 pt-2" data-astro-cid-5blmo7yk> <a href="/"${addAttribute(`text-white px-4 py-3 rounded-lg transition-all duration-300 ${currentPath === "/" ? "bg-white/10 text-accent-400" : "hover:bg-white/5 hover:text-accent-300"}`, "class")} data-astro-cid-5blmo7yk>
Inicio
</a> <a href="/servicios"${addAttribute(`text-white px-4 py-3 rounded-lg transition-all duration-300 ${currentPath === "/servicios" ? "bg-white/10 text-accent-400" : "hover:bg-white/5 hover:text-accent-300"}`, "class")} data-astro-cid-5blmo7yk>
Servicios
</a> <a href="/productos"${addAttribute(`text-white px-4 py-3 rounded-lg transition-all duration-300 ${currentPath === "/productos" ? "bg-white/10 text-accent-400" : "hover:bg-white/5 hover:text-accent-300"}`, "class")} data-astro-cid-5blmo7yk>
Galería
</a> <a href="/contacto"${addAttribute(`text-white px-4 py-3 rounded-lg transition-all duration-300 ${currentPath === "/contacto" ? "bg-white/10 text-accent-400" : "hover:bg-white/5 hover:text-accent-300"}`, "class")} data-astro-cid-5blmo7yk>
Contacto
</a> <div class="px-4 py-3 border-t border-white/10 mt-2" data-astro-cid-5blmo7yk> ${renderComponent($$result, "BusinessStatus", $$BusinessStatus, { "id": "status-indicator-mobile", "data-astro-cid-5blmo7yk": true })} </div> </div> </div> </div> </nav>  ${renderScript($$result, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/components/Navbar.astro", void 0);

const businessHours = [
  { day: 0, openTime: 0, closeTime: 0, closed: true },
  // Domingo
  { day: 1, openTime: 6, closeTime: 17, closed: false },
  // Lunes
  { day: 2, openTime: 6, closeTime: 17, closed: false },
  // Martes  
  { day: 3, openTime: 6, closeTime: 17, closed: false },
  // Miércoles
  { day: 4, openTime: 6, closeTime: 17, closed: false },
  // Jueves
  { day: 5, openTime: 6, closeTime: 17, closed: false },
  // Viernes
  { day: 6, openTime: 6, closeTime: 12, closed: false }
  // Sábado
];
function formatTime(hour) {
  const hours = Math.floor(hour);
  const minutes = Math.round((hour - hours) * 60);
  return `${hours}:${minutes.toString().padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
}
function getFormattedSchedule() {
  const today = (/* @__PURE__ */ new Date()).getDay();
  const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return businessHours.map((schedule) => ({
    day: dayNames[schedule.day],
    hours: schedule.closed ? "Cerrado" : `${formatTime(schedule.openTime)} - ${formatTime(schedule.closeTime)}`,
    isToday: schedule.day === today
  }));
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const schedule = getFormattedSchedule();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-r from-dark-800 to-primary-800 text-white py-16"> <div class="container mx-auto px-4"> <div class="grid md:grid-cols-3 gap-8"> <!-- Información de contacto --> <div> <h3 class="text-xl font-bold mb-4 text-accent-300">Contacto</h3> <div class="space-y-3"> <div class="flex items-center space-x-3"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFW0lEQVR4nO2d229URRzHfwKiosYrKniJL774WhNR6ZlSUIFWdqa6Rn0xMQpeCP4LPvqA1GIw8uojUTDtzFKMoV5iQrRCafckBm3E0nDpOXtmTtGHQuyYWSox4dp0zv5mdueTfJNNds/Jfn/f3Tlzzp79DUAgEAgEAoFAIBAIOMRT7MB9ERPPEiq2Eip2RYx/QxgfJVSMEyYyQsVMXRcej5vn6q+hYpfZxmy7ulxZju3DG9q6+5cRKvojynsJ5UcJ47OECb0w8Vmzr4iKHWbfq8p7bsH26RxrKG8jTOwmjOcLL/g1A8kjKj4nPXwdgL4BWpX16ys3EVp5J2L89+KLfnlFjP9GqHjbvBdoFcwQEFHxfkTFJFbhLwmC8hMR49uafnjqYLwrYvwP7IKTKwYhJjtK4kVoNp7e9NXK+rjrQJHJ9Q1NA8+U+x+BZiBiA5vq00QHCkvmJTMhqLwEvkLI0BJCxYd2ppICK4RZQkXf4+U9S8EnVpUH744Y/wG/gMKWvl/dxe8CHyBl/kBExYgDRdOWvw1xZ3ngQXAZUtr/aH1ujV4sUYjMDC7qGXgMXCRJ/l6ZyPx4KnPdzEqkmqzVag+DSyRJcnua5Uewi5M2LoQxKeWd4AJa6xuTLD+AXZS00cryg8e0xr+Ekch8J3oxJNo34WPU4teUej7J1GzLBpCp2aks70Ip/snp6eWpVKewi5BiK1NnTp89e3/DA0gztQ/dvHRDSaa+bGjxEyk7sU2nrkmp5xpSfK314kSqUXTD0i0lMj9qalN4AIlSW7DNpo6qJqffLH7OL9UkttHUUSUyP2FqVFgASaZewzaZOq6pmnqlyAAOYRtMXVeW/1xM8ZV6At2c9ER5/qT1AGKA3TGADoLr0WdWi68BFscAZxwwpn1QFSAZAlhiLYAxgDXYpmLPNAbQYS2AGGAHtqHYP31kLYAqwLADhrRn+slK8UcAbo0BzjtgSHum81WA22x8+jsdMKN9lDl2LjiAGGAbtpHYU1UBttr4BvRhG4k9VRWg10YAAttI7K8GbARQdcCI9lHV+inUAokB/sQ2EnuqKsBxGwHUsI3EnqoKkNoIYAbbSOyvZkIA4H8AYQgC3CEoHIQB8SAcpqGAOw0NJ2KAfiIWLkUA4qWIcDEO0C/GhcvRgHg5eu4HmXPYZmL/dG4YYBnYwPy85oAh7ZOqAIesFH8ugPCjPMxb260FYG6xcMCQ9kzt1gLQAItigFMOmNKe6LS5mQ1sYm63c8CY9kFVgE/BNuHm3Bz35tx6COH2dH0tJVL9CEUxVVOvYhtMHVdNqZcLCyD8RSm/qhKZT2it7d0VfTmmpHwL22jqrt6AotFaL0qz/BcHzGqXlMh8pCF/UzWEP2rnl0qpdQ0p/sUQMrUX3bR0Q0mWfwFIzTpOYptPW7VZh8H0R2j5djW1fCNgkkjV18IB9IIjLcsGsYuRNlpZflBrvdSlpn2HW+aTL9VolmV3gEtMTf21olXaVqZp+hC4SGjc6gDN2ro4orzqfOvi/zCNrgkV3zXRJ/9bUtrnRqPWebWvZ+IDQsU/2AUkC2xf37Z5uLgmTEUTlSov+LqAQ0ezLGfSzvav8G0Jk/bSoFsNum3QzkRnxPiv2AUmVxIV4xEVG6CZIa8P3VxfmpDxCYeGm4l2Jt4z7w1aBbMuSzvjW1DPG6g4FlG+2bs1YgpZypCKvoiJtPDxnXIVljK82ip7PZWNhPLtERNHrExhzT4oP1zfJxUbmn61PJuQ7v57O0qVtRHj70aMf0Io/7p+lm2WrqW8dnE52wuPzQF0ZO41O802Ztu1dO892D4CgUAgEAgEAoFAAP7Hv1NE0n8SNBkfAAAAAElFTkSuQmCC" alt="Bandera de Costa Rica" class="w-5 h-5 rounded-sm"> <span>Rincón de Arias, Grecia, Costa Rica</span> </div> <div class="flex items-center space-x-3"> <img src="https://zjpgpagdnpmfgmesglvv.supabase.co/storage/v1/object/public/images/Iphone-Icono.png" alt="Icono de teléfono" class="w-5 h-5"> <a href="tel:+50689318268" class="hover:text-accent-300">+506 8931-8268</a> </div> <div class="flex items-center space-x-3"> <img src="https://zjpgpagdnpmfgmesglvv.supabase.co/storage/v1/object/public/images/gmail.png" alt="Icono de correo electrónico" class="w-5 h-5"> <a href="mailto:tallerind.brenesaso@gmail.com" class="hover:text-accent-300">
tallerind.brenesaso@gmail.com
</a> </div> </div> </div> <!-- Horario --> <div> <h3 class="text-xl font-bold mb-4 text-accent-300">Horario de Atención</h3> <div class="space-y-2"> ${schedule.map((day) => renderTemplate`<div class="flex justify-between"> <span${addAttribute(day.isToday ? "font-bold text-accent-300" : "", "class")}>${day.day}</span> <span${addAttribute(day.isToday ? "font-bold" : "", "class")}>${day.hours}</span> </div>`)} </div> </div> <!-- Enlaces rápidos --> <div> <h3 class="text-xl font-bold mb-4 text-accent-300">Enlaces Rápidos</h3> <nav class="space-y-2"> <a href="/servicios" class="block hover:text-accent-300 transition-colors">Nuestros Servicios</a> <a href="/productos" class="block hover:text-accent-300 transition-colors">Galería de Proyectos</a> <a href="/contacto" class="block hover:text-accent-300 transition-colors">Contactar</a> </nav> </div> </div> <div class="border-t border-primary-700 mt-8 pt-8 text-center"> <p class="text-sm opacity-90">
&copy; 2026 Taller Industrial Brenes y Asociados de Grecia S.A. Todos los derechos reservados.
</p> </div> </div> </footer>`;
}, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/components/Footer.astro", void 0);

export { $$Navbar as $, $$Footer as a };
