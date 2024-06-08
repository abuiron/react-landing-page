import React from 'react'
import './App.css'
import Call from './components/Call'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Service from './components/Service'
import fdimg1 from './assets/img/bg-showcase-1.jpg'
import fdimg2 from './assets/img/bg-showcase-2.jpg'
import fdimg3 from './assets/img/bg-showcase-3.jpg'
import rdimg1 from './assets/img/testimonials-1.jpg'
import rdimg2 from './assets/img/testimonials-2.jpg'
import rdimg3 from './assets/img/testimonials-3.jpg'

function App() {

  let serviceData = [
    {
      icon: "bi-window m-auto text-primary",
      heading: "Fully Responsive",
      para: "This theme will look great on any device, no matter the size!",
    },
    {
      icon: "bi-layers m-auto text-primary",
      heading: "Bootstrap 5 Ready",
      para: "Featuring the latest build of the new Bootstrap 5 framework!",
    },
    {
      icon: "bi-terminal m-auto text-primary",
      heading: "Easy to Use",
      para: "Ready to use with your own content, or customize the source files!",
    },
  ];

  let featuresData = [
    {
      image: fdimg1,
      side: true,
      imgHeading: "Fully Responsive Design",
      imgPara:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone,tablet, or desktop the page will behave responsively!",
    },
    {
      image: fdimg2,
      side: false,
      imgHeading: "Updated For Bootstrap 5",
      imgPara:
        "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5! ",
    },
    {
      image: fdimg3,
      side: true,
      imgHeading: "Easy to Use & Customize",
      imgPara:
        " Landing Page is just HTML and CSS with a splash of SCSS forusers who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
  ];

  let reviewsData = [
    {
      rImg: rdimg1,
      rName: "Margaret E.",
      rPara: "This is fantastic! Thanks so much guys!",
    },
    {
      rImg: rdimg2,
      rName: "Fred S.",
      rPara:
        "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    },
    {
      rImg: rdimg3,
      rName: "Sarah W.",
      rPara:
        "Thanks so much for making these free resources available to us!",
    },
  ];


  return <>
  
  {/*Navbar */}
  <Navbar></Navbar>

  {/*header */}
  <Header></Header>

  {/*Service */}
  
  <section className="features-icons bg-light text-center">
            <div className="container">
            <h2 className="mb-5">Our services</h2>
                <div className="row">
                    {
                      serviceData.map((e,i)=>{

                        return<Service  e={e} key={i}></Service>

                        
                      })
                    }
                </div>
            </div>
        </section>

  {/*Features */}
  
  <section className="showcase">
            <div className="container-fluid p-0">
            <h2 className="mb-5">Features..?</h2>
                {
                  featuresData.map((e,i)=>{

                    return <Features e={e} key={i}></Features>
                  })
                }
            </div>
        </section>

  {/*Reviews */}
  
  <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {
                      reviewsData.map((e,i)=>{

                        return <Reviews e={e} key={i}></Reviews>
                      })
                    }
                </div>
            </div>
        </section>

  {/*Call */}
  <Call></Call>

  {/*Footer */}
  <Footer></Footer>


  </>
}

export default App