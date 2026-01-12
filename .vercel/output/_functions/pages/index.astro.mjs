/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CnO6xEk4.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BRM0FneE.mjs';
import { $ as $$Navbar, a as $$Footer } from '../chunks/Footer_DOsOi4Hc.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$SectionTitle } from '../chunks/SectionTitle_1b4R1aGT.mjs';
import { g as getCollection, $ as $$ServiceCard } from '../chunks/_astro_content_D4-ITYSQ.mjs';
import { i as isSupabaseConfigured, s as supabase, $ as $$ProductCard, a as $$EnhancedProductModal } from '../chunks/supabase_DpgV-Zkq.mjs';
import { a as $$Toast, $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_BbQcsOx2.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero relative bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center text-white overflow-hidden" data-astro-cid-bbe6dxrz> <!-- Content --> <div class="relative z-10 text-center px-4 max-w-4xl mx-auto" style="z-index: 10;" data-astro-cid-bbe6dxrz> <!-- Logo --> <div class="mb-8 scroll-animate scale-in flex justify-center" data-astro-cid-bbe6dxrz> <img src="https://zjpgpagdnpmfgmesglvv.supabase.co/storage/v1/object/public/images/LogoTBrenesLetrasBlancas.png" alt="Taller Industrial Brenes Logo" class="h-48 md:h-64 lg:h-72 w-auto mb-6 animate-fade-up" data-astro-cid-bbe6dxrz> </div> <!-- Main title --> <h1 class="text-4xl md:text-6xl font-bold mb-6 scroll-animate fade-up" data-astro-cid-bbe6dxrz>
Materializamos sus proyectos
</h1> <!-- Subtitle --> <p class="text-xl md:text-2xl mb-8 opacity-90 scroll-animate fade-up" data-astro-cid-bbe6dxrz>
Soluciones en puertas, portones, estructuras metálicas y mucho más
</p> <!-- CTA Button --> <div class="scroll-animate fade-up" data-astro-cid-bbe6dxrz> <a href="/productos" class="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 border border-primary-400/20 backdrop-blur-sm" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-bbe6dxrz></path> </svg>
Ver Galería
<svg class="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-bbe6dxrz></path> </svg> </a> </div> </div> <!-- Background image with better overlay -->  </section>`;
}, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/components/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  async function getFeaturedProjects() {
    if (!isSupabaseConfigured()) {
      console.warn("Supabase no est\xE1 configurado");
      return [];
    }
    try {
      const { data, error } = await supabase.rpc("get_products_safe");
      if (error) {
        console.error("Error al obtener proyectos destacados:", error);
        return [];
      }
      const allProducts = (data || []).map((item) => {
        let parsedImages = [];
        if (item.images) {
          if (typeof item.images === "string") {
            try {
              const parsed = JSON.parse(item.images);
              parsedImages = Array.isArray(parsed) ? parsed.filter((img) => img && typeof img === "string") : [];
            } catch (e) {
              console.warn("Error parseando images desde RPC:", e);
            }
          } else if (Array.isArray(item.images)) {
            parsedImages = item.images.filter((img) => img && typeof img === "string");
          }
        }
        const mainImage = parsedImages[0] || item.image || "";
        return {
          id: item.id?.toString(),
          name: item.name || "",
          description: item.description || "",
          category: item.category || "",
          image: mainImage,
          created_at: item.created_at,
          images: parsedImages.length > 0 ? parsedImages : mainImage ? [mainImage] : []
        };
      });
      const now = /* @__PURE__ */ new Date();
      const hourSeed = now.getFullYear() * 1e6 + (now.getMonth() + 1) * 1e4 + now.getDate() * 100 + now.getHours();
      const seededRandom = (seed) => {
        const x = Math.sin(seed++) * 1e4;
        return x - Math.floor(x);
      };
      const shuffled = [...allProducts];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(hourSeed + i) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, 3);
    } catch (error) {
      console.error("Error de conexi\xF3n:", error);
      return [];
    }
  }
  const services = await getCollection("services");
  const products = await getFeaturedProjects();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Taller Industrial Brenes - Portones, Estructuras Met\xE1licas y Soldadura", "description": "M\xE1s de 20 a\xF1os fabricando portones, estructuras met\xE1licas y servicios de soldadura en Costa Rica. Calidad garantizada y negocio 100% nacional." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} <!-- ¿Por qué elegirnos? --> <section class="py-20 bg-gray-50"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "\xBFPor qu\xE9 Elegirnos?", "subtitle": "Razones que nos convierten en la mejor opci\xF3n para sus proyectos" })} <div class="grid md:grid-cols-3 gap-8"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Negocio Nacional", "description": "Empresa 100% costarricense, comprometida con el desarrollo local y el apoyo a la econom\xEDa nacional. Conocemos las necesidades espec\xEDficas del mercado costarricense.", "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFW0lEQVR4nO2d229URRzHfwKiosYrKniJL774WhNR6ZlSUIFWdqa6Rn0xMQpeCP4LPvqA1GIw8uojUTDtzFKMoV5iQrRCafckBm3E0nDpOXtmTtGHQuyYWSox4dp0zv5mdueTfJNNds/Jfn/f3Tlzzp79DUAgEAgEAoFAIBAIOMRT7MB9ERPPEiq2Eip2RYx/QxgfJVSMEyYyQsVMXRcej5vn6q+hYpfZxmy7ulxZju3DG9q6+5cRKvojynsJ5UcJ47OECb0w8Vmzr4iKHWbfq8p7bsH26RxrKG8jTOwmjOcLL/g1A8kjKj4nPXwdgL4BWpX16ys3EVp5J2L89+KLfnlFjP9GqHjbvBdoFcwQEFHxfkTFJFbhLwmC8hMR49uafnjqYLwrYvwP7IKTKwYhJjtK4kVoNp7e9NXK+rjrQJHJ9Q1NA8+U+x+BZiBiA5vq00QHCkvmJTMhqLwEvkLI0BJCxYd2ppICK4RZQkXf4+U9S8EnVpUH744Y/wG/gMKWvl/dxe8CHyBl/kBExYgDRdOWvw1xZ3ngQXAZUtr/aH1ujV4sUYjMDC7qGXgMXCRJ/l6ZyPx4KnPdzEqkmqzVag+DSyRJcnua5Uewi5M2LoQxKeWd4AJa6xuTLD+AXZS00cryg8e0xr+Ekch8J3oxJNo34WPU4teUej7J1GzLBpCp2aks70Ip/snp6eWpVKewi5BiK1NnTp89e3/DA0gztQ/dvHRDSaa+bGjxEyk7sU2nrkmp5xpSfK314kSqUXTD0i0lMj9qalN4AIlSW7DNpo6qJqffLH7OL9UkttHUUSUyP2FqVFgASaZewzaZOq6pmnqlyAAOYRtMXVeW/1xM8ZV6At2c9ER5/qT1AGKA3TGADoLr0WdWi68BFscAZxwwpn1QFSAZAlhiLYAxgDXYpmLPNAbQYS2AGGAHtqHYP31kLYAqwLADhrRn+slK8UcAbo0BzjtgSHum81WA22x8+jsdMKN9lDl2LjiAGGAbtpHYU1UBttr4BvRhG4k9VRWg10YAAttI7K8GbARQdcCI9lHV+inUAokB/sQ2EnuqKsBxGwHUsI3EnqoKkNoIYAbbSOyvZkIA4H8AYQgC3CEoHIQB8SAcpqGAOw0NJ2KAfiIWLkUA4qWIcDEO0C/GhcvRgHg5eu4HmXPYZmL/dG4YYBnYwPy85oAh7ZOqAIesFH8ugPCjPMxb260FYG6xcMCQ9kzt1gLQAItigFMOmNKe6LS5mQ1sYm63c8CY9kFVgE/BNuHm3Bz35tx6COH2dH0tJVL9CEUxVVOvYhtMHVdNqZcLCyD8RSm/qhKZT2it7d0VfTmmpHwL22jqrt6AotFaL0qz/BcHzGqXlMh8pCF/UzWEP2rnl0qpdQ0p/sUQMrUX3bR0Q0mWfwFIzTpOYptPW7VZh8H0R2j5djW1fCNgkkjV18IB9IIjLcsGsYuRNlpZflBrvdSlpn2HW+aTL9VolmV3gEtMTf21olXaVqZp+hC4SGjc6gDN2ro4orzqfOvi/zCNrgkV3zXRJ/9bUtrnRqPWebWvZ+IDQsU/2AUkC2xf37Z5uLgmTEUTlSov+LqAQ0ezLGfSzvav8G0Jk/bSoFsNum3QzkRnxPiv2AUmVxIV4xEVG6CZIa8P3VxfmpDxCYeGm4l2Jt4z7w1aBbMuSzvjW1DPG6g4FlG+2bs1YgpZypCKvoiJtPDxnXIVljK82ip7PZWNhPLtERNHrExhzT4oP1zfJxUbmn61PJuQ7v57O0qVtRHj70aMf0Io/7p+lm2WrqW8dnE52wuPzQF0ZO41O802Ztu1dO892D4CgUAgEAgEAoFAAP7Hv1NE0n8SNBkfAAAAAElFTkSuQmCC", "delay": 0 })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Calidad Garantizada", "description": "Utilizamos materiales de primera calidad y t\xE9cnicas especializadas. Cada proyecto pasa por rigurosos controles de calidad para garantizar durabilidad y resistencia excepcionales.", "icon": "https://zjpgpagdnpmfgmesglvv.supabase.co/storage/v1/object/public/images/CalidadAzulChechAmarillo-Icono.svg", "delay": 0.2 })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "M\xE1s de 20 A\xF1os de Trayectoria", "description": "Con m\xE1s de dos d\xE9cadas en el mercado, hemos perfeccionado nuestras t\xE9cnicas y construido una s\xF3lida reputaci\xF3n. Cientos de clientes satisfechos avalan nuestro trabajo.", "icon": "https://zjpgpagdnpmfgmesglvv.supabase.co/storage/v1/object/public/images/TrofeoFondoRojo-Icono.svg", "delay": 0.4 })} </div> </div> </section> <!-- Nuestros Servicios --> <section class="py-20"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Nuestros Servicios" })} <div class="grid md:grid-cols-3 gap-8"> ${services.map((service, index) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": service.data.title, "description": service.data.description, "icon": service.data.icon || "\u{1F527}", "delay": index * 0.2 })}`)} </div> <div class="text-center mt-10"> <a href="/servicios" class="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 border border-primary-400/20"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Ver Todos los Servicios
<svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div> </div> </section> <!-- Galería Destacada --> <section class="py-20 bg-gray-50"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Galer\xEDa Destacada", "subtitle": "Algunos de nuestros proyectos m\xE1s destacados" })} <div class="grid md:grid-cols-3 gap-8"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "name": product.name, "description": product.description, "image": product.image, "category": product.category, "images": product.images })}`)} </div> <div class="text-center mt-10"> <a href="/productos" class="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 border border-primary-400/20"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg>
Ver Galería Completa
<svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div> </div> </section> <!-- Call to Action --> <section class="py-20 bg-gradient-to-r from-dark-800 to-primary-800 text-white"> <div class="container mx-auto px-4 text-center"> <div class="max-w-3xl mx-auto"> <h2 class="text-4xl font-bold mb-6 scroll-animate fade-up">
¿Listo para materializar su proyecto?
</h2> <p class="text-xl mb-8 opacity-90 scroll-animate fade-up">
Contáctanos para una cotización gratuita y sin compromiso
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-animate fade-up"> <a href="/contacto" class="inline-flex items-center gap-3 bg-white text-dark-800 hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 border border-gray-200"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path> </svg>
Solicitar Cotización
</a> <a href="/productos" class="inline-flex items-center gap-3 border-2 border-white bg-transparent text-white hover:bg-white hover:text-dark-800 font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg>
Ver Proyectos
</a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "Toast", $$Toast, {})} ${renderComponent($$result2, "EnhancedProductModal", $$EnhancedProductModal, {})} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, {})} ` })}`;
}, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/pages/index.astro", void 0);

const $$file = "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
