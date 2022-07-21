import React from "react";

function SearchWather() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div class="card text-white text-center border-0">
              <img
                src="https://source.unsplash.com/600x900/?nature,water"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <form>
                  <div class="input-group mb-4 w-75 mx-auto ">
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search city"
                      aria-label="Search city"
                      aria-describedby="basic-addon2"
                    />
                    <button type="search" class="input-group-text" id="basic-addon2">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                <h1 class="card-title">London</h1>
                <p class="card-text lead">
                 Thursday, October 14, 2022
                </p>
                <hr/>
                <i className="fas fa-cloud fa-4x"></i>
                <h1 className="fw-bolder mb-5">33.06 &deg;C</h1>
                <p className="lead fw-bolder mb-0">Clod</p>
                <p className="lead">33.01 &deg;C | 35.01 &deg;C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWather;
