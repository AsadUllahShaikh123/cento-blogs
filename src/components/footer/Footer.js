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
        <div className="footer-container flex-nowrap md:w-4/5 mr-auto ml-auto flex  md:justify-between md:items-center md:flex-row flex-col-reverse justify-between items-center py-12" style={{minHeight:'275.66px'}}>
          
          {/*  Logo Section Started */}
          <div
            className="logos flex  flex-col justify-between items-center md:items-start md:w-56 w-full md:h-40 h-36 md:mt-4 mt-8  md:m-0"
            
          >
            <img
              src={`${black ? 'images/logo-dark.webp':'images/logo.webp'}`}
              alt=""
              srcset=""
              style={{ width: "150px", height: "35px" }}
            />
            <div className="copy-right">
              <p style={{ color: `${black? 'rgb(203, 213, 224)':" rgb(113, 128, 150)"}`  }}>
                © 2022, All Rights Reserved.
              </p>
            </div>
            <div className="gatsby-link">
              <a
              className="gatsby"
                href="https://www.gatsbyjs.com/"
                style={{
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  color:`${black ? '#edf2f7':'black'}`
                }}
              >
                Powered By
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 28" style={{maginLeft:'0.5rem',height:'24px',fill:`${black ?'#edf2f7':'#2d3748'}`}}><path d="M62.9 12h2.8v10h-2.8v-1.3c-1 1.5-2.3 1.6-3.1 1.6-3.1 0-5.1-2.4-5.1-5.3 0-3 2-5.3 4.9-5.3.8 0 2.3.1 3.2 1.6V12zm-5.2 5c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.6 0-2.8 1.2-2.8 2.8zm13.5-2.6V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4h-1.9zm8.5 0c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.8.3 2 .6 2.5 1.4.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.1-3 1.1c-2.1 0-3.2-1-3.9-1.7l1.5-1.7c.6.6 1.4 1.2 2.2 1.2.8 0 1.4-.4 1.4-1.1 0-.6-.5-.9-.9-1l-.6-.2c-.7-.3-1.5-.6-2.1-1.2-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1l-1.4 1.6zm6.1-1.1c1-1.4 2.4-1.6 3.2-1.6 2.9 0 4.9 2.3 4.9 5.3s-2 5.3-5 5.3c-.6 0-2.1-.1-3.2-1.6V22H83V5.2h2.8v8.1zm-.3 3.7c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.7 0-2.8 1.2-2.8 2.8zm13 3.5L93.7 12H97l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2l3.6-6.8zM54 13.7h-7v2.8h3.7c-.6 1.9-2 3.2-4.6 3.2-2.9 0-5-2.4-5-5.3S43.1 9 46 9c1.6 0 3.2.8 4.2 2.1l2.3-1.5C51 7.5 48.6 6.3 46 6.3c-4.4 0-8 3.6-8 8.1s3.4 8.1 8 8.1 8-3.6 8-8.1c.1-.3 0-.5 0-.7z"></path><path fill="#fff" d="M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6 2.1 2.1 4.9 3.2 7.6 3.2L3 14.1z"></path><path fill="#639" d="M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"></path></svg>
                
              </a>
            </div>
          </div>

          {/* Links Section Started */}

          {data.map((value) => (
            // boorororo
            <div className="links-section  ml-auto mr-auto md:m-0 md:h-40 w-full md:w-auto" >
              <p className="hidden md:block md:mb-5" style={{ color:`${black ? 'white':'black'}`, fontWeight: "600" }} >{value.para}</p>
              <div className="flex justify-center md:flex " >
              <div
                className="flex  md:flex-col px-1 py-2 md:p-0 md:justify-center  w-full"
               
              >
                {value.links.map((value) => (
                  
                    <a href={value.link} style={{color:`${black? '#e2e8f0':'#718096' }`}} className="text-gray-500 font-bold md:font-normal text-base hover:text-blue-700 md:flex text-center  ml-4  md:mb-5  ">
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
