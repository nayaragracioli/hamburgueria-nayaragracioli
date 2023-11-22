import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import Styles from "./style.module.scss";

export const Header = ({setIsVisible, cartList}) => {
   return (
      <header className={Styles.flexbox}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <button onClick={() => setIsVisible(true)}>
            <MdShoppingCart size={25} />
            <span>{cartList.length}</span>
         </button>
      </header>
   );
};
