/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript, d as addAttribute } from '../chunks/astro/server_CnO6xEk4.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BRM0FneE.mjs';
import { $ as $$Navbar, a as $$Footer } from '../chunks/Footer_DOsOi4Hc.mjs';
import { i as isSupabaseConfigured, s as supabase, $ as $$ProductCard, a as $$EnhancedProductModal } from '../chunks/supabase_DpgV-Zkq.mjs';
import { a as $$Toast, $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_BbQcsOx2.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Productos = createComponent(async ($$result, $$props, $$slots) => {
  async function getProductsFromSupabase() {
    if (!isSupabaseConfigured()) {
      console.warn("Supabase no est\xE1 configurado");
      return [];
    }
    try {
      const { data, error } = await supabase.rpc("get_products_safe");
      if (error) {
        console.error(" Error al obtener productos via RPC:", error);
        return [];
      }
      return (data || []).map((item) => {
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
            parsedImages = item.images.filter(
              (img) => img && typeof img === "string"
            );
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
    } catch (error) {
      console.error("Error de conexi\xF3n:", error);
      return [];
    }
  }
  const products = await getProductsFromSupabase();
  const categories = [...new Set(products.map((product) => product.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galer\xEDa - Taller Industrial Brenes", "description": "Galer\xEDa de proyectos: portones, estructuras met\xE1licas, rejas de seguridad y m\xE1s. Fabricaci\xF3n personalizada con materiales de primera calidad.", "data-astro-cid-w4fcemaa": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-w4fcemaa": true })} ${maybeRenderHead()}<main data-astro-cid-w4fcemaa> <!-- Hero Section --> <section class="bg-gradient-to-r from-primary-800 to-dark-800 text-white py-20" data-astro-cid-w4fcemaa> <div class="container mx-auto px-4 text-center" data-astro-cid-w4fcemaa> <h1 class="text-5xl font-bold mb-6" data-astro-cid-w4fcemaa>Galería de Proyectos</h1> <p class="text-xl opacity-90 max-w-3xl mx-auto" data-astro-cid-w4fcemaa>
Proyectos fabricados con materiales de primera calidad y diseños
          personalizados
</p> </div> </section> <!-- Buscador y Filtros --> <section class="py-8 bg-gray-50" data-astro-cid-w4fcemaa> <div class="container mx-auto px-4" data-astro-cid-w4fcemaa> <!-- Filtros por categoría --> <div class="flex flex-wrap justify-center gap-3 mb-8" data-astro-cid-w4fcemaa> <button class="filter-btn px-6 py-2 rounded-full border-2 border-primary-600 text-primary-600 font-bold hover:bg-primary-600 hover:text-white transition-all duration-300 active" data-filter="todos" data-astro-cid-w4fcemaa>
Todos
</button> ${categories.map((category) => renderTemplate`<button class="filter-btn px-6 py-2 rounded-full border-2 border-primary-600 text-primary-600 font-bold hover:bg-primary-600 hover:text-white transition-all duration-300"${addAttribute(category, "data-filter")} data-astro-cid-w4fcemaa> ${category.charAt(0).toUpperCase() + category.slice(1)} </button>`)} </div> <!-- Grid de Proyectos --> <div id="products-container" class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" data-astro-cid-w4fcemaa> ${products.map((product) => renderTemplate`<div${addAttribute(product.category, "data-category")}${addAttribute(`${product.name} ${product.description}`.toLowerCase(), "data-searchable")} data-astro-cid-w4fcemaa> ${renderComponent($$result2, "ProductCard", $$ProductCard, { "name": product.name, "description": product.description, "image": product.image, "category": product.category, "images": product.images, "data-astro-cid-w4fcemaa": true })} </div>`)} </div> <div id="no-results" class="text-center py-20 hidden" data-astro-cid-w4fcemaa> <div class="text-gray-500" data-astro-cid-w4fcemaa> <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-w4fcemaa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-w4fcemaa></path> </svg> <h3 class="text-xl font-semibold mb-2" data-astro-cid-w4fcemaa>
No se encontraron proyectos
</h3> <p data-astro-cid-w4fcemaa>Intenta con otros términos de búsqueda o categorías</p> </div> </div> </div> </section> <!-- CTA --> <section class="py-20 bg-gradient-to-r from-dark-800 to-primary-800 text-white" data-astro-cid-w4fcemaa> <div class="container mx-auto px-4 text-center" data-astro-cid-w4fcemaa> <h2 class="text-4xl font-bold mb-6" data-astro-cid-w4fcemaa>¿No encuentra lo que busca?</h2> <p class="text-xl mb-8 opacity-90" data-astro-cid-w4fcemaa>
Fabricamos proyectos personalizados según sus necesidades
</p> <a href="/contacto" class="inline-flex items-center gap-3 bg-white text-dark-800 hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 border border-gray-200" data-astro-cid-w4fcemaa> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-w4fcemaa> <!-- <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>--> </svg>
Solicitar Producto Personalizado
<svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-w4fcemaa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-w4fcemaa></path> </svg> </a> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-w4fcemaa": true })} ${renderComponent($$result2, "Toast", $$Toast, { "data-astro-cid-w4fcemaa": true })} ${renderComponent($$result2, "EnhancedProductModal", $$EnhancedProductModal, { "data-astro-cid-w4fcemaa": true })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-w4fcemaa": true })} </main> ${renderScript($$result2, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/pages/productos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/pages/productos.astro", void 0);

const $$file = "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/pages/productos.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Productos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
