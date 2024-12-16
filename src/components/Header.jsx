import { useRef } from "react";
import Modal from "./Modal";
import MyContainer from "./MyContainer";
import shortImg from "../assets/shirt.svg";

const Header = ({ cart, onIncreamentItemCount, onDecreamentItemCount }) => {
  const modal = useRef();

  function handleShowModal() {
    modal.current.open();
  }

  return (
    <header className="py-4 bg-stone-50">
      <MyContainer>
        <Modal
          ref={modal}
          cart={cart}
          onIncreamentItemCount={onIncreamentItemCount}
          onDecreamentItemCount={onDecreamentItemCount}
        />
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center gap-3">
            <img src={shortImg} alt="Logo" className="w-5" />
            <h1 className="uppercase text-yellow-500 font-bold md:text-xl">
              elegant context
            </h1>
          </div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-amber-950 px-3 py-1 rounded"
            onClick={handleShowModal}
          >
            Cart ({Object.keys(cart.items).length})
          </button>
        </div>
      </MyContainer>
    </header>
  );
};

export default Header;
