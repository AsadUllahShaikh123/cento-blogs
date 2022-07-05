import React from 'react'

const RelatedCards = ({cardData}) => {
  return (
    <div className="related-cards p-2">
          <div className='articles'>
            <article style={{borderLeft:'5px solid #a3bffa',backgroundColor:'white',borderRadius:'8px'}}>
              <div style={{padding:'16px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                  <a href="#related" style={{fontWeight:'600',color:'rgb(45, 55, 72)'}}>{cardData.articleHeading}</a>
                  <div style={{display:'flex',alignItems:'center',width:'100%'}}>
                      <div style={{display:'flex',flexWrap:'wrap',
                      flex:'1',justifyContent:'space-between'}}>
                          <div>
                            <a href="name" style={{color:'#718096',fontSize:'12px',fontWeight:'700'}}>
                              <strong >{cardData.author}</strong>
                            </a>
                          </div>
                          <div className='time' style={{fontSize:'12px',fontWeight:'400',color:'rgb(160, 174, 192)',display:'flex',alignItems:'center'}}>
                            <div style={{display:'inline-block'}}>April 16, 2020</div>
                            <div style={{display:'flex',alignItems:'center'}} >
                            <svg style={{verticalAlign:'middle'}}stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                            1 
                            min 
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
            </article>
          </div>
    </div>
  )
}

export default RelatedCards