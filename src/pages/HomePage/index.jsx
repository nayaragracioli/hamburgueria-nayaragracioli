import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { hamburguerApi } from "../../services/api";
import "../../style/grid.scss"


export const HomePage = ({setIsVisible, addCartToList, cartList}) => {
   const [productList, setProductList] = useState([]);   

   useEffect(() => {
      const getSnacks = async () => {
         try {
            const {data} = await hamburguerApi.get("/products");
            setProductList(data);
         } catch (error) {
            return error;
         }
      };
      getSnacks();
   }, []);

   return (
      <>
         <Header setIsVisible={setIsVisible} cartList={cartList}/>
         <main className={`container`}>
            <ProductList productList={productList} addCartToList={addCartToList}/>
         </main>
      </>
   );
};
