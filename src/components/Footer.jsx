import React from 'react'

function Footer() {
  return <>
  {/*<!-- Footer--> */}
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Abuiron-s-landing-page 2024. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="https://github.com/abuiron"><i className="bi-github fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="https://wa.me/+916380280076"><i className="bi-whatsapp fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="https://www.instagram.com/abuiron8787"><i className="bi-instagram fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/abuthakir-s/"><i className="bi-linkedin fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  </>
}

export default Footer