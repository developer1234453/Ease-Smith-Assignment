import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); 

  const viewProduct = () => {
    navigate('/thank-you', { state: { productName: product.name } });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={viewProduct}>View Product</button>
      <button>Add to Cart</button>
    </div>
  );
};
export default ProductCard; 