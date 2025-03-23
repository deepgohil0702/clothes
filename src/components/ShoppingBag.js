import React, { useState } from 'react';
import cartData from './cartData.json';

const ShoppingBag = () => {
  const [items, setItems] = useState(cartData.items);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [address, setAddress] = useState(cartData.savedAddress || '');

  const decreaseQuantity = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);
    }
  };

  const increaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const moveToWishlist = (index) => {
    // Logic to move item to wishlist would go here
    console.log(`Moved item ${items[index].name} to wishlist`);
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - promoDiscount + cartData.deliveryCharge;
  };

  const applyPromoCode = () => {
    // Simplified promo code logic
    if (promoCode.toLowerCase() === 'discount10') {
      const discount = calculateSubtotal() * 0.1;
      setPromoDiscount(discount);
      setPromoApplied(true);
    } else {
      setPromoApplied(false);
      setPromoDiscount(0);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
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

      {/* Main content container - flex on desktop, column on mobile */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left side - Products */}
        <div className="lg:w-3/5 bg-white shadow rounded-lg p-4">
          <div className="text-lg font-semibold mb-4">Shopping Cart ({items.length} Items)</div>

          {items.length > 0 ? (
            items.map((item, index) => (
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
                      onClick={() => decreaseQuantity(index)} 
                      className="border p-1 rounded-l"
                    >
                      -
                    </button>
                    <input 
                      type="text" 
                      value={item.quantity} 
                      readOnly 
                      className="w-12 text-center border-t border-b"
                    />
                    <button 
                      onClick={() => increaseQuantity(index)} 
                      className="border p-1 rounded-r"
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-2 flex space-x-4">
                    <button 
                      onClick={() => removeItem(index)}
                      className="text-sm text-red-600"
                    >
                      REMOVE
                    </button>
                    <button 
                      onClick={() => moveToWishlist(index)}
                      className="text-sm text-gray-600"
                    >
                      MOVE TO WISHLIST
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              Your shopping cart is empty
            </div>
          )}
        </div>

        {/* Right side - Checkout section */}
        <div className="lg:w-2/5">
          {/* Order summary card */}
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="text-lg font-semibold mb-4">Order Summary</div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{calculateSubtotal().toFixed(2)}</span>
              </div>
              
              {promoApplied && (
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Discount</span>
                  <span>-₹{promoDiscount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between mb-2 text-green-600">
                <span>Delivery</span>
                <span>{cartData.deliveryCharge > 0 ? 
                  `₹${cartData.deliveryCharge.toFixed(2)}` : 
                  'Free Delivery'}
                </span>
              </div>
              
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total Amount</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            {/* Promo code section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Apply Promo Code</label>
              <div className="flex">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="border rounded-l p-2 flex-grow text-sm"
                />
                <button 
                  onClick={applyPromoCode}
                  className="bg-gray-800 text-white px-4 py-2 rounded-r text-sm"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <div className="text-green-600 text-sm mt-1">
                  Promo code applied successfully!
                </div>
              )}
            </div>
          </div>

          {/* Address card */}
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold">Delivery Address</div>
              <button className="text-sm text-blue-600">Change</button>
            </div>
            
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your delivery address"
              className="w-full border rounded p-2 text-sm min-h-14"
            />
          </div>

          {/* Payment method card */}
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="text-lg font-semibold mb-2">Payment Method</div>
            
            <div className="space-y-2">
             
              

              
              <label className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={selectedPaymentMethod === 'cod'}
                  onChange={() => setSelectedPaymentMethod('cod')}
                  className="accent-gray-800"
                />
                <span>Cash on Delivery</span>
              </label>
              
              <label className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={selectedPaymentMethod === 'wallet'}
                  onChange={() => setSelectedPaymentMethod('wallet')}
                  className="accent-gray-800"
                />
                <span>Digital</span>
              </label>
            </div>
          </div>

          {/* Checkout button for larger screens */}
          <div className="hidden lg:block">
            <button className="w-full bg-black text-white py-3 rounded font-medium">
              PROCEED TO CHECKOUT
            </button>
            
            <div className="text-center mt-2 text-sm text-gray-600">
              <a href="#" className="underline">Shipping & Refund Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom checkout button for mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Total:</span>
          <span className="font-bold">₹{calculateTotal().toFixed(2)}</span>
        </div>
        <button className="w-full bg-black text-white py-3 rounded font-medium">
          PROCEED TO CHECKOUT
        </button>
      </div>
      
      {/* Additional padding at the bottom to prevent content from being hidden behind the fixed checkout button */}
      <div className="lg:hidden h-24"></div>
    </div>
  );
};

export default ShoppingBag;