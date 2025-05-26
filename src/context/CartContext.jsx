import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [totalCartPrice, setTotalCartPrice] = useState(0);  
  const [discountTotal, setDiscountTotal] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(totalCartPrice);
  const [isLoggined, setIsLoggined] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isUserName, setIsUserName] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState({
    field1: false,
    field2: false,
    field3: false
  });

  const userName = localStorage.getItem('userName');
  useEffect(()=>{
    userName ? setIsLoggined(true) : setIsLoggined(false);
  }, [userName]);

  useEffect(() => {
    if (isLoggined) {
        const storedName = localStorage.getItem('userName');
        if (storedName) setIsUserName(storedName);
    } 
  }, [isLoggined]);

  const handleLogout = ()=> {
   localStorage.clear();
   localStorage.removeItem('RegiteredUser');
   localStorage.removeItem('user')
   setIsLoggined(false);
   setAccToggle(false);
  }

  const [cartList, setCartList] = useState(() => {
    const cartLocal = localStorage.getItem("cartlist");
    return cartLocal ? JSON.parse(cartLocal) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartlist", JSON.stringify(cartList));
  }, [cartList]);

  const addToCart = (item) => {
    setCartList((prevCart) => {
      const found = prevCart.find((i) => i.id === item.id);
      if (found) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

      toast.success(
        <span><strong>{item.title}</strong> added to cart!</span>
      );
    
  };

  const deleteFromLocal = (itemToDelete)=> {
    const MyCartItem = cartList.filter((item) => item.id != itemToDelete)
    setCartList(MyCartItem)
    // console.log(itemToDelete)
      
    localStorage.setItem("cartlist", JSON.stringify(MyCartItem))
  }

  const IncrementItem = (id) => {
    setCartList(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const DecrementItem = (id) => {
    setCartList(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const originalItemPrice = (item)=> {
    const OriginalPrice = item.price / (1 - item.discountPercentage / 100);
    return OriginalPrice;
  }
  
  useEffect(() => {
    const total = cartList.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalCartPrice(total);
  }, [cartList]);

  const handleLoginPoppup = ()=> {
    setShowModal(!showModal);
}

const showHidePass = (field)=> {
  setShowPassword(prev => ({
    ...prev, [field] : !prev[field]
  }))
  console.log(showPassword);
}

  

  return (
    <CartContext.Provider value={{ cartList, setCartList, addToCart, deleteFromLocal, IncrementItem, DecrementItem, originalItemPrice, totalCartPrice, setTotalCartPrice, discountTotal, setDiscountTotal ,priceAfterDiscount,setPriceAfterDiscount, isLoggined, setIsLoggined, handleLoginPoppup, showModal, setShowModal, handleLogout, showLogin, setShowLogin, showHidePass, showPassword}}>
      {children}
    </CartContext.Provider>
  );
};
