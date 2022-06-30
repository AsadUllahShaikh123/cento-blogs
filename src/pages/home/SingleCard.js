import React from "react";

const SingleCard = ({
  category,
  articleHeading,
  author,
  date,
  read,
  image,
}) => {
  return (
    <>
      <div
        className="single-card w-1/3 p-2"
      >
        <div className="single-card-content bg-white rounded-lg "
         >

        
        <a href="#image" className="flex">
          <div style={{ margin: "8px 8px 0 8px", borderRadius: "8px" }}>
            <img src={image} alt="" srcset="" style={{ borderRadius: "8px" }} />
          </div>
        </a>
        <div className="content flex flex-col flex-1 justify-center" style={{ padding: "32px" }}>
          <div className="button" style={{ marginBottom: "16px" }}>
            <a
              href="#button"
              style={{
                padding: "4px 16px",
                backgroundColor: "#e9d8fd",
                fontWeight: "600",
                color: "#2d3748",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            >
              {category}
            </a>
          </div>
          <a
            href="#heading"
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "rgb(45, 55, 72)",
              marginBottom: "16px",
              display: "flex",
            }}
          >
            {articleHeading}
          </a>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "14px",
              color: "rgb(113, 128, 150)",
              lineHeight: "25.2px",
            }}
          >
            Markdown is a lightweight markup language with plain-text-formatting
            syntax. Its design allows it to…
          </p>
          <a href="author-intro" className="author-intro flex">
            <div style={{ marginRight: "16px" }}>
              <div style={{ width: "48px", height: "48px" }}>
                <img
                  src={image}
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "rgb(102, 126, 234)",
                }}
              >
                {author}
              </p>
              <p style={{ fontSize: "14px", color: " rgb(160, 174, 192)" }}>
                {date} {read}
              </p>
            </div>
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
