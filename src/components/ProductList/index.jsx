import { ProductCard } from "./ProductCard";
import Styles from "./style.module.scss";

export const ProductList = ({ productList, addCartToList }) => {
   return (
      <ul className={Styles.flexbox}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addCartToList={addCartToList} />
         ))}
      </ul>
   );
};
