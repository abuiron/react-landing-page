import React from 'react'


function Features({e}) {
  return <>
  
  {/*<!-- Image Showcases--> */}
                {e.side?<div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img"  style={{backgroundImage :`url(${e.image})`}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{e.imgHeading}</h2>
                        <p className="lead mb-0">{e.imgPara}</p>
                    </div>
                </div>:
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img"  style={{backgroundImage :`url(${e.image})`}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{e.imgHeading}</h2>
                        <p className="lead mb-0">{e.imgPara}</p>
                    </div>
                </div>}
  </>
}

export default Features