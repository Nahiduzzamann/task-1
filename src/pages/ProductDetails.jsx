import { useParams } from "react-router-dom";
import { products } from "../data/product";

export default function ProductDetails() {
  const { id } = useParams();

  // find out specific product by product ID 
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-medium">{product?.name}</h1>
      <p className="my-1">{product?.description}</p>
      <p className="font-bold">৳ {product?.price}</p>
      <img className="lg:max-w-[600px]" src={product?.image} alt={product?.name} />
    </div>
  )
}
