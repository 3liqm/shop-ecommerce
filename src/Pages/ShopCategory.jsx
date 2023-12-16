import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap";
import { Link } from "react-router-dom";


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
 

      <div className="shopcategory-indexsort">
        <h6>
          <span>Showing many</span> out of our prouducts
        </h6>

        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          types
          </a>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to='/mens'>
                Men
              </Link>
              <ul>
                <li>
                  {" "}
                  <Link className="dropdown-item" to="/jacket">
                    Jacket
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/rain-jacket">
                    Rain Jacket
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link class="dropdown-item" to='/womens'>
                Women
              </Link>
              <ul>
                <li>
                  {" "}
                  <Link className="dropdown-item" to="/shirt">
                    Shirt
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/t-shirt">
                    T-shirt
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link class="dropdown-item" to='/kids'>
                Kids
              </Link>
              <ul>
                <li>
                  {" "}
                  <Link className="dropdown-item" to="/blouse">
                    Blouse
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sweater">
                    Sweater
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="shopcategory-product">
          {all_product.map((item, i) => {
            if (props.type === item.type) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  type={item.type}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="shopcategory-product">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  type={item.type}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="shopcategory-loadmore">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
