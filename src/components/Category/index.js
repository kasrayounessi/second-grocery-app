import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import './style.css';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/category")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => console.error(error));
  });

  return (
    <div className="bg-dark custom-overall-container">
      <div className="container custom-container-cats">
        <div className="row">
          {categories.map((item) => (
            <Item data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
