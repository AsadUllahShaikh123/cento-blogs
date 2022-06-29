import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-section">
        <div className="margin-top-container w-full  "></div>
        <div className="subscribe-container py-8 relative rounded-2xl bg-white md:w-1140 w-full md:px-8 md:ml-auto md:mr-auto ">
          <div className="logo hidden md:block absolute -top-12 left-20">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="css-l9ytao"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="css-1iew42x"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"></path>
            </svg>
          </div>
          <div
            className="subscribe-content pt-4 text-center ml-auto mr-auto"
            style={{ maxWidth: "500px" }}
          >
            <h2
              className="subscribe-heading"
              style={{
                fontWeight: "700",
                marginBottom: "16px",
                textAlign: "center",
                color: " rgb(45, 55, 72)",
              }}
            >
              Subscribe to our newsletter!
            </h2>
            <p
              className="text-center"
              style={{
                fontWeight: "400",
                color: " rgb(113, 128, 150)",
                lineHeight: "28.8px",
              }}
            >
              We'll send you the best of our blog just once a month.We promise.
            </p>
            <div className="form mt-8  text-center">
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  width: "300px",
                  marginBottom: "16px",
                  height: "44.8px",
                  padding: "1rem",
                  color: "#718096",
                  backgroundColor: "rgb(226, 232, 240)",
                }}
              />
            </div>
            <button
              className="bg-blue-500 rounded-full"
              style={{
                color: " rgb(237, 242, 247)",
                width: "160px",
                height: "50px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="margin" style={{marginTop:'4rem',borderWidth:'3px',borderStyle:'solid',borderColor:'transparent'}}></div>
      </div>
    </>
  );
};

export default Subscribe;
