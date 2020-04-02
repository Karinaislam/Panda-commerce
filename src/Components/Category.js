import React from "react";
import watch from "../images/categories/watch.png";
import bag from "../images/categories/bag.png";
import shoes from "../images/categories/shoes.png";

export default function Category() {
  return (
    <div className="container catagoried">
      <div className="row">
        <div className="col-md-4">
          <div className="cat1 d-flex justify-content-between align-items-center">
            <h1>watch</h1>
            <img src={watch} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="cat2 d-flex justify-content-between align-items-center">
            <h1>bag</h1>
            <img src={bag} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="cat3 d-flex justify-content-between align-items-center">
            <h1>shoes</h1>
            <img src={shoes} />
          </div>
        </div>
      </div>
    </div>
  );
}
