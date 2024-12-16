import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState({
    items: {},
    allPrice: 0,
  });

  function handleAddToCart(itemObject) {
    setShoppingCart((prevSate) => {
      if (Object.keys(prevSate.items).length === 0) {
        return {
          items: {
            [itemObject.title]: {
              count: 1,
              price: itemObject.price,
            },
          },
          allPrice: itemObject.price,
        };
      } else {
        if (itemObject.title in prevSate.items) {
          return {
            items: {
              ...prevSate.items,
              [itemObject.title]: {
                count: prevSate.items[itemObject.title].count + 1,
                price: itemObject.price,
              },
            },
            allPrice: prevSate.allPrice + itemObject.price,
          };
        } else {
          return {
            items: {
              ...prevSate.items,
              [itemObject.title]: { count: 1, price: itemObject.price },
            },
            allPrice: prevSate.allPrice + itemObject.price,
          };
        }
      }
    });
  }

  function handleIncreamentitemCount(item) {
    setShoppingCart((prevSate) => {
      return {
        items: {
          ...prevSate.items,
          [item]: {
            ...prevSate.items[item],
            count: prevSate.items[item].count + 1,
          },
        },
        allPrice: prevSate.allPrice + prevSate.items[item].price,
      };
    });
  }

  function handleDecreamentItemCount(item) {
    setShoppingCart((prevSate) => {
      if (item in prevSate.items) {
        if (prevSate.items[item].count > 1) {
          return {
            items: {
              ...prevSate.items,
              [item]: {
                ...prevSate.items[item],
                count: prevSate.items[item].count - 1,
              },
            },
            allPrice: prevSate.allPrice - prevSate.items[item].price,
          };
        } else {
          const { [item]: deletedItem, ...restItems } = prevSate.items;
          return {
            items: restItems,
            allPrice: prevSate.allPrice - deletedItem.price,
          };
        }
      } else {
        return prevSate;
      }
    });
  }

  // console.log(shoppingCart);

  return (
    <>
      <Header
        cart={shoppingCart}
        onIncreamentItemCount={handleIncreamentitemCount}
        onDecreamentItemCount={handleDecreamentItemCount}
      />
      <MainContent onAddToCart={handleAddToCart} />
    </>
  );
};

export default App;
