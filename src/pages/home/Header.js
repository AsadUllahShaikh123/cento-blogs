import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Header = ({black,setBlack}) => {
  
  let [mode,setMode] = useState(true);
  let navigate = useNavigate();

  let handleClick=()=>{
    setMode(!mode)
    setBlack(!black)
  }
  return (
    <>
      <div className='header relative' style={{backgroundColor:`${black ? 'rgb(45, 55, 72)' :'white'}`}}>
        <header className="md:w-1140 w-full px-3 md:ml-auto md:mr-auto ">
          <div className="content flex flex-auto items-center justify-between md:py-8 py-5">
            
            {/* Logo */}
            <div className="logo  md:w-1/3">
              <img
                src="/images/logo.webp"
                alt=""
                srcset=""
                style={{ width: "150px", height: "35px" }}
              />
            </div>

            {/* Search bar  */}
            <div
              class="form-group fg--search md:block hidden w-1/3 mx-4 px-8"
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

            {/* Links  */}
            <div className=" hidden links md:flex w-1/3 justify-end ">
              <p className="mx-2 p-1 link"  onClick={()=> navigate('/')} >Home</p>
              <p className="mx-2 p-1 link"  onClick={()=> navigate('/team')}>Our Team</p>
              <p className="mx-2 p-1 link"  onClick={()=> navigate('/contact')}>Contact</p>
            </div>

            {/* Links on small screen */}
            
            <div className=" md:hidden links flex w-1/3 justify-between items-center">
              <button onClick={()=> setMode(!mode)} className='bg-gray-100' style={{color:'#718096',borderRadius:'50%',width:'44px',height:'44px',padding:'8px'}}> 
                {
                  mode ? <span style={{width:'24',height:'24px'}} >
                  <svg style={{width:'100%',height:'100%'}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
                  </span>
                  : 
                  <span style={{width:'24',height:'24px'}} >
                  <svg style={{width:'100%',height:'100%'}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
                  </span>
                }
              
              </button>

              <button  className='bg-gray-100' style={{color:'#718096',borderRadius:'50%',width:'44px',height:'44px',padding:'8px'}}> 
              <span style={{width:'24',height:'24px'}}>
              <svg  style={{width:'100%',height:'100%'}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
              </span>
              </button>
              <button  className='bg-gray-100' style={{color:'#718096',borderRadius:'50%',width:'44px',height:'44px',padding:'8px'}}> 
               <span style={{width:'24px',height:'24px'}}>
              <svg style={{width:'100%',height:'100%'}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
              </span>
                        
              </button>

            </div>

            {/* Toggle Button */}
            <div className="toggle-button hidden md:block  ">
              
              <button onClick={()=> handleClick()} aria-label="Toggle dark mode" className={`${mode ?  'light': 'dark flex-row-reverse'} ml-2 px-1 text-white flex justify-between items-center`}> 
               
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
