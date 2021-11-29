import React from "react";

const Item = (props) => {
  return (

      <div className="col-sm-3">
        <div className="card">
        <img className="card-img-top" src={'http://rjtmobile.com/grocery/images/'+ props.data.catImage}  />
          <div className="card-body">
            <h5 className="card-title">{props.data.catName}</h5>
            <a href="#" className="btn btn-primary">
              Visit
            </a>
          </div>
        </div>
      </div>
  );
};

export default Item;
