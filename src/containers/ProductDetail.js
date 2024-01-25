import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";


const ProducDetail = () => {
    const product = useSelector((state => state.product))
    console.log(product)
    const { image, title, price, category, description } = product;
    console.log(image)
    const { productId } = useParams();
    console.log(productId, "productId");
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("Err", err)
        })
        const data = await response.json();
        console.log(data)
        dispatch(selectedProduct(data));
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId])
    console.log(Object.keys(product))
    return (
        <div className="product-card">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (


                <div className="product-info">
                    <div className="">
                        <img className="" src={image} />
                    </div>
                    <div className="product-title">
                        <h1>{title}</h1>
                        <h2>
                            <a className="product-price">${price}</a>
                        </h2>
                        <h3 className="">{category}</h3>
                        <p>{description}</p>
                        <div className="" tabIndex="0">
                            <div className="">
                                <i className="shop icon"></i>
                            </div>
                            <div className="">Add to Cart</div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default ProducDetail;