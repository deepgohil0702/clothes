import React, { useState } from 'react';
import { ChevronDown, Filter, SortAsc } from 'lucide-react';
import Footer from "./Footer";
import Topbar from "./Topbar";

// Product Data
const products = [
  {
    id: 1,
    name: "Peach Full Sleeves Regular Fit Shirt",
    price: 899,
    originalPrice: 899,
    color: "Pink",
    size: "M",
    rating: 5.0,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3",
    discount: 0,
    category: "Shirt"
  },
  {
    id: 2,
    name: "Off-White Crochet Regular Fit Full Shirt",
    price: 949,
    originalPrice: 949,
    color: "White",
    size: "L",
    rating: 4.7,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3",
    discount: 0,
    category: "Shirt"
  },
  {
    id: 3,
    name: "Olive Green Full Sleeves Shirt",
    price: 799,
    originalPrice: 999,
    color: "Green",
    size: "S",
    rating: 4.4,
    reviews: 10,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3",
    discount: 20,
    category: "Shirt"
  },
  {
    id: 4,
    name: "Olive Green Full Sleeves Shirt",
    price: 799,
    originalPrice: 999,
    color: "Green",
    size: "S",
    rating: 4.4,
    reviews: 10,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3",
    discount: 20,
    category: "Shirt"
  }
];

// Mobile Filter Modal Component
const MobileFilterModal = ({ 
  isOpen, 
  onClose, 
  colors, 
  sizes, 
  priceRanges,
  filters,
  onFilterChange 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="p-4 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>

        {/* Color Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Color</h3>
          {colors.map(color => (
            <label key={color} className="flex items-center mb-1">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.colors.includes(color)}
                onChange={() => onFilterChange({
                  ...filters,
                  colors: filters.colors.includes(color)
                    ? filters.colors.filter(c => c !== color)
                    : [...filters.colors, color]
                })}
              />
              {color}
            </label>
          ))}
        </div>

        {/* Size Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Size</h3>
          {sizes.map(size => (
            <label key={size} className="flex items-center mb-1">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.sizes.includes(size)}
                onChange={() => onFilterChange({
                  ...filters,
                  sizes: filters.sizes.includes(size)
                    ? filters.sizes.filter(s => s !== size)
                    : [...filters.sizes, size]
                })}
              />
              {size}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-semibold mb-2">Price</h3>
          {priceRanges.map(range => (
            <label key={range.label} className="flex items-center mb-1">
              <input
                type="radio"
                name="priceRange"
                className="mr-2"
                checked={filters.priceRange === range}
                onChange={() => onFilterChange({
                  ...filters,
                  priceRange: range
                })}
              />
              {range.label}
            </label>
          ))}
        </div>

        <button 
          onClick={onClose} 
          className="w-full bg-black text-white py-2 mt-4 rounded"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

// Mobile Sort Modal Component
const MobileSortModal = ({ 
  isOpen, 
  onClose, 
  sortOption,
  onSortChange 
}) => {
  if (!isOpen) return null;

  const sortOptions = [
    'Price: Low to High',
    'Price: High to Low'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sort By</h2>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>

        {sortOptions.map(option => (
          <label key={option} className="flex items-center mb-3">
            <input
              type="radio"
              name="sortOption"
              className="mr-2"
              checked={sortOption === option}
              onChange={() => {
                onSortChange(option);
                onClose();
              }}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

// Desktop Filters Component
const DesktopFilters = ({ 
  colors, 
  sizes, 
  priceRanges,
  onFilterChange 
}) => {
  const [filters, setFilters] = useState({
    colors: [],
    sizes: [],
    priceRange: null
  });

  const handleColorFilter = (color) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    
    const newFilters = { ...filters, colors: newColors };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSizeFilter = (size) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    
    const newFilters = { ...filters, sizes: newSizes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceFilter = (range) => {
    const newFilters = { ...filters, priceRange: range };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-64 p-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      {/* Color Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Color</h3>
        {colors.map(color => (
          <label key={color} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={filters.colors.includes(color)}
              onChange={() => handleColorFilter(color)}
            />
            {color}
          </label>
        ))}
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Size</h3>
        {sizes.map(size => (
          <label key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={filters.sizes.includes(size)}
              onChange={() => handleSizeFilter(size)}
            />
            {size}
          </label>
        ))}
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        {priceRanges.map(range => (
          <label key={range.label} className="flex items-center mb-1">
            <input
              type="radio"
              name="priceRange"
              className="mr-2"
              checked={filters.priceRange === range}
              onChange={() => handlePriceFilter(range)}
            />
            {range.label}
          </label>
        ))}
      </div>
    </div>
  );
};

// Product Listing Component
const ProductListing = () => {
  const colors = ['Pink', 'Purple', 'Red', 'White', 'Black', 'Maroon', 'Orange'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const priceRanges = [
    { label: '₹0 - ₹499.99', min: 0, max: 499.99 },
    { label: '₹500 - ₹999.99', min: 500, max: 999.99 },
    { label: '₹1000 - ₹1,499.99', min: 1000, max: 1499.99 }
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState('');
  const [filters, setFilters] = useState({
    colors: [],
    sizes: [],
    priceRange: null
  });

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  const handleSortChange = (option) => {
    setSortOption(option);
    let sorted = [...products];
    switch(option) {
      case 'Price: Low to High':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(sorted);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    let filtered = products.filter(product => {
      const colorMatch = newFilters.colors.length === 0 || newFilters.colors.includes(product.color);
      const sizeMatch = newFilters.sizes.length === 0 || newFilters.sizes.includes(product.size);
      const priceMatch = !newFilters.priceRange || 
        (product.price >= newFilters.priceRange.min && product.price <= newFilters.priceRange.max);
      
      return colorMatch && sizeMatch && priceMatch;
    });

    setFilteredProducts(filtered);
  };

  return (
    <>
    <Topbar/>
    <div className="container mx-4">
      
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <DesktopFilters 
          colors={colors}
          sizes={sizes}
          priceRanges={priceRanges}
          onFilterChange={handleFilterChange}
        />
        
        <div className="flex-grow p-4">
          <div className="flex justify-end mb-4">
            <select 
              value={sortOption}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border rounded p-2"
            >
              <option value="">Sort By</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="border rounded p-2 relative">
                <div className="absolute top-2 right-2">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <img src={product.image} alt={product.name} className="w-full mb-2" />
                <div className="text-sm font-medium">{product.name}</div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">₹{product.price}</span>
                  {product.discount > 0 && (
                    <span className="text-green-600 text-sm">({product.discount}% OFF)</span>
                  )}
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500 mr-1">★</span>
                  {product.rating} | {product.reviews} Reviews
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Mobile Filter & Sort Modals */}
        <MobileFilterModal 
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          colors={colors}
          sizes={sizes}
          priceRanges={priceRanges}
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        <MobileSortModal 
          isOpen={isSortModalOpen}
          onClose={() => setIsSortModalOpen(false)}
          sortOption={sortOption}
          onSortChange={handleSortChange}
        />

        {/* Mobile Products Grid */}
        <div className="grid grid-cols-2 gap-4 p-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="border rounded p-2 relative">
              <div className="absolute top-2 right-2">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <img src={product.image} alt={product.name} className="w-full mb-2" />
              <div className="text-sm font-medium">{product.name}</div>
              <div className="flex items-center">
                <span className="font-bold mr-2">₹{product.price}</span>
                {product.discount > 0 && (
                  <span className="text-green-600 text-sm">({product.discount}% OFF)</span>
                )}
              </div>
              <div className="flex items-center text-sm">
                <span className="text-yellow-500 mr-1">★</span>
                {product.rating} | {product.reviews} Reviews
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Bottom Filter and Sort Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
          <button 
            onClick={() => setIsFilterModalOpen(true)} 
            className="flex items-center"
          >
            <Filter className="mr-2" /> Filters
          </button>
          <button 
            onClick={() => setIsSortModalOpen(true)} 
            className="flex items-center"
          >
            <SortAsc className="mr-2" /> Sort
          </button>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default ProductListing;