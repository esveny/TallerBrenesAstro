/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CnO6xEk4.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BRM0FneE.mjs';
import { $ as $$Navbar, a as $$Footer } from '../chunks/Footer_DOsOi4Hc.mjs';
import { g as getCollection, $ as $$ServiceCard } from '../chunks/_astro_content_D4-ITYSQ.mjs';
import { a as $$Toast, $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_BbQcsOx2.mjs';
export { renderers } from '../renderers.mjs';

const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const services = await getCollection("services");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios - Taller Industrial Brenes", "description": "Servicios especializados en soldadura, portones met\xE1licos, estructuras y reparaciones. M\xE1s de 20 a\xF1os de experiencia en Costa Rica." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="bg-gradient-to-r from-primary-800 to-dark-800 text-white py-20"> <div class="container mx-auto px-4 text-center"> <h1 class="text-5xl font-bold mb-6">Nuestros Servicios</h1> <p class="text-xl opacity-90 max-w-3xl mx-auto">
Soluciones integrales en metalurgia con más de 20 años de experiencia
</p> </div> </section> <!-- Grid de Servicios --> <section class="py-20 bg-gray-50"> <div class="container mx-auto px-4"> <div id="services-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service, index) => renderTemplate`<div${addAttribute(service.data.category, "data-category")}> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": service.data.title, "description": service.data.description, "icon": service.data.icon || "\u{1F527}", "delay": index * 0.1 })} </div>`)} </div> </div> </section> <!-- CTA --> <section class="py-20 bg-gradient-to-r from-dark-800 to-primary-800 text-white"> <div class="container mx-auto px-4 text-center"> <h2 class="text-4xl font-bold mb-6">
¿Necesita alguno de nuestros servicios?
</h2> <p class="text-xl mb-8 opacity-90">
Contáctanos para una evaluación gratuita
</p> <a href="/contacto" class="inline-flex items-center gap-3 bg-white text-dark-800 hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 border border-gray-200"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path> </svg>
Solicitar Cotización
<svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "Toast", $$Toast, {})} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, {})} ` })}`;
}, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
