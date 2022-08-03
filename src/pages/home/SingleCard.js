import React from "react";
import {useNavigate} from 'react-router-dom'
const SingleCard = ({
  index,
  category,
  articleHeading,
  author,
  date,
  read,
  image,
  black,
  setBlogCategory,
  isCategory  
}) => {
  console.log(isCategory,'isCategory')
  let navigate = useNavigate();
  let setRoute=()=>{
    // if(isCategory)
    //   navigate(`/category/${index}`)   
    // else 
    //   navigate(`${index}`)
      navigate(`/category/${index}`)
    setBlogCategory(index) 
    
  }
  return (
    <>
      <div
        className="single-card md:w-1/3 w-full p-2 self-stretch"
        onClick={()=> setRoute()}
      >
        <div className="single-card-content  rounded-lg "
        style={{backgroundColor:`${black ? "rgb(45, 55, 72)":'white'}`}}
         >

        
        <a href="#image" className="flex">
          <div style={{ margin: "8px 8px 0 8px", borderRadius: "8px" }}>
            <img src={image} alt="" srcset="" style={{ borderRadius: "8px" }} />
          </div>
        </a>
        <div className="content flex flex-col  justify-center" style={{ padding: "32px" }}>
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
              color: `${black ? 'rgb(237, 242, 247)':"rgb(45, 55, 72)" }`,
              marginBottom: "16px",
              display: "flex",
              maxHeight:'3em',
              overflow:'hidden'
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
