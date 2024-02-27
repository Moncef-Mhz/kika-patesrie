"use client";
import { createContext, useContext, useEffect, useState } from "react";

const context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
      : false
  );
  const [showCart, setShowCart] = useState(false);

  const AddToCart = (product) => {
    const newCartItem = {
      ...product,
      quantity: 1,
    };

    const checkproduct = cartItems.find((item) => item._id === product?._id);

    setCartItems((curent) =>
      checkproduct
        ? curent.map((cartItem) =>
            cartItem._id === product?._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...curent, newCartItem]
    );
  };

  const removeFromCart = (product) => {
    const checkproduct = cartItems.find((item) => item._id === product?._id);

    if (checkproduct.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem._id !== product?._id)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === product?._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return (cartItems || []).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <context.Provider
      value={{
        clearCart,
        getCartTotal,
        removeFromCart,
        cartItems,
        setCartItems,
        AddToCart,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(context);
