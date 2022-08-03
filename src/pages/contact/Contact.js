import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = ({ black }) => {
  let icons = [
    {
      icon: "fa fa-phone",
      value: "+1 (888) 888-8888",
    },
    {
      icon: "fa fa-envelope",
      value: "email@example.com",
    },
    {
      icon: "fa fa-send",
      value: "New York, NY",
    },
  ];
  useEffect(()=>{
    AOS.init({
      duration:750
    })
    AOS.refresh()
  })
  return (
    <div
      className="contact min-h-screen w-full "
      style={{
        backgroundColor: `${black ? "#1A202C" : "rgb(243 244 246)"}`,
        border: "1px solid transparent",
      }}
    >
      <div
        className="margin-top"
        style={{ marginTop: "32px", borderTop: "2px solid transparent" }}
      ></div>

      <div className="contact-container mx-3 md:mx-36 flex justify-between py-8 md:py-16" data-aos="fade-up" data-aos-delay="0">
        {/*  Connect and Form Section  */}

        <div className="connect-section md:w-4/6 w-full ">
          <h1
            className=" text-2xl md:text-5xl font-black mb-4"
            style={{
              color: `${black ? "rgb(237, 242, 247)" : "rgb(55 65 81)"}`,
            }}
          >
            Let's Connect
          </h1>
          <p
            className="text-base md:text-xl"
            style={{
              color: `${black ? "rgb(237, 242, 247)" : "rgb(113,128,150)"}`,
              lineHeight: "36px",
            }}
          >
            FlexiBlog theme comes with a pre-made contact form component. You
            can integrate this form with serverless services such as Formspree,
            Getform, FormKeep and others to receive form submissions via email.
          </p>

          {/* Form Section  */}

          <div
            className="form mt-16 p-8 flex flex-wrap justify-between"
            style={{
              width: "100%",
              borderRadius: "8px",
              backgroundColor: `${black ? "rgb(45, 55, 72)" : "white"}`,
            }}
          >
            <div className="name-field md:w-48 w-full mr-2">
              <label htmlFor="name" style={{ color: "rgb(113, 128, 150)" }}>
                Name
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  backgroundColor: `${
                    black ? "#718096" : "rgb(226, 232, 240)"
                  }`,
                }}
              />
            </div>
            <div className="company-name md:w-48 w-full">
              <label
                htmlFor="company-name"
                style={{ color: "rgb(113, 128, 150)" }}
              >
                Company Name
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  backgroundColor: `${
                    black ? "#718096" : "rgb(226, 232, 240)"
                  }`,
                }}
              />
            </div>
            <div className="email md:w-48 w-full">
              <label
                htmlFor="email"
                style={{
                  color: `${
                    black ? "rgb(203, 213, 224)" : "rgb(113, 128, 150)"
                  }`,
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                style={{
                  width: "100%",
                  backgroundColor: `${
                    black ? "#718096" : "rgb(226, 232, 240)"
                  }`,
                }}
              />
            </div>
            <div className="phone-number md:w-48 w-full">
              <label
                htmlFor="number"
                style={{
                  color: `${
                    black ? "rgb(203, 213, 224)" : "rgb(113, 128, 150)"
                  }`,
                }}
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="(XXX) XXX-XXXX"
                style={{
                  width: "100%",
                  backgroundColor: `${
                    black ? "#718096" : "rgb(226, 232, 240)"
                  }`,
                }}
              />
            </div>
            <div className="subject" style={{ width: "100%" }}>
              <label
                htmlFor="subject"
                style={{
                  color: `${
                    black ? "rgb(203, 213, 224)" : "rgb(113, 128, 150)"
                  }`,
                }}
              >
                Subject
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  backgroundColor: `${
                    black ? "#718096" : "rgb(226, 232, 240)"
                  }`,
                }}
              />
            </div>
            <div className="message" style={{ width: "100%" }}>
              <label
                htmlFor="message"
                style={{
                  color: `${
                    black ? "rgb(203, 213, 224)" : "rgb(113, 128, 150)"
                  }`,
                }}
              >
                Your Message
              </label>
              <textarea
                type="text"
                style={{
                  width: "100%",
                  minHeight: "100px",
                  backgroundColor: `${
                    black ? "#718096" : "rgb(226, 232, 240)"
                  }`,
                }}
              />
            </div>
            <div className="button">
              <button
                type="submit"
                style={{
                  backgroundColor: "#5a67d8",
                  padding: "0.5rem 1rem",
                  minWidth: "10rem",
                  borderRadius: "9999px",
                  marginTop: "1rem",
                  color: "rgb(237, 242, 247)",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Side Bar */}
        <div
          className="sider-bar md:block hidden px-12"
          style={{
            width: "35%",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: `${black ? " rgb(226, 232, 240)" : "rgb(113, 128, 150)"}`,
          }}
        >
          <h1 className="text-center" style={{ marginBottom: "3.5rem" }}>
            Our Commitment{" "}
          </h1>
          <div
            className="box1"
            style={{
              backgroundColor: `${black ? "rgb(45, 55, 72)" : "white"}`,
              fontWeight: "400",
              fontSize: "1rem",
              borderRadius: "8px",
              padding: "32px",
              lineHeight: "28px",
            }}
          >
            <p
              style={{
                color: `${black ? "rgb(203, 213, 224)" : "rgb(113, 128, 150)"}`,
              }}
            >
              We take our commitment to our users seriously. If you need our
              help with your project, have questions about how to use the site
              or are experiencing any technical difficulties, please do not
              hesitate to contact us.
            </p>
          </div>
          <h1 className="text-center" style={{ margin: "3.5rem 0" }}>
            Advertise With Us
          </h1>
          <div
            className="box1"
            style={{
              backgroundColor: `${black ? "rgb(45, 55, 72)" : "white"}`,
              fontWeight: "400",
              fontSize: "1rem",
              borderRadius: "8px",
              padding: "32px",
              lineHeight: "28px",
            }}
          >
            <p
              style={{
                minWidth: "0",
                marginBottom: "1rem",
                color: `${black ? "rgb(203, 213, 224)" : "white"}`,
              }}
            >
              Interesting in working together?
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Suspendisse potenti. Mauris mollis diam tempus ut.
            </p>
            <ul className="links-logo ">
              {icons.map((value) => (
                <div className="flex  items-center ">
                  <button
                  className="contact-button"
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "9999px",
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      marginRight:'0.4rem',
                      
                    }}
                  >
                    <i
                      className={`${value.icon} text-2xl icon ${black ? 'dark-icon':'light-icon'}`}
                      
                    />
                  </button>
                  <p>{value.value}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
