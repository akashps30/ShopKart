import React, { Fragment, useEffect } from 'react'
import "./Home.css"
import { CgMouse } from "react-icons/cg"
import Product from "./ProductCard"
import MetaData from "../layout/MetaData"
import { getProduct } from "../../actions/productAction"
import { useSelector, useDispatch } from "react-redux"
import Loader from '../layout/loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const product = {
//     name: "Blue Tshirt",
//     image: [{url: "http://i.ibb.co//DRST11n/1.webp"}],
//     price: "1800",
//     id: "Akash",
// }

const Home = () => {

    
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(state => state.products)

    useEffect(() => {


        if (error) {
            return toast.error(error);
        }
        dispatch(getProduct());
        // console.log("child useEffect");
    }, [dispatch, error, toast])



    return (
        <Fragment>
            <ToastContainer autoClose={3000}/>
            {loading ? <Loader /> : <Fragment>

                <MetaData title="ShopKart" />

                <div className="banner">
                    <p>Welcome to Shopkart </p>
                    <h1>FIND AMAZING PRODUCTS BELOW</h1>

                    <a href="#heading">
                        <button>
                            Scroll <CgMouse />
                        </button>
                    </a>
                </div>

                <div id="heading" className='homeHeadingdiv'>
                    <h2  className="homeHeading">Featured</h2>
                    <h2 className='homeHeading'>Products...</h2>
                </div>

                <div className="container" id="container">
                    {products && products.map(product => (
                        <Product product={product} />
                    ))}
                </div>
            </Fragment>}
        </Fragment>
    )
}

export default Home