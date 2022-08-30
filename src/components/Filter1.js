import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";
export default function Filter1() {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");

  const dispatch = useDispatch();

  return (
    <div className="marginright">
      <div className="row  shadow  pb-2 mb-1  filter-nav mt-1">
      <div className="col-md-4" style={{marginTop:"-6px"}} >
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="search products"
            className="form-control"
          />
        </div>

        <div className="col-md-3 mt-1 ">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="htl">high to Low</option>
            <option value="lth">Low To High</option>
          </select>
        </div>

        <div className="col-md-3 mt-1 ">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="Iphone">Iphone</option>
            <option value="Mac">Mac</option>
            <option value="Ipad">Ipad</option>
            <option value="Airpods">Airpods</option>
            <option value="Watch">Watch</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="col-md-2 mt-1 ">
          <button className="btn" onClick={()=>{dispatch(filterProducts(searchkey , sort , category))}}>FILTER</button>
        </div>
        





        {/* <div className="col-md-4" style={{marginTop:"-7px"}} >
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="search products"
            className="form-control"
          />
        </div>

        <div className="col-md-2 mt-1 ">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="htl">high to Low</option>
            <option value="lth">Low To High</option>
          </select>
        </div>

        <div className="col-md-2 mt-1 ">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>

        <div className="col-md-2 mt-1 ">
          <button className="btn" onClick={()=>{dispatch(filterProducts(searchkey , sort , category))}}>FILTER</button>
        </div> */}
        
      </div>
    </div>
  );
}
