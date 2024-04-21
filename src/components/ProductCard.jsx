import { useAuth } from "../provider/AuthProvider";

const ProductCard = ({ product }) => {
  const { user } = useAuth();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-bl-lg">
          {product?.price} ৳
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product?.name}</h2>
        <p className="text-gray-600 mt-2">{product?.description}</p>

        {user?.username === "admin" && (
          <div className="flex justify-between gap-1 mt-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 md:px-4 rounded w-full">
              Update
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-2 md:px-4 rounded w-full">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
