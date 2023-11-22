import Styles from "./style.module.scss";

export const ProductCard = ({ product, addCartToList }) => {
    const { id, name, category, price, img } = product;


    return (
        <li className={`${Styles.flexbox}`}>
            <div className={`${Styles.image}`}>
                <img src={img} alt={name} />
            </div>
            <div className={`${Styles.informations}`}>
                <h3 className={`title1`}>{name}</h3>
                <span className={`title4 ${Styles.category}`}>{category}</span>
                <span className={`title3 ${Styles.price}`}>{price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={() => addCartToList(product)} className={`title3 btn medium`}>Adicionar</button>
            </div>
        </li>
    )
}