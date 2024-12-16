import MyContainer from "./MyContainer";
import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product.jsx";

const MainContent = ({ onAddToCart }) => {
  return (
    <main className="py-8">
      <MyContainer>
        <div className="my-grid">
          {DUMMY_PRODUCTS.map((product) => (
            <Product
              key={product.title}
              {...product}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      </MyContainer>
    </main>
  );
};

export default MainContent;
