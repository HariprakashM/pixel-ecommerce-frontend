import React from "react";
import { getProductById, updateProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { useParams } from "react-router-dom";
import Adminscreen from "./Adminscreen";
export default function Editproduct({ match }) {
  const params = useParams()
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getProductByIdReducer);

  const { product, error, loading } = productstate;

  const updateproductstate = useSelector((state) => state.updateProductReducer)

  const { success, updateerror, updateloading } = updateproductstate

  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    if (product) {
      if (product._id == params.productid) {
        setname(product.name);
        setprice(product.price);
        setdescription(product.description);
        setimageurl(product.image);
        setcategory(product.category);
        setcountinstock(product.countInStock);
      } else {
        dispatch(getProductById(params.productid));
      }
    } else {
      dispatch(getProductById(params.productid));
    }
  }, [dispatch, product]);

  function editproduct(e) {
    e.preventDefault();
    const updatedproduct = {
      name: name,
      price: price,
      description: description,
      countInStock: countinstock,
      category: category,
      image: imageurl,
    };

    dispatch(updateProduct(params.productid, updatedproduct));
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <Adminscreen />
        <h2>Edit Product</h2>
        {loading && <Loader />}

        {updateloading && <Loader />}
        {updateerror && (<Error error='Something went wrong' />)}
        {success && (<Success success='Product Updated Successfully' />)}
        {error && <Error error="something went wrong" />}
        {product && (
          <div>
            <form onSubmit={editproduct}>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="name"
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="price"
                value={price}
                required
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
              <input
                type="text"
                required
                className="form-control mb-2 mr-sm-2"
                placeholder="decription"
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
              <input
                type="text"
                required
                className="form-control mb-2 mr-sm-2"
                placeholder="imageurl"
                value={imageurl}
                onChange={(e) => {
                  setimageurl(e.target.value);
                }}
              />
              <select className='form-control' placeholder='Catagory' name='catagory' value={category} onChange={(e) => {
                setcategory(e.target.value);
              }} >
                <option value="Nah" >select any one catagory</option>
                <option value="Iphone">Iphone</option>
                <option value="Mac">Mac</option>
                <option value="Ipad">Ipad</option>
                <option value="Airpods">Airpods</option>
                <option value="Watch">Watch</option>
                <option value="Accessories">Accessories</option>
              </select>
              <input
                type="text"
                required
                className="form-control mb-2 mr-sm-2"
                placeholder="count in stock"
                value={countinstock}
                onChange={(e) => {
                  setcountinstock(e.target.value);
                }}
              />
              <button
                className="btn mt-3"
                type="submit"
                style={{ float: "left" }}
              >
                Edit Product
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
