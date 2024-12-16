import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
  { cart, onIncreamentItemCount, onDecreamentItemCount },
  ref
) {
  let btnClasses =
    "bg-[#271e07] hover:bg-[#382e1b;] px-2 py-1 rounded-md text-[#f3e7d4]";

  const formattedPrice = cart.allPrice.toFixed(2);

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="max-w-96 w-11/12 p-5 rounded-md bg-[#d3b17b] backdrop:bg-stone-900/70 shadow-md select-none"
    >
      <h2 className="text-[#4f3807] uppercase font-bold text-xl">your cart</h2>
      {Object.keys(cart.items).length > 0 ? (
        <ul className="flex flex-col gap-2 my-3">
          {Object.keys(cart.items).map((item) => (
            <li
              key={item}
              className="bg-[#fbd392] p-2 rounded-md flex items-center justify-between gap-2 capitalize"
            >
              {item} (${cart.items[item].price.toFixed(2)})
              <div>
                <button
                  className="hover:bg-yellow-400 px-2 rounded"
                  onClick={() => onDecreamentItemCount(item)}
                >
                  -
                </button>
                <span className="px-2">{cart.items[item].count}</span>
                <button
                  className="hover:bg-yellow-400 px-2 rounded"
                  onClick={() => onIncreamentItemCount(item)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2">No items in cart!</p>
      )}
      <p className="text-end">Cart Total: ${formattedPrice}</p>
      <form method="dialog" className="flex justify-end gap-3 mt-3">
        <button className={btnClasses}>close</button>
        {cart.allPrice > 0 ? (
          <button className={btnClasses}>Ckeckout</button>
        ) : null}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
