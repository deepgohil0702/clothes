import React, { useState } from 'react';
import { 
  Heart, 
  Share2, 
  Facebook, 

  Link2 
} from 'lucide-react';
import Footer from "./Footer";
import Topbar from "./Topbar";

const productData = {
  title: "Blue Checked Full Sleeves Regular Fit Shirt",
  sku: 1261121,
  price: 999,
  discountPrice: 899,
  sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
  modelInfo: "The model (Height 5'9\") is wearing a size M.",
  images: [
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3'
    
    
  ],
  specifications: [
    "Material: Cotton Blend",
    "Pattern: Checked",
    "Sleeve Length: Full Sleeves",
    "Fit: Regular Fit"
  ],
  description: "A versatile blue checked shirt perfect for casual and semi-formal occasions. Made with premium cotton blend fabric for comfort and style.",
  returnPolicy: "30-day easy return. Product must be unworn, unwashed, and with original tags.",
  reviews: {
    overall: 3.0,
    totalReviews: 1,
    breakdown: {
      5: 0,
      4: 0,
      3: 1,
      2: 0,
      1: 0
    },
    customerReviews: [
      {
        user: "Samba",
        rating: 3.0,
        date: "07 Jan, 2025",
        comment: "Good"
      }
    ]
  }
};

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [pincode, setPincode] = useState('');

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const shareOptions = [
    { 
      icon: <Facebook className="w-5 h-5 text-red-600" />, 
      name: "Facebook" 
    },
    { 
      icon: <Facebook className="w-5 h-5 text-red-600" />, 
      name: "Pinterest" 
    },
    { 
      icon: <Facebook className="w-5 h-5 text-red-600" />, 
      name: "WhatsApp" 
    },
    { 
      icon: <Link2 className="w-5 h-5 text-red-600" />, 
      name: "Copy Link" 
    }
  ];

  return (
    <>
    <Topbar/>
    <div className="container mx-auto p-4 max-w-7xl">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="w-full">
          <div className="mb-4 border rounded-lg overflow-hidden">
            <img 
              src={productData.images[selectedImage]} 
              alt={productData.title} 
              className="w-full h-auto md:h-[600px] object-cover"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {productData.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 flex-shrink-0 object-cover cursor-pointer border-2 ${
                  selectedImage === index ? 'border-red-500' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full">
          <h1 className="text-xl md:text-2xl font-bold mb-2">{productData.title}</h1>
          <p className="text-gray-500 mb-4 text-sm">SKU: {productData.sku}</p>

          <div className="flex items-center mb-4 flex-wrap">
            <span className="text-lg md:text-xl font-bold text-red-600 mr-4">₹{productData.discountPrice}</span>
            <span className="line-through text-gray-500">₹{productData.price}</span>
            <span className="ml-4 bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
              {Math.round(((productData.price - productData.discountPrice) / productData.price) * 100)}% OFF
            </span>
          </div>

          <p className="text-red-600 mb-4 text-sm">
            Get this for INR 899 | Buy 2 and get Rs 200 Off* | Code: B2G200
          </p>

          <div className="mb-4">
            <p className="font-semibold mb-2">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedSize === size 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <button 
              onClick={() => handleQuantityChange(-1)} 
              className="px-3 py-1 border rounded"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)} 
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>

          <p className="text-xs text-gray-600 mb-4">
            {productData.modelInfo}
          </p>

          <div className="flex space-x-4">
            <button className="flex-1 bg-red-500 text-white py-3 rounded hover:bg-red-600">
              Add to Cart
            </button>
            <button className="p-3 border rounded">
              <Heart className="w-6 h-6 text-red-500" />
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-center mb-2">
              <input 
                type="text" 
                placeholder="Enter Pincode" 
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="flex-1 border px-3 py-2 rounded-l"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r">
                CHECK
              </button>
            </div>
          </div>

          {/* Social Media Sharing */}
          <div className="mt-4 flex flex-wrap space-x-2 space-y-2">
            {shareOptions.map((option, index) => (
              <button 
                key={index} 
                className="flex items-center space-x-2 border px-3 py-2 rounded"
              >
                {option.icon}
                <span className="text-sm">{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="mt-8 space-y-4">
        <details className="border rounded p-4">
          <summary className="font-semibold cursor-pointer">Specifications</summary>
          <ul className="mt-2 list-disc pl-5 text-sm">
            {productData.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </details>

        <details className="border rounded p-4">
          <summary className="font-semibold cursor-pointer">Description</summary>
          <p className="mt-2 text-sm">{productData.description}</p>
        </details>

        <details className="border rounded p-4">
          <summary className="font-semibold cursor-pointer">Return & Refund Policy</summary>
          <p className="mt-2 text-sm">{productData.returnPolicy}</p>
        </details>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center bg-gray-100 p-6 rounded">
            <p className="text-4xl md:text-5xl font-bold">{productData.reviews.overall}</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`text-xl md:text-2xl ${
                    i < Math.round(productData.reviews.overall) 
                      ? 'text-red-500' 
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mt-2 text-gray-600 text-sm">
              {productData.reviews.totalReviews} Verified Buyer Review
            </p>
          </div>

          <div className="md:col-span-2">
            {productData.reviews.customerReviews.map((review, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-xl ${
                          i < Math.round(review.rating) 
                            ? 'text-red-500' 
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
                <p className="font-semibold mt-2 text-sm">{review.user}</p>
                <p className="text-sm">{review.comment}</p>
              </div>
            ))}
            <button className="w-full border py-2 rounded hover:bg-gray-100 text-sm">
              Write a Product Review
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default ProductPage;