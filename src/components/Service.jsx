import React from 'react'

function Service({e}) {
  return <>
  {/*<!-- Icons Grid--> */}
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className={e.icon}></i></div>
                            <h3>{e.heading}</h3>
                            <p className="lead mb-0">{e.para}</p>
                        </div>
                    </div>
  </>
}

export default Service