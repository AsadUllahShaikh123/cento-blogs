import React from "react";

const Banner = () => {
  return (
    <>
    {/* This container is just for margin top */}
      <div className="margin-container my-8 w-full border-t-2 border-transparent"></div>

      
      <div className="banner-container w-full ">
        <div className=" md:w-1140 w-full  px-8  mx-auto">
          <div
            className="backgroundImage-content"
            style={{
              backgroundColor: "#2d3748",
              width: "100%",
              minHeight: "136px",
              borderRadius: "0.5rem",
            }}
          >
            <div
              className="backgroundImage "
              style={{
                backgroundPosition: "70% bottom",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                borderRadius: "0.5rem",
              }}
            >
              <div className="banner-content flex md:flex-row justify-between items-center flex-col ">
                <div className="content md:w-2/3 w-full">
                  <h2 className="mb-4" style={{ color: " rgb(214, 188, 250)" }}>
                    The latest IT market analysis report May - 2020
                  </h2>
                  <p className="month" style={{ color: "rgb(160, 174, 192)" }}>
                    This month analysis is a must see
                  </p>
                </div>
                <div>
                  <p
                    className=" download bg-blue-500 border-blue-500 rounded-full"
                    style={{
                      color: "rgb(237, 242, 247)",
                      borderWidth: "3px",
                      borderStyle: "solid",
                      lineHeight: "28.8px",
                    }}
                  >
                    Download Report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
