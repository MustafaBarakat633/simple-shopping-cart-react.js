const Product = ({ image, title, price, description, onAddToCart }) => {
  return (
    <div className="bg-[#5f4e33] rounded-md overflow-hidden">
      <img src={image} alt="" className="w-full" />
      <div className=" p-5">
        <div>
          <h2 className="capitalize text-[#fbd392] font-bold text-xl">
            {title}
          </h2>
          <p className="text-[#d1b68b]">${price}</p>
          <p className="mt-3 mb-8 leading-6">{description}</p>
        </div>
        <div className="text-end">
          <button
            className="py-2 px-3 bg-yellow-500 hover:bg-yellow-600 text-stone-800 rounded"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
