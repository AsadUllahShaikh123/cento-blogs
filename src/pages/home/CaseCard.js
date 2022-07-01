import React from 'react'

const CaseCard = ({ category,articleHeading,author,date,read,image,black }) => {
  return (
    <>
      <div className="card ">
        <div
          className="card-content  border-l-4 rounded-lg  flex justify-between"
          style={{ borderColor: "#a3bffa",backgroundColor:`${black ? 'rgb(45, 55, 72)':'white'}` }}
        >
          {
            image &&
          <div style={{margin:'8px 0 8px 8px'}}>
          <div style={{ padding: "0px 8px", width: "117.90px", height: "170.75px" }}>
            <img
              src={image}
              alt=""
              style={{ width: "117.90px", height: "170.75px", borderRadius: "8px" }}
            />
          </div>
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
                color: `${black ? 'rgb(237, 242, 247)':'rgb(45, 55, 72)'}`,
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
  )
}

export default CaseCard