import React from "react";

const Footer = ({black}) => {
  let data = [
    {
      para: "Quick Links",
      links: [
        {
          link: "#add",
          value: "Advertise with us",
        },
        {
          link: "#about",
          value: "About Us",
        },
        {
          link: "#contact",
          value: "Contact Us",
        },
      ],
      icons:[]
    },
    {
      para: "Legal Stuff",
      links: [
        {
          link: "#privacy",
          value: "Privacy Notice",
        },
        {
          link: "#cookie",
          value: "Cookie Policy",
        },
        {
          link: "#term",
          value: "Terms Of Use",
        },
      ],
      icons:[]

    },
    {
      para:'Social Media',
      links:[
        {
          link:'#git',
          value:'github',
          icon:'fa-brands fa-github',
          color:'black'
        },
        {
          link:'#twitter',
          value:'twitter',
          icon:'fa-brands fa-twitter',
          color:'blue'
        },
        {
          link:'#insta',
          value:'instagram',
          icon:'fa fa-instagram',
          color:'red'
        }
      ],
    }
  ];

  return (
    <>
      <div className="footer w-full" style={{backgroundColor:`${black ? 'rgb(45, 55, 72)' : 'white'}`}} >
        <div className="footer-container   md:w-4/5 mr-auto ml-auto flex md:justify-between md:items-center md:flex-row flex-col-reverse justify-between items-center py-12" style={{minHeight:'275.66px'}}>
          
          {/*  Logo Section Started */}
          <div
            className="logos flex flex-col justify-between items-center md:items-start md:w-56 w-full md:h-40 h-36 md:mt-4 mt-8  md:m-0"
            
          >
            <img
              src="images/logo.webp"
              alt=""
              srcset=""
              style={{ width: "150px", height: "35px" }}
            />
            <div className="copy-right">
              <p style={{ color: " rgb(113, 128, 150)",  }}>
                © 2022, All Rights Reserved.
              </p>
            </div>
            <div className="gatsby-link">
              <a
                href="https://www.gatsbyjs.com/"
                style={{
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Powered By
                <img
                  src="images/gatsby-logo.png"
                  alt=""
                  srcset=""
                  style={{ width: "116px", height: "51px" }}
                />
              </a>
            </div>
          </div>

          {/* Links Section Started */}

          {data.map((value) => (
            // boorororo
            <div className="links-section    ml-auto mr-auto md:m-0 md:h-40 " >
              <p className="hidden md:block md:mb-5" style={{ fontWeight: "600" }} >{value.para}</p>
              <div className="flex justify-center md:flex " >
              <div
                className="flex md:flex-col px-1 py-2 md:p-0 md:justify-center  w-full"
               
              >
                {value.links.map((value) => (
                  
                    <a href={value.link}  className="text-gray-500 font-bold md:font-normal text-base hover:text-blue-700 md:flex text-center  ml-4  md:mb-5  ">
                      {value?.icon && <p className=""><i className={value?.icon} style={{marginRight:'0.5rem',color:`${value?.color && value.color}`}}></i></p> } 
                       {value.value}
                    </a>
                  
                ))}

                
              </div>
              </div>
            </div>
          ))}

          {/* Social Media  */}

        </div>
      </div>
    </>
  );
};

export default Footer;
