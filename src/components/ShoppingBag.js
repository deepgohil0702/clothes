import React, { useState } from 'react';
import cartData from './cartData.json';

const ShoppingBag = () => {
  const [items, setItems] = useState(cartData.items);
  const [quantity, setQuantity] = useState(cartData.items[0].quantity);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">{cartData.storeName}</div>
        <button className="text-sm text-gray-600">Login</button>
      </div>

      <div className="bg-green-100 p-2 rounded mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-green-800">{cartData.shippingMessage}</span>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="text-lg font-semibold mb-4">Shopping Cart ({items.length} Items)</div>

        {items.map((item, index) => (
          <div key={index} className="flex border-b pb-4 mb-4">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-24 h-32 object-cover mr-4"
            />
            <div className="flex-grow">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-gray-600">
                Color: {item.color} | Size: {item.size} | SKU: {item.sku}
              </div>
              <div className="font-semibold mt-2">₹{item.price.toFixed(2)}</div>

              <div className="flex items-center mt-2">
                <button 
                  onClick={decreaseQuantity} 
                  className="border p-1 rounded-l"
                >
                  -
                </button>
                <input 
                  type="text" 
                  value={quantity} 
                  readOnly 
                  className="w-12 text-center border-t border-b"
                />
                <button 
                  onClick={increaseQuantity} 
                  className="border p-1 rounded-r"
                >
                  +
                </button>
              </div>

              <div className="mt-2 flex space-x-4">
                <button className="text-sm text-red-600">REMOVE</button>
                <button className="text-sm text-gray-600">MOVE TO WISHLIST</button>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span>Total MRP</span>
            <span>₹{calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-green-600">
            <span>Delivery</span>
            <span>₹{cartData.deliveryCharge.toFixed(2)} Free Delivery</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total Amount</span>
            <span>₹{(calculateTotal() + cartData.deliveryCharge).toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          {cartData.paymentOption}
        </div>

        <button className="w-full bg-black text-white py-3 rounded mt-4">
          CHECKOUT
        </button>

        <div className="text-center mt-2 text-sm text-gray-600">
          <a href="#" className="underline">Shipping & Refund Policy</a>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;