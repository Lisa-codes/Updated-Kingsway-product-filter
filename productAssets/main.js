// Sample data for products
const products = [
    { id: 1, name: 'Earthmover', category: 'Car Service', price: 150, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Arduzza', brandImage: 'productAssets/images/Continental brand image.png', inStock: true },
    { id: 2, name: '4X4 SUV', category: 'Tyre', price: 20, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Apollo', brandImage: 'productAssets/images/Continental brand image.png', inStock: false},
    { id: 3, name: 'Light Truck', category: 'Car Service', price: 80, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/Continental brand image.png', inStock: true },
    { id: 4, name: 'Passenger Car', category: 'Tyre', price: 15, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Arduzza', brandImage: 'productAssets/images/bfgoodrich.png', inStock: true },
    { id: 5, name: 'Earthmover', category: 'Car Service', price: 100, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Apollo', brandImage: 'productAssets/images/apollo.png', inStock: true },
    { id: 6, name: 'Motorcycle', category: 'Tyre', price: 500, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: true },
    { id: 7, name: 'Industrial', category: 'Car Service', price: 60, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Arduzza', brandImage: 'productAssets/images/Continental brand image.png', inStock: false },
    { id: 8, name: 'Rally', category: 'Car Service', price: 200, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Apollo', brandImage: 'productAssets/images/Continental brand image.png', inStock: false },
    { id: 9, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/Continental brand image.png', inStock: false },
    { id: 10, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/apollo.png', inStock: false },
    { id: 11, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/apollo.png', inStock: true },
    { id: 12, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/apollo.png',  inStock: true },
    { id: 13, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/apollo.png', inStock: true },
    { id: 13, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/apollo.png',  inStock: true },
    { id: 15, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/bfgoodrich.png',  inStock: true },
    { id: 16, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/bfgoodrich.png',  inStock: true },
    { id: 17, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/bfgoodrich.png', inStock: true },
    { id: 18, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/bfgoodrich.png', inStock: true },
    { id: 19, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/bfgoodrich.png', inStock: true },
    { id: 20, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/bfgoodrich.png',  inStock: true },
    { id: 21, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/bfgoodrich.png',  inStock: true },
    { id: 22, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/bfgoodrich.png',  inStock: true },
    { id: 23, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: true },
    { id: 24, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: true },
    { id: 25, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: true },
    { id: 26, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: true },
    { id: 27, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: false },
    { id: 28, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: false },
    { id: 29, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: false },
    { id: 30, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: false },
    { id: 31, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png',  inStock: false },
    { id: 32, name: 'Motorcycle', category: 'Motorcycle', price: 10, image: 'productAssets/images/VELOCITYIMPORT_ROTA-R_3Q-18.png', brand: 'Armstrong', brandImage: 'productAssets/images/ascenso.png', inStock: false }
 ];

 const itemsPerPage = 9;
let currentPage = 1;
let filteredProducts = products;

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear previous products
    const productGrid = document.createElement('div');
    productGrid.className = 'product-grid';

    const resultsInfo = document.getElementById('resultsInfo');

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(start, end);

    const totalResults = filteredProducts.length;

    // Update results information
    const resultsText = `Showing ${start + 1}-${Math.min(end, totalResults)} of ${totalResults} results`;
    resultsInfo.textContent = resultsText;

//product
  productsToDisplay.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    const brandImagePath = product.brandImage ? product.brandImage : `path/to/brand/image/${product.brand}.png`;
    const backgroundImagePath = 'productAssets/images/bg.png';

    productItem.innerHTML = `
        <div class="card position-relative">
        <div class="card position-relative bg-image" style="background-image: url('${backgroundImagePath}'); background-position: center bottom; background-repeat: no-repeat; background-size: 100% 50%;  overflow: hidden; position:relative;">
            <div class="brand-stock-wrapper">
                <div class="brand">
                    <img src="${brandImagePath}" alt="${product.brand}">
                </div>
                <div class="stock ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
            </div>
            <div class="img-body">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text-main"> ${product.category}</p>
                <p class="card-text-main"> ${product.brand}</p>
                <p class="card-text-price"> $${product.price}</p>
            </div>
        </div>
    `;
    productGrid.appendChild(productItem);
});

productContainer.appendChild(productGrid);
displayPagination();
}



// Function to display pagination
function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clears previous pagination

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>`;
        pagination.appendChild(li);
    }
}

// Function to apply filters
function applyFilters() {
    const productType = document.getElementById('type').value.toLowerCase();
    const brand = document.getElementById('brand').value.toLowerCase();
    const category = document.getElementById('category').value.toLowerCase();

    filteredProducts = products.filter(product => {
        const matchesType = !productType || product.name.toLowerCase().includes(productType);
        const matchesBrand = !brand || product.brand.toLowerCase().includes(brand);
        const matchesCategory = !category || product.category.toLowerCase().includes(category);
        return matchesType && matchesBrand && matchesCategory;
    });

    currentPage = 1;
    displayProducts();
}

// Function to clear filters
function clearFilters() {
    document.getElementById('filterForm').reset();
    filteredProducts = [...products];
    currentPage = 1;
    displayProducts();
}

// Function for dropdown
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(`${dropdownId}-dropdown`);
    dropdown.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});


// Function to navigate to a specific page
function goToPage(page) {
    currentPage = page;
    displayProducts();
}

// Initial display
displayProducts();