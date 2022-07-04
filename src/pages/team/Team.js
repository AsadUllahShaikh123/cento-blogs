import React from "react";

const Team = ({black}) => {
  let teamData = [
    {
      name: "Jane Smith",
      profession: "Creative Designer",
      image:'/images/author/jane.webp',
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio.",
      expertise: ["Advertising", "Business", "Designer"],
      socialMedia: [
        {
          icon: "fa fa-instagram",
          value: "instagram",
          color: "red",
        },
        {
          icon: "fa-brands fa-twitter",
          value: "twitter",
          color: "blue",
        },
        {
          icon: "fa fa-globe",
          value: "website",
          color: "black",
        },
      ],
    },
    {
      name: "John Doe",
      profession: "Web Developer",
      image:'/images/author/john.webp',
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio.",
      expertise: ["ASP.NET", "Assembly", "Javascript"],
      socialMedia: [
        {
          icon: "fa fa-instagram",
          value: "instagram",
          color: "red",
        },
        {
          icon: "fa-brands fa-twitter",
          value: "twitter",
          color: "blue",
        },
        {
          icon: "fa fa-globe",
          value: "website",
          color: "black",
        },
      ],
    },
    {
      name: "Steve Grant",
      profession: "Product Designer",
      image:'/images/author/steve.webp',
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio.",
      expertise: ["Public Relation", "Market Analyst", "Designer"],
      socialMedia: [
        {
          icon: "fa fa-instagram",
          value: "instagram",
          color: "red",
        },
        {
          icon: "fa-brands fa-twitter",
          value: "twitter",
          color: "blue",
        },
        {
          icon: "fa fa-globe",
          value: "website",
          color: "black",
        },
      ],
    },
  ];
  return (
  <>
    <div className="team flex  flex-col flex-1" style={{ backgroundColor: `${black ? 'rgb(26, 32, 44)':"rgb(248, 248, 248)"}` }}>
    <div className="margin-top" style={{marginTop:'32px',border:'2px solid transparent'}}></div>
      <div className="team-container md:mx-32 mx-4">
        {/* Heading */}
        <div className="heading mb-8">
          <h1 className="mb-2" style={{fontSize:'48px',fontWeight:'900',color:'rgb(45, 55, 72)'}}>Team Members</h1>
          <p style={{fontSize:'20px',color:'rgb(113, 128, 150)'}}>
            FlexiBlog theme comes with a pre-made contact form component.You can
            integrate this form with serverless services such as
            Formspree,Getform,FormKeep and others to recieve form submissions
            via email
          </p>
        </div>

        {/* Cards/boxes  */}
        

        
        {teamData.map((value) => (
          <>
          <div className="main-box rounded-lg px-4 py-6 mb-4 w-full  " style={{backgroundColor:`${black ? 'rgb(45, 55, 72)' : 'white'}`}}>
            <div className="team-box flex md:justify-between 
             md:flex-row flex-col items-center  w-full ">
              <div className=" hover:cursor-pointer image-box  md:w-1/4 w-full mb-4 md:m-0 flex justify-center items-center ">
                <div className="image rounded-full  flex justify-center items-center" style={{width:'160px',height:'160px'}}>
                <img
                  className="rounded"
                  src={value.image}
                  alt=""
                  srcset=""
                  style={{ width: "150px", height: "150px",borderRadius:'50%' }}
                />
                </div>
              </div>  
              <div className="content-box md:w-2/3 w-full  ">
                <div className="heading-name ">
                  <h1
                    className="text-xl font-bold mb-4 inline-block cursor-pointer  md:text-start text-center"
                    style={{ color: "rgb(90, 103, 218)" }}
                  >
                    {value.name}
                  </h1>
                </div>
                <div className="content w-full  md:flex md:justify-between">
                  <div className="intro md:w-3/4 md:text-start  w-full text-center ">
                    <h2
                      className=" font-semibold mb-4"
                      style={{ color: "rgb(113, 128, 150)" }}
                    >
                      {value.profession}
                    </h2>
                    <p
                      style={{
                        color: "rgb(113, 128, 150)",
                        lineHeight: "28.8px",
                      
                      }}
                      className=""
                    >
                      {value.description}
                    </p>
                  </div>

                  <div className="flex justify-between md:justify-around  w-full md:m-0 mt-8">
                  <div className="expertise w-1/2 md:w-1/3  ">
                    <h1
                      className="   font-semibold mb-4"
                      style={{ color: "rgb(113, 128, 150)" }}
                    >
                      Expertise
                    </h1>
                    {value.expertise.map((value) => (
                      <p
                        className="my-2"
                        style={{ color: "rgb(113, 128, 150)" }}
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                  <div className="social-media w-1/2 md:w-1/4  ">
                    <h1
                      className="  font-semibold mb-4"
                      style={{ color: "rgb(113, 128, 150)" }}
                    >
                      Social Media
                    </h1>
                    {value.socialMedia.map((value) => (
                      <p className="my-2" style={{ color: "rgb(113, 128, 150)" }}>
                        <i
                          className={value.icon}
                          style={{ color: value.color,marginRight:'0.7rem' }}
                        />
                        {value.value}
                      </p>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

          </>
        ))}
      </div>
      <div className="margin-top" style={{marginTop:'128px',border:'2px solid transparent'}}></div>
    </div>
    </>
  );
};

export default Team;
