const MHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const carouselItems = [
      {
        image: "/api/placeholder/1200/400",
        title: "New Summer Collection",
        subtitle: "Discover the latest trends"
      },
      {
        image: "/api/placeholder/1200/400",
        title: "Special Offers",
        subtitle: "Up to 50% off on selected items"
      },
      // Add more slides as needed
    ];
  
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Carousel */}
        <div className="relative h-[500px] overflow-hidden">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h1>
                  <p className="text-xl mb-8">{item.subtitle}</p>
                  <Link 
                    to="/products" 
                    className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Controls */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
  
        {/* Collections */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Shirts', 'Pants', 'Accessories', 'Footwear'].map((collection) => (
              <div key={collection} className="group relative h-[300px] overflow-hidden rounded-lg">
                <img 
                  src="/api/placeholder/300/400"
                  alt={collection}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-bold mb-4">{collection}</h3>
                    <Link 
                      to={`/products?category=${collection.toLowerCase()}`}
                      className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MHome;