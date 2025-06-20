import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
  ratings: number;
  category: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Perfume Set",
    price: 120,
    img: "https://images.unsplash.com/photo-1593487568720-92097fb460fb",
    description: "A luxurious perfume set with floral notes.",
    ratings: 4.5,
    category: "Beauty"
  },
  {
    id: 2,
    title: "Cool T-Shirt",
    price: 45,
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    description: "A fashion trendy t-shirt with stylish print.",
    ratings: 4.7,
    category: "Clothing"
  },
  {
    id: 3,
    title: "Sunglasses",
    price: 80,
    img: "https://images.unsplash.com/photo-1611974386945-ddbd324523a2",
    description: "Sleek sunglasses perfect for sunny days.",
    ratings: 4.2,
    category: "Accessories"
  },
  {
    id: 4,
    title: "Coffee Mug",
    price: 20,
    img: "https://plus.unsplash.com/premium_photo-1718401701449-74ee891283d8",
    description: "A ceramic coffee mug for your morning fix.",
    ratings: 4.8,
    category: "Home"
  },
  {
    id: 5,
    title: "Headphones",
    price: 150,
    img: "https://images.unsplash.com/photo-1600086827875-a63b01f1335c",
    description: "Wireless noise-cancelling headphones.",
    ratings: 4.3,
    category: "Electronics"
  },
  {
    id: 6,
    title: "Smart Watch",
    price: 250,
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    description: "A smart watch with fitness tracking features.",
    ratings: 4.6,
    category: "Electronics"
  },
  {
    id: 7,
    title: "Lakny Perfume",
    price: 90,
    img: "https://images.unsplash.com/photo-1629077007578-a36bb1056b3e",
    description: "Premium lakny perfume with floral notes.",
    ratings: 4.1,
    category: "Beauty"
  },
  {
    id: 8,
    title: "Pumma Hoody",
    price: 600,
    img: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77",
    description: "Wear looks good",
    ratings: 4.9,
    category: "Clothing"
  }
];

const FanShopPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Beauty');

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const buyNow = (product: Product) => {
    alert(`Proceeding to checkout for ${product.title}`);
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

  const categories = Array.from(new Set(mockProducts.map(p => p.category)));

  const filteredProducts = selectedCategory
    ? mockProducts.filter(p => p.category === selectedCategory)
    : [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">🌟 Shop by Category</h2>


        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="bg-[#333] text-white py-2 px-6 rounded-full hover:bg-[#444] transition"
            >
              {cat}
            </button>
          ))}
        </div>

        <>
          <div className="flex justify-between items-center mb-6 mt-8">
            <h3 className="text-2xl text-white font-semibold">
              Category: {selectedCategory}
            </h3>
            {/* <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedCategory(null)}
            >
              Back to Categories
            </button> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="group relative bg-[#1f1f1f] p-4 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#292929]"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div className="text-white">
                  <h3 className="font-semibold text-xl">{product.title}</h3>
                  <p className="text-gray-400">{product.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-semibold">RM {product.price}</span>
                    <div>{renderStars(product.ratings)}</div>
                  </div>
                  <div className="mt-4 flex justify-between gap-3">
                    <button
                      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                      onClick={() => buyNow(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
    
    </div>
  );
};

export default FanShopPage;
