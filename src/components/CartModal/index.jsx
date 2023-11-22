import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import Styles from "./style.module.scss";
import { useEffect } from "react";
import { useRef } from "react";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeyDown } from "../../hooks/useKeyDown";


export const CartModal = ({ cartList, setCartList, setIsVisible, removeCartToList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const clearTotal = () => {
      setCartList([]);
   }

   const modalRef = useOutClick(() => {
      setIsVisible(false);
   })


   const buttonRef = useKeyDown("Escape", (element) => {
      element.click();
   })

   return (
      <div role="dialog" className={`${Styles.overlayBox}`}>
         <div ref={modalRef} className={`${Styles.flexbox}`}>
            <div className={` ${Styles.head}`}>
               <h2 className={`title1`}>Carrinho de compras</h2>
               <button ref={buttonRef} onClick={() => setIsVisible(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={`${Styles.cartDiv}`}>
               {cartList.length > 0 ?
                  <ul>
                     {cartList.map((product) => (
                        <CartItemCard key={product.id} product={product} removeCartToList={removeCartToList} />
                     ))}
                  </ul> :
                  <p className={`title1`}>Nenhum item adicionado ao carrinho</p>}
            </div>
            <div className={`${Styles.total}`}>
               <span></span>
               <div>
                  <span className={`title3`}>Total</span>
                  <span className={`title3`}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className={`title2 btn large`} onClick={() => clearTotal()}>Remover todos</button>
            </div>
         </div>

      </div>
   );
};
