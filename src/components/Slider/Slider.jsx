import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../Images/A1.png'
import img2 from '../../Images/A2.png'
import img3 from '../../Images/A4.png'
import img4 from '../../Images/A5.png'
import styles from '../Slider/Slider.module.css'

export default class Rtl extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
    <div className={styles.card_slider}>
                <Slider {...settings}>
                    <div className={styles.one}>
                          <img className='w-50 rounded-circle mx-auto' src={img1} alt="pho" />
                          <h2>Said</h2>
                          <h5>First lesson free</h5>
                          <h6>$20/hou</h6>
                          <h5>soutien scolaire et aide au devoir...</h5>
                          <div className={styles.shad}>
                              I am a PhD student in Physics.
                              I am available to provide tutoring in English, Chemistry, Mathematics, and Physics.
                          </div>
                          <h6>Marrakech, Essaouira</h6>
                          <h6>Travels to your location</h6>
                    
                    </div>
                    <div className={styles.two}>
                          <img className='w-50 rounded-circle mx-auto' src={img4} alt="pho" />
                          <h2>Hind</h2>
                          <h5>First lesson free</h5>
                          <h6>$20/hou</h6>
                          <h5>soutien scolaire et aide au devoir...</h5>
                          <div className={styles.shad}>
                              I am a PhD student in Physics.
                              I am available to provide tutoring in English, Chemistry, Mathematics, and Physics.
                          </div>

                              <h6>Bordeaux, Toulouse</h6>
                              <h6>Distance learning</h6>
                        </div>

                        <div className={styles.one}>
                            <img className='w-50 rounded-circle mx-auto' src={img2} alt="pho" />
                            <h2>Sami</h2>
                            <h5>First lesson free</h5>
                            <h6>$20/hou</h6>
                            <h5>soutien scolaire et aide au devoir...</h5>
                            <div className={styles.shad}>
                                I am a PhD student in Physics.
                                I am available to provide tutoring in English, Chemistry, Mathematics, and Physics.
                            </div>

                            <h6>Rabat</h6>
                            <h6>Travels to your location</h6>
                        </div>

                        <div className={styles.two}>
                              <img className='w-50 rounded-circle mx-auto' src={img3} alt="pho" />
                              <h2>Océane</h2>
                              <h5>First lesson free</h5>
                              <h6>$20/hou</h6>
                              <h5>soutien scolaire et aide au devoir...</h5>
                              <div className={styles.shad}>
                                  I am a PhD student in Physics.
                                  I am available to provide tutoring in English, Chemistry, Mathematics, and Physics.
                              </div>

                              <h6>Casablanca</h6>
                              <h6>In-person classes</h6>
                        </div>
        </Slider>
    </div>

      </>
    );
  }
}