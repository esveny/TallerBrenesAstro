export interface FilterableItem {
  category: string;
  [key: string]: any;
}

export class CategoryFilter {
  private items: FilterableItem[] = [];
  private filteredItems: FilterableItem[] = [];
  private activeCategory: string = 'todos';
  private searchTerm: string = '';
  
  constructor(items: FilterableItem[]) {
    this.items = items;
    this.filteredItems = [...items];
  }
  
  setCategory(category: string): FilterableItem[] {
    this.activeCategory = category;
    return this.applyFilters();
  }
  
  setSearchTerm(term: string): FilterableItem[] {
    this.searchTerm = term.toLowerCase();
    return this.applyFilters();
  }
  
  private applyFilters(): FilterableItem[] {
    let filtered = [...this.items];
    
    // Filtrar por categoría
    if (this.activeCategory !== 'todos') {
      filtered = filtered.filter(item => 
        item.category.toLowerCase() === this.activeCategory.toLowerCase()
      );
    }
    
    // Filtrar por término de búsqueda
    if (this.searchTerm) {
      filtered = filtered.filter(item => {
        const searchableFields = ['name', 'title', 'description', 'caption'];
        return searchableFields.some(field => 
          item[field]?.toLowerCase().includes(this.searchTerm)
        );
      });
    }
    
    this.filteredItems = filtered;
    return filtered;
  }
  
  getFilteredItems(): FilterableItem[] {
    return this.filteredItems;
  }
  
  getActiveCategory(): string {
    return this.activeCategory;
  }
  
  getSearchTerm(): string {
    return this.searchTerm;
  }
  
  getResultCount(): number {
    return this.filteredItems.length;
  }
}

// Función para inicializar filtros en el DOM
export function initCategoryFilters(containerId: string): void {
  if (typeof window === 'undefined') return;
  
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const filterButtons = container.querySelectorAll('[data-filter]');
  const items = container.querySelectorAll('[data-category]');
  const counter = container.querySelector('.filter-counter');
  
  let activeFilter = 'todos';
  
  const updateDisplay = (category: string) => {
    // Actualizar botones activos
    filterButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
    });
    
    // Filtrar elementos
    let visibleCount = 0;
    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category') || '';
      const shouldShow = category === 'todos' || itemCategory === category;
      
      if (shouldShow) {
        item.classList.remove('hidden', 'filtering-out');
        item.classList.add('filtering-in');
        visibleCount++;
      } else {
        item.classList.add('filtering-out');
        setTimeout(() => {
          item.classList.add('hidden');
          item.classList.remove('filtering-in', 'filtering-out');
        }, 300);
      }
    });
    
    // Actualizar contador
    if (counter) {
      counter.textContent = `${visibleCount} ${visibleCount === 1 ? 'resultado' : 'resultados'}`;
    }
  };
  
  // Agregar event listeners
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const category = btn.getAttribute('data-filter') || 'todos';
      activeFilter = category;
      updateDisplay(category);
    });
  });
  
  // Mostrar todos los elementos inicialmente
  updateDisplay('todos');
}