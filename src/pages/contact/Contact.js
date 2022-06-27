import React from 'react'

const Contact = () => {
  let icons=[
    {
      icon:'fa fa-phone',
      value:'+1 (888) 888-8888'
    },
    {
      icon:'fa fa-envelope',
      value:'email@example.com'
    },
    {
      icon:'fa fa-send',
      value:'New York, NY'
    }
]
  return (
    <div className="contact bg-gray-100 min-h-screen w-full mt-20">
       <div className="contact-container mx-3 md:mx-36 flex justify-between py-8 md:py-16">

          {/*  Connect and Form Section  */}

          <div className="connect-section md:w-4/6 w-full " >
            <h1 className=' text-2xl md:text-5xl font-black text-gray-700 mb-4'>Let's Connect</h1>
            <p
             className='text-base md:text-xl'
             style={{color:'rgb(113, 128, 150)',lineHeight:'36px'}}>FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.</p>

            {/* Form Section  */}

            <div className="form mt-16 p-8 flex flex-wrap justify-between" style={{width:'100%',borderRadius:'8px',backgroundColor:'white'}}
            >
                <div className="name-field md:w-48 w-full mr-2" >
                  <label htmlFor="name">Name</label>
                  <input type="text" style={{width:'100%',backgroundColor:'rgb(226, 232, 240)'}} />
                </div>
                <div className="company-name md:w-48 w-full" >
                  <label htmlFor="company-name" >Company Name</label>
                  <input type="text" style={{width:'100%',backgroundColor:'rgb(226, 232, 240)'}}/>
                </div>
                <div  className="email md:w-48 w-full" >
                  <label htmlFor="email" >Email</label>
                  <input type="email" placeholder='email@example.com' style={{width:'100%',backgroundColor:'rgb(226, 232, 240)'}} />
                </div>
                <div className="phone-number md:w-48 w-full"  >
                  <label htmlFor="number" >Phone Number</label>
                  <input type="text" placeholder='(XXX) XXX-XXXX' style={{width:'100%',backgroundColor:'rgb(226, 232, 240)'}}/>
                </div>
                <div className="subject" style={{width:'100%'}} >
                  <label htmlFor="subject" >Subject</label>
                  <input type="text" style={{width:'100%',backgroundColor:'rgb(226, 232, 240)'}}/>
                </div>
                <div className="message" style={{width:'100%'}}>
                  <label htmlFor="message" >Your Message</label>
                  <textarea type="text" style={{width:'100%',minHeight:'100px',backgroundColor:'rgb(226, 232, 240)'}}/>
                </div>
                <div className="button">
                  <button type="submit"  style={{backgroundColor:'#5a67d8',padding:'0.5rem 1rem',minWidth:'10rem',borderRadius:'9999px',marginTop:'1rem',  color:'rgb(237, 242, 247)'}}>
                  Submit</button>
                </div>
            </div>

          </div>


          {/* Side Bar */}
          <div className="sider-bar md:block hidden px-12" style={{width:'35%',fontSize:'1.5rem',fontWeight:'700',color:'rgb(113, 128, 150)'}}>
            <h1 className='text-center' style={{marginBottom:'3.5rem'}}>Our Commitment </h1>
            <div className="box1" style={{backgroundColor:'white',fontWeight:'400',fontSize:'1rem',borderRadius:'8px',padding:'32px',lineHeight:'28px'}}>
                  <p>We take our commitment to our users seriously. If you need our help with your project, have questions about how to use the site or are experiencing any technical difficulties, please do not hesitate to contact us.</p>
            </div>
            <h1 className='text-center' style={{margin:'3.5rem 0'}}>Advertise With Us</h1>
            <div className="box1" style={{backgroundColor:'white',fontWeight:'400',fontSize:'1rem',borderRadius:'8px',padding:'32px',lineHeight:'28px'}}
            >
                  <p style={{minWidth:'0',marginBottom:'1rem'}}>Interesting in working together?</p>
                  <p style={{marginBottom:'1rem'}}>Suspendisse potenti. Mauris mollis diam tempus ut.</p>
                  <ul className="links-logo ">
                      {
                        icons.map(value => 
                        <li className=''> <i className={`${value.icon} hover:bg-blue-500 hover:text-white text-black text-2xl rounded-full px-2 `} /> {value.value}</li>
                        ) 
                      }
                  </ul>
            </div>
          </div>

       </div>
    </div>
  )
}

export default Contact