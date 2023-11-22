import { MdDelete } from "react-icons/md";
import Styles from "./style.module.scss";

export const CartItemCard = ({ product, removeCartToList }) => {
   return (
      <li className={Styles.flexbox}>
         <div >
            <img src={product.img} alt={product.name} />
            <div>
               <h3 className={`title1`}>{product.name}</h3>
               <span className={`title3 `}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
         </div>
         <button onClick={() => removeCartToList(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};

