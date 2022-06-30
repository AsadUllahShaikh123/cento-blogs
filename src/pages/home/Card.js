import React from "react";

const Card = ({ category,articleHeading,author,date,read,image }) => {
  return (
    <>
      <div className="card ">
        <div
          className="card-content bg-white border-l-4 rounded-lg  flex justify-between"
          style={{ borderColor: "#a3bffa" }}
        >
          {
            image && <div style={{ margin: "8px",marginRight:'0', width: "130px", height: "135px" }}>
            <img
              src={image}
              alt=""
              style={{ width: "130px", height: "135px", borderRadius: "8px" }}
            />
          </div>
          }
          
          <div className="content flex-1 p-4">
            <button
              style={{
                padding: "4px 16px",
                backgroundColor: "#e9d8fd",
                color: "#2d3748",
                fontWeight: "600",
                marginBottom: "16px",
                borderRadius: "8px",
                fontSize:'12px'
              }}
            >
              {category}
            </button>
            <p
              style={{
                color: "rgb(45, 55, 72)",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              {articleHeading}
            </p>
            <div className="intro flex justify-between">
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "rgb(102, 126, 234)",
                }}
              >
                {author}
              </p>
              <p style={{ fontSize: "12px", color: "rgb(160, 174, 192)" }}>
                {date}
              </p>
              <p style={{ fontSize: "12px", color: "rgb(160, 174, 192)" }}>
                {read}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
