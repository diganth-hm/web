import { Sample } from "../../../components/Button";
import product from "../../../assets/product.png";
function Product_industry() {

    return (<div className="product-industry">
        <div className="product-images">
            <img src={product} alt="Industry" className="industry-image" />
            <img src={product} alt="Product" className="product-image" />
        </div>
        <div className="product-content">
            <h1 className="product-title">3D Product & Industrial Visualization</h1>
            <h2>
                • High-End Product Rendering (Specializing in Jewelry,Tech, and Furniture)<br />
                • Technical & Exploaded View  Animation <br />
                • 3D Product Modeling & visualization <br />
                • Interactive AR-Ready Models & Turntables <br />


            </h2>

            <Sample className="product-sample" />

        </div>

    </div>
    )
}
export default Product_industry;