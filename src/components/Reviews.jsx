import React from 'react'


function Reviews({e}) {
  return <>
  
  {/*<!-- Testimonials--> */}
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={e.rImg} alt="..." />
                            <h5>{e.rName}</h5>
                            <p className="font-weight-light mb-0">"{e.rPara}"</p>
                        </div>
                    </div>
  </>
}

export default Reviews