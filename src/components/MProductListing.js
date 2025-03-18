import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';

const MProductListing = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    color: '',
    size: '',
  });
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { label: 'Under ₹500', value: '0-500' },
    { label: '₹500 - ₹1000', value: '500-1000' },
    { label: '₹1000 - ₹1500', value: '1000-1500' },
    { label: 'Above ₹1500', value: '1500+' },
  ];

  const colors = ['Blue', 'Grey', 'Black', 'White', 'Red'];
  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  const categories = ['Shirts', 'Pants', 'Accessories'];

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const applyFilters = () => {
    let result = [...products];

    // Apply category filter
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }

    // Apply price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        }
        return product.price >= min;
      });
    }

    // Apply color filter
    if (filters.color) {
      result = result.filter(product => product.color === filters.color);
    }

    // Apply size filter
    if (filters.size) {
      result = result.filter(product => product.sizes.includes(filters.size));
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        result.sort((a, b) => {
          const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
          const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
          return discountB - discountA;
        });
        break;
    }

    setFilteredProducts(result);
  };

  const FilterSection = ({ title, options, value, onChange }) => (
    <div className="mb-6">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name={title.toLowerCase()}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="text-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`w-full md:w-64 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setFilters({
                  category: '',
                  priceRange: '',
                  color: '',
                  size: '',
                })}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear All
              </button>
            </div>

            <FilterSection
              title="Category"
              options={categories}
              value={filters.category}
              onChange={(value) => setFilters({ ...filters, category: value })}
            />

            <FilterSection
              title="Price Range"
              options={priceRanges.map(range => range.label)}
              value={filters.priceRange}
              onChange={(value) => setFilters({ ...filters, priceRange: value })}
            />

            <FilterSection
              title="Color"
              options={colors}
              value={filters.color}
              onChange={(value) => setFilters({ ...filters, color: value })}
            />

            <FilterSection
              title="Size"
              options={sizes}
              value={filters.size}
              onChange={(value) => setFilters({ ...filters, size: value })}
            />
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative aspect-w-3 aspect-h-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">₹{product.price}</span>
                      <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                      <span className="text-green-600 text-sm">{product.discount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MProductListing;