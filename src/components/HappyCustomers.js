import React, { useState, useEffect } from "react";

const reviews = [
  { name: "Md", item: "Grey and Black Oversized Printed Half Sleeves T Shirt", date: "2025-01-31" },
  { name: "Thunga", item: "Beige Striped Regular Fit Full Sleeves Shirt", date: "2025-01-31" },
  { name: "Arun", item: "Casual Blue Denim Jacket", date: "2025-01-28" },
  { name: "Sita", item: "Pink Floral Summer Dress", date: "2025-01-30" },
  { name: "Raj", item: "Black Leather Wallet", date: "2025-02-01" },
  { name: "Anjali", item: "Gold Plated Necklace", date: "2025-02-02" },
  { name: "Kiran", item: "Red Checkered Shirt", date: "2025-02-03" },
  { name: "Priya", item: "White Sneakers", date: "2025-02-04" },
  { name: "Vikram", item: "Classic Blue Jeans", date: "2025-02-05" },
  { name: "Neha", item: "Grey Hoodie", date: "2025-02-06" },
  { name: "Suresh", item: "Brown Leather Belt", date: "2025-02-07" },
  { name: "Divya", item: "Designer Handbag", date: "2025-02-08" },
  { name: "Rohan", item: "Sports Running Shoes", date: "2025-02-09" },
  { name: "Anand", item: "Smartwatch with Fitness Tracker", date: "2025-02-10" },
  { name: "Meena", item: "Silk Saree", date: "2025-02-11" },
  { name: "Suraj", item: "Blue Formal Blazer", date: "2025-02-12" },
  { name: "Ayesha", item: "Pink Designer Kurti", date: "2025-02-13" },
  { name: "Rahul", item: "Black Aviator Sunglasses", date: "2025-02-14" },
  { name: "Sneha", item: "Trendy Hoop Earrings", date: "2025-02-15" },
  { name: "Pankaj", item: "Winter Woolen Scarf", date: "2025-02-16" },
];

const HappyCustomers = () => {
  const [currentReviews, setCurrentReviews] = useState(reviews.slice(0, 3));
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 3) % reviews.length;
      setCurrentReviews(reviews.slice(index, index + 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-800 mx-4 md:mx-20">
      <div className="container mx-auto py-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold">Happy Customers</h1>
          <div className="border-t-2 border-red-500 w-16 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-lg font-bold">OUR CUSTOMERS</h2>
            <p className="text-sm text-gray-500">OUR INFLUENCERS</p>
            <div className="flex items-center mt-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded">4.77/5</span>
              <span className="ml-2 text-gray-500">based on 5866 reviews.</span>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-green-500"></i>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded flex items-center">
              SEE MORE <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          <div className="w-full md:w-3/4 p-4">

            <div className="flex flex-wrap justify-between mt-4">
              {currentReviews.map((customer, index) => (
                <div key={index} className="w-full md:w-1/3 p-4 text-center">
                  <p className="font-bold">{customer.name}</p>
                  <p className="text-gray-500">{customer.item}</p>
                  <p className="text-gray-500">{customer.date}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
