import { useState } from "react";

const Header = () => {
  
  let [mode,setMode] = useState(true);
  return (
    <>
      <div className="header">
        <header className="w-1140 ml-auto mr-auto ">
          <div className="content flex flex-auto items-center justify-between py-8">
            <div className="logo  w-1/3">
              <img
                src="/images/logo.webp"
                alt=""
                srcset=""
                style={{ width: "150px", height: "35px" }}
              />
            </div>

            <div
              class="form-group fg--search w-1/3 mx-4 px-8"
              style={{
                backgroundColor: "#e2e8f0",
                outline: "none",
                height: "50px",
                borderRadius: "3px",
              }}
            >
              <button type="submit">
                <i class="fa fa-search" style={{ color: "#718096" }}></i>
              </button>
              <input
                type="text"
                className="w-full text-base h-10 px-4"
                placeholder="Discover news, articles and more"
                style={{
                  backgroundColor: "#e2e8f0",
                  outline: "none",
                  height: "50px",
                  borderRadius: "3px",
                }}
              />
            </div>
            <div className="links flex w-1/3 justify-end ">
              <p className="mx-2 p-1">Home</p>
              <p className="mx-2 p-1">Our Team</p>
              <p className="mx-2 p-1">Contact</p>
            </div>
            <div className="toggle-button   ">
              
              <button onClick={()=> setMode(!mode)} aria-label="Toggle dark mode" className={`${mode ?  'light': 'dark flex-row-reverse'} ml-2 px-1 text-white flex justify-between items-center`}> 
               
                <span style={{width:'21px',height:'21px',display:'inline-block',backgroundColor:'white',borderRadius:'50%',border:'none'}}></span>
                
                {
                  mode ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg> 
                  :
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="css-uk6cul" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
                }
                
                
                </button>              
            </div>
            
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
