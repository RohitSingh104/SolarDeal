import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [state, setState] = useState();

  const setInputArea = () => {
    setState(
      <div>
        <form method="get" action="https://solardeal.in/product/search">
          <div id="myDropdown" class="dropdown-content">
            <input
              type="text"
              placeholder="Search your city"
              id="myInput"
              autocomplete="off"
            />
          </div>
        </form>
      </div>
    );
  };
  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <div id="home">
          <div class="big_title text-center">
            <h1>Find Your Best Solardeal Here!</h1>
            <p>
              Search Product's, Installer and Best deal for your Solar Business
            </p>
          </div>
          <div className="row">
            <div className="dropdown">
              <button className="dropbtn" onClick={setInputArea}>
                <span className="usercity">All India</span>
              </button>
              <div className="input">{state}</div>
            </div>

            <div class="searchClass">
              <input
                type="text"
                id="search"
                name="name"
                placeholder="Product Search...."
                class="form-control input-search"
                autocomplete="off"
              />
            </div>

            <div className="searchBtn">
              <form method="get" action="https://solardeal.in/product/search">
                <div id="myDropdown" class="dropdown-content">
                  <button className="btn">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="deal">
          <div class="deal-heading">
            <h3>
              <b>DEAL OF THE DAY</b>
            </h3>
          </div>
          <div class="product_box_found">
            <div class="inner-container">
              <div class="product">
                <div class="heading">
                  <h3>Products Not Found</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product_box_memberships">
          <div class="image-premium-content">
            <div class="image-premium">
              <img
                id="image-premium"
                src="https://solardeal.in/public/assets/img/1-medium.jpg"
                width="100%"
              />
            </div>
            <div class="para-premium">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div class="home-ads">
          <div class="para-btn-container">
            <div class="para-btn-wrap">
              <div class="para">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
              <div class="package-btn">
                <button class="btn-package">Package</button>
              </div>
            </div>
          </div>
        </div>
        <div class="product_box_memberships">
          <div class="image-premium-content">
            <div class="para-premium">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div className="image-premium">
              <img
                id="image-premium" 
                src="https://solardeal.in/public/assets/img/1-medium.jpg"
                width="100%"
              />
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default Main;
