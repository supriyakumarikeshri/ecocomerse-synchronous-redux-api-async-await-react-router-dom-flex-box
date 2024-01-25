import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProducComponent = () => {
    const products = useSelector((state) => state.allProducts.prodcuts
    );
    console.log("products", products)
    const renderProduct = products.map((product) => {
        const { image, title, description, price, id } = product;
        return (

            <div className="product-card" key={id}>
                <Link to={`/detail/${id}`}>
                    <img src={image} alt="Product Image" className="product-image" />
                    <div className="product-info">
                        <h2 className="product-title">{title}</h2>
                        {/* <p className="product-description">{description}</p> */}
                        <span className="product-price">{`Rs. ${price}`}</span>
                        {/* <button className="add-to-cart-btn">Add to Cart</button> */}
                    </div>
                </Link>
            </div>
        )
    })
    useEffect(() => {
        console.log("Product Component useeffect")
    }, [])
    return (
        <div className="product-container">
            {renderProduct}
        </div>
    )
}

export default ProducComponent;