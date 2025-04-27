import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
  ratings: number;
}

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Perfume Set",
    price: 120,
    img: "https://images.unsplash.com/photo-1593487568720-92097fb460fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
    description: "A luxurious perfume set with floral notes.",
    ratings: 4.5,
  },
  {
    id: 2,
    title: "Cool T-Shirt",
    price: 45,
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
    description: "A fassion trendy t-shirt with stylish print.",
    ratings: 4.7,
  },
  {
    id: 3,
    title: "Sunglasses",
    price: 80,
    img: "https://images.unsplash.com/photo-1611974386945-ddbd324523a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHN1biUyMGdsYXNzfGVufDB8fDB8fHww",
    description: "Sleek sunglasses perfect for sunny days.",
    ratings: 4.2,
  },
  {
    id: 4,
    title: "Coffee Mug",
    price: 20,
    img: "https://plus.unsplash.com/premium_photo-1718401701449-74ee891283d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvZmZpZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D",
    description: "A ceramic coffee mug for your morning fix.",
    ratings: 4.8,
  },
  {
    id: 5,
    title: "Headphones",
    price: 150,
    img: "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Wireless noise-cancelling headphones.",
    ratings: 4.3,
  },
  {
    id: 6,
    title: "Smart Watch",
    price: 250,
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    description: "A smart watch with fitness tracking features.",
    ratings: 4.6,
  },
  {
    id: 7,
    title: "lakny Perfume",
    price: 90,
    img: "https://images.unsplash.com/photo-1629077007578-a36bb1056b3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
    description: "Premium lakny perfume with floral notes.",
    ratings: 4.1,
  },
  {
    id: 8,
    title: "Pumma Hoody",
    price: 600,
    img: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Wear looks good",
    ratings: 4.9,
  }
];

const FanShopPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const buyNow = (product: Product) => {
    alert(`Proceeding to checkout for ${product.title}`);
    // You could add further functionality to proceed to the checkout page
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={i} className="text-yellow-400" />
        ))}
        {hasHalfStar && <StarIcon className="text-yellow-400 opacity-50" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <StarIcon key={i + fullStars + 1} className="text-gray-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">🌟 Fan Shop</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {mockProducts.map((product) => (
          <div key={product.id} className="group relative bg-[#1f1f1f] p-4 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#292929]">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="text-white">
              <h3 className="font-semibold text-xl">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <span className="text-lg font-semibold">{`RM ${product.price}`}</span>
                </div>
                <div>{renderStars(product.ratings)}</div>
              </div>
              <div className="mt-4 flex justify-between gap-3">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm w-full"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm w-full"
                  onClick={() => buyNow(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Cart Details */}
      {cart.length > 0 && (
        <div className="mt-8 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white font-semibold text-xl">Your Cart</h3>
          <ul className="mt-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-white mb-2">
                <span>{item.title}</span>
                <span>RM {item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FanShopPage;
