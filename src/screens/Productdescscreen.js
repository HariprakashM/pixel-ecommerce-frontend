import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from "../components/Review";
import { useParams } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PaymentsIcon from '@mui/icons-material/Payments';
export default function Productdescscreen({ match }) {
  const params = useParams()
  // const productid = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    dispatch(getProductById(params.id));
    window.scrollTo(0,0)
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card  mx-3 shadow  mb-4 bg-white rounded pb-2">
              <img src={product.image} className="img-fluid m-3 bigimg" />
            </div>
          
            <div className="mt-2 p-2 card mx-2 shadow p-3 mb-5 bg-white rounded">
              <Review product={product} />

           
          </div>
          </div>
          <div className="col-md-6 text-left ">
            <div className="card mr-2 shadow p-3 mb-4 bg-white rounded">
              <h1 className="heading"><b>{product.name}</b></h1>
              <hr />
              <h1 className="heading1"><b style={{ color: "#e63d3f" }}>Price : {`₹ ${product.price} (Inclusive of all taxes)`}</b></h1>
              <p><b>EMI</b> starting from ₹ 500, <b>NO COST EMI</b> also available</p>
              <hr />

              <h1 className="heading1">{`Select Quantity    `}

                <select
                  value={quantity}
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select></h1>
              <div className="des-icon my-2">
                <div >
                  <PaymentsIcon />
                  <p>Cash On Delivery</p>
                </div>
                <div>
                  <LocalShippingIcon />
                  <p>Fast Delivery</p>
                </div>
                <div>
                  <InventoryIcon />
                  <p>7 Days Replacement</p>
                </div>
                <div>
                  <VerifiedUserIcon />
                  <p>1 Year warranty</p>
                </div>
              </div>

              <hr />

              {product.countInStock > 0 ? (
                <button className="btn btn-dark" onClick={addtocart}>
                  ADD TO CART
                </button>
              ) : (

                <div>

                  <h1>Out Of StocK</h1>
                  <button className="btn" disabled onClick={addtocart}>
                    ADD TO CART

                  </button>
                </div>
              )}
            </div>


            <div className=" p-2 des-des shadow p-3 mb-5 bg-white rounded">
              <h1 className="heading1">About this product:</h1>
              <hr />
              <p >{product.description}</p>
            </div>


          </div>
        </div>
      )}
    </div>
  );
}
