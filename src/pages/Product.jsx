import { useParams } from "react-router-dom";
import { cardArray } from "../constants";

export const Product = () => {
    const { id } = useParams();

    const findProduct = cardArray.find((p) => p.id === +id)

    return (
        <>
            {
                findProduct ? 
                <span>Product {findProduct.title}</span>
                : 
                <span>Not Found</span>
            }
        </>
    )
}