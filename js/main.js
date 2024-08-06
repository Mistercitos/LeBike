document.addEventListener('DOMContentLoaded', () => {
    const motorcyclesList = document.getElementById('motorcyclesList');
    const cartCount = document.getElementById('cart-count');

    let motorcycles = [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para cargar datos del JSON
    const loadMotorcycles = async () => {
        try {
            const response = await fetch('../json/motos.json');
            motorcycles = await response.json();
            populateFilters(motorcycles); // Llenar filtros con nuevos datos
            displayMotorcycles(motorcycles); // Mostrar nuevos datos
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    };

    // Actualizar la cuenta del carrito
    const updateCartCount = () => {
        cartCount.textContent = cart.length;
    };

    // Llenar los filtros con los datos del JSON
    const populateFilters = (motorcycles) => {
        const brandFilter = $('#brandFilter');
        const countryFilter = $('#countryFilter');
        const typeFilter = $('#typeFilter');

        // Limpiar las opciones previas
        brandFilter.empty();
        countryFilter.empty();
        typeFilter.empty();

        const brands = new Set();
        const countries = new Set();
        const types = new Set();

        motorcycles.forEach(brandData => {
            brands.add(brandData.brand);
            countries.add(brandData.country);
            brandData.models.forEach(model => {
                types.add(model.type);
            });
        });

        // Llenar marcas
        brands.forEach(brand => {
            brandFilter.append(new Option(brand, brand));
        });

        // Llenar países
        countries.forEach(country => {
            countryFilter.append(new Option(country, country));
        });

        // Llenar tipos
        types.forEach(type => {
            typeFilter.append(new Option(type, type));
        });

        // Refrescar Select2
        brandFilter.trigger('change');
        countryFilter.trigger('change');
        typeFilter.trigger('change');
    };

    // Mostrar las motos en la página
    const displayMotorcycles = (motorcycles) => {
        motorcyclesList.innerHTML = '';

        motorcycles.forEach((brandData) => {
            // Filtrar modelos de la marca según los filtros activos
            const filteredModels = brandData.models.filter(model => {
                const brandFilter = Array.from(document.getElementById('brandFilter').selectedOptions).map(option => option.value);
                const countryFilter = Array.from(document.getElementById('countryFilter').selectedOptions).map(option => option.value);
                const typeFilter = Array.from(document.getElementById('typeFilter').selectedOptions).map(option => option.value);
                const yearRange = parseInt(document.getElementById('yearRange').value);
                const cylinderRange = parseInt(document.getElementById('cylinderRange').value);
                const priceRange = parseInt(document.getElementById('priceRange').value);

                return (!brandFilter.length || brandFilter.includes(brandData.brand)) &&
                    (!countryFilter.length || countryFilter.includes(brandData.country)) &&
                    (!typeFilter.length || typeFilter.includes(model.type)) &&
                    model.year <= yearRange &&
                    model.cylinder <= cylinderRange &&
                    model.price <= priceRange;
            });

            // Solo mostrar la marca si hay modelos que mostrar
            if (filteredModels.length > 0) {
                const brandTitle = document.createElement('h3');
                brandTitle.classList.add('text-light');
                brandTitle.textContent = `${brandData.brand} (${brandData.country})`;
                motorcyclesList.appendChild(brandTitle);

                const brandModels = document.createElement('div');
                brandModels.classList.add('row', 'gy-4');
                motorcyclesList.appendChild(brandModels);

                filteredModels.forEach((model) => {
                    const card = document.createElement('div');
                    card.classList.add('col-md-4');
                    card.innerHTML =
                        `<div class="card h-100">
                            <img src="${model.image}" class="card-img-top" alt="${model.name}">
                            <div class="card-body">
                                <h5 class="card-title">${model.name}</h5>
                                <p class="card-text">Año: ${model.year}</p>
                                <p class="card-text">Kilometraje: ${model.mileage} km</p>
                                <p class="card-text">Cilindrada: ${model.cylinder} cc</p>
                                <p class="card-text">Precio: USD ${model.price}</p>
                                <button class="btn btn-primary add-to-cart">Agregar al Carrito</button>
                            </div>
                        </div>`;
                    brandModels.appendChild(card);

                    card.querySelector('.add-to-cart').addEventListener('click', () => {
                        addToCart(model);
                        toastr.success(`${model.name} agregado al carrito`);
                    });
                });
            }
        });
    };

    // Función para añadir al carrito
    const addToCart = (model) => {
        const existingModel = cart.find(item => item.name === model.name);
        if (existingModel) {
            existingModel.quantity += 1;
        } else {
            cart.push({ ...model, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };

    // Función para filtrar las motos
    const filterMotorcycles = () => {
        displayMotorcycles(motorcycles); // Actualizar la vista con los filtros aplicados
    };

    // Limpiar los filtros
    const clearFilters = () => {
        $('#brandFilter').val(null).trigger('change'); // Limpiar Select2
        $('#countryFilter').val(null).trigger('change'); // Limpiar Select2
        $('#typeFilter').val(null).trigger('change');  // Limpiar Select2
        document.getElementById('yearRange').value = 2023; // Mostrar todos los años
        document.getElementById('cylinderRange').value = 3000; // Mostrar toda la cilindrada
        document.getElementById('priceRange').value = 25000;  // Mostrar todos los precios

        displayMotorcycles(motorcycles); // Restablecer la vista a su estado inicial
    };

    // Eventos para los botones de filtro
    document.getElementById('filterBtn').addEventListener('click', filterMotorcycles);
    document.getElementById('clearFilterBtn').addEventListener('click', clearFilters);

    // Cargar los datos iniciales
    loadMotorcycles();
    updateCartCount();

    // Inicializar Select2 después de cargar los datos
    $(document).ready(function () {
        $('#brandFilter').select2({
            placeholder: 'Buscar marca',
            allowClear: true,
            width: '100%'
        });

        $('#countryFilter').select2({
            placeholder: 'Buscar país',
            allowClear: true,
            width: '100%'
        });

        $('#typeFilter').select2({
            placeholder: 'Buscar tipo',
            allowClear: true,
            width: '100%'
        });
    });
});

// Boton para volver arriba
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
