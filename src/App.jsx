import { useEffect, useState } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage";
import "./style/index.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const localCart = localStorage.getItem("@CARTLIST");

  const [cartList, setCartList] = useState(
    localCart ? JSON.parse(localCart) : []
  );

  const [isVisible, setIsVisible] = useState(false);

  const addCartToList = (addSnack) => {
    const hasCart = cartList.some((cart) => cart.id === addSnack.id);

    if(!hasCart){
      setCartList([...cartList, addSnack]);
      toast.success("Item adicionado com sucesso!")
    }else{
      toast.error("Item já foi adicionado ao carrinho!")
    }
  };

  const removeCartToList = (snackId) => {
    const newCart = cartList.filter((cart) => cart.id !== snackId);
    setCartList(newCart);
  };

  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
  }, [cartList]);

  return (
    <>
      <HomePage setIsVisible={setIsVisible} addCartToList={addCartToList} cartList={cartList}/>
      {isVisible ? <CartModal cartList={cartList} setIsVisible={setIsVisible} setCartList={setCartList} removeCartToList={removeCartToList}/> : null} 
      <ToastContainer autoClose={2*1000} />
    </>
  )
}

export default App
