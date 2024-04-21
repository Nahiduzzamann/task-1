import ProductCard from "../components/ProductCard";
import { products } from "../data/product";
import { useAuth } from "../provider/AuthProvider";

export default function ProductPage() {
  const { user } = useAuth();
  return (
    <div className="">
      <div className="flex justify-center ">
        {user?.username === "admin" && (
          <div className=" mb-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add Product
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
