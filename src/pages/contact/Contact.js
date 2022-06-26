import React from 'react'

const Contact = () => {
  return (
    <div className="contact bg-gray-100 min-h-screen w-full mt-20">
       <div className="contact-container mx-28 flex justify-between pt-16">

          {/* Lets Connect and Form Section  */}

          <div className="connect-section " style={{width:'64%'}}>
            <h1 className='text-5xl font-extrabold text-gray-700 mb-4'>Let's Connect</h1>
            <p style={{fontSize:'20px',color:'rgb(113, 128, 150)',lineHeight:'36px'}}>FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.</p>

            {/* Form Section  */}

            <div className="form mt-16 p-8 flex flex-wrap justify-between" style={{width:'100%',borderRadius:'8px',backgroundColor:'white'}}
            >
                <div className="name-field" style={{width:'48%'}} >
                  <label htmlFor="name">Name</label>
                  <input type="text" style={{width:'100%',backgroundColor:'rgb(226, 232, 240)'}} />
                </div>
                <div className="company-name" style={{width:'48%'}} >
                  <label htmlFor="company-name" >Company Name</label>
                  <input type="text" style={{width:'100%',backgroundColor:'rgb(226, 232, 240)'}}/>
                </div>
                <div className="email" style={{width:'48%'}}>
                  <label htmlFor="email" >Email</label>
                  <input type="email" placeholder='email@example.com' style={{width:'100%',backgroundColor:'rgb(226, 232, 240)'}} />
                </div>
                <div className="phone-number" style={{width:'48%'}} >
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
                  <button type="submit"  style={{backgroundColor:'rgb(226,232,240)',padding:'0.5rem 1rem',minWidth:'10rem',borderRadius:'9999px',marginTop:'1rem',  color:'rgb(113, 128, 150)'}}>
                  Submit</button>
                </div>
            </div>

          </div>


          {/* Side Bar */}
          <div className="sider-bar border-2" style={{width:'30%',fontSize:'1.5rem',fontWeight:'700',color:'rgb(113, 128, 150)'}}>
            <h1 className='text-center' style={{marginBottom:'3.5rem'}}>Our Commitment </h1>
            <div className="box1" style={{backgroundColor:'white',fontWeight:'400',fontSize:'1rem',borderRadius:'8px',padding:'32px',lineHeight:'28px'}}>
                  <p>We take our commitment to our users seriously. If you need our help with your project, have questions about how to use the site or are experiencing any technical difficulties, please do not hesitate to contact us.</p>
            </div>
            <h1 className='text-center' style={{margin:'3.5rem 0'}}>Advertise With Us</h1>
            <div className="box1" style={{backgroundColor:'white',fontWeight:'400',fontSize:'1rem',borderRadius:'8px',padding:'32px',lineHeight:'28px'}}>
                  <p style={{minWidth:'0',marginBottom:'1rem'}}>Interesting in working together?</p>
                  <p style={{marginBottom:'1rem'}}>Suspendisse potenti. Mauris mollis diam tempus ut.</p>
                  <div className="links-logo">
                  
                  </div>
            </div>
          </div>

       </div>
    </div>
  )
}

export default Contact