import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CnO6xEk4.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title, subtitle, centered = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mb-12 ${centered ? "text-center" : ""}`, "class")}> <h2 class="text-3xl md:text-4xl font-bold text-dark-800 mb-4 scroll-animate fade-up"> ${title} </h2> ${subtitle && renderTemplate`<p class="text-lg text-gray-600 max-w-3xl mx-auto scroll-animate fade-up"> ${subtitle} </p>`} </div>`;
}, "C:/Users/branb/Documents/GitHub/TallerBrenesAstro/src/components/SectionTitle.astro", void 0);

export { $$SectionTitle as $ };
