import React from 'react';
import img1 from '../../Images/11.png'
import img2 from '../../Images/22.png'
import img3 from '../../Images/33.png'
import img4 from '../../Images/44.png'
import img5 from '../../Images/55.png'
import img6 from '../../Images/66.png'
import img7 from '../../Images/77.png'
import img8 from '../../Images/88.png'
import img9 from '../../Images/99.png'
import Doctor from '../../Images/WhatsApp Image 2023-06-09 at 10.45.38 PM.jpeg'
import CartoonImage from '../../Images/Imgaes.png'
import paypal from '../../Images/Paypal_2014_logo.png'
import visa from '../../Images/visa-and-mastercard-logo-26.png'
import wafacash from '../../Images/wafacash-logo-D49B08BFA6-seeklogo.com.png'
import cashplus from '../../Images/cashplus-logo-09D6E69FD9-seeklogo.com.png'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import styles from './N9dar.module.css'
import InstructorSlider from '../Slider/Slider';
import RegisterModal from '../modal/RegisterModal'


function N9dar() {
        let FirestSection=[
        {imgsrc:img1,text:'Lorem ipsum dolor sit amet.'},
        {imgsrc:img2,text:'Lorem ipsum dolor sit amet.'},
        {imgsrc:img3,text:'Lorem ipsum dolor sit amet.'},
        {imgsrc:img4,text:'Lorem ipsum dolor sit amet.'},
        {imgsrc:img5,text:'Lorem ipsum dolor sit amet.'},
        {imgsrc:img6,text:'Lorem ipsum dolor sit amet.'},
        {imgsrc:img7,text:'Lorem ipsum dolor sit amet.'},
        {imgsrc:img8,text:'Lorem ipsum dolor sit amet.'},
        {imgsrc:img9,text:'Lorem ipsum dolor sit amet.'},
    ];
    return (
    <>
            <div>
            <RegisterModal/>
            </div>

            <div className=' text-center py-4'>
                <h1 className={styles.title}>N<span className={styles.H_span}>9</span>DAR <span className={styles.H_span}>CONCOURS</span></h1>
                <h4>Intensive preparation programs for admissions</h4>
            </div>
            <section>
                <div className="container">
                    <div className=" row">
                        {FirestSection.map((value,index)=>{
                            return(
                            <div key={index} className="col-lg-4">
                                <div className={styles.ImgCursor}>
                                <img  className=' w-100' src={value.imgsrc} alt="photos"/>
                                <p className={styles.ImageParagraph}>{value.text}</p>
                                </div>
                            </div> 
                            )
                        })}
                    </div>
                </div>
                </section>
            
            <section>
                <div className={styles.SectionTwo}>
                    <div className=' container py-5'>
                    <div className="row">
                        <h2 >DO you want to be admitted to your dream studies ?</h2>
                        <h2 className={styles.SectionH2}>Let us assist you in reaching your aspirations.</h2>
                        <div className="col-lg-6">
                    <div className=" mt-5">
                            <ul type='none'>
                            <li className={styles.Sec2List}><BsFillPlayCircleFill className=' text-danger'/>Comprehensive preparation for all exams related to schools and higher education institutions.</li>
                            <li className={styles.Sec2List}><BsFillPlayCircleFill className=' text-danger'/> Live one-hour session with a teacher every day, exclusively for answering your questions for a week.</li>
                            <li className={styles.Sec2List}><BsFillPlayCircleFill className=' text-danger'/>  Assistance in preparing the required electronic application file.</li>
                            <li className={styles.Sec2List}><BsFillPlayCircleFill className=' text-danger'/>  Preparation of all necessary documents during registration.</li>
                            <li className={styles.Sec2List}><BsFillPlayCircleFill className=' text-danger'/>  Assistance with registration and application on school and institution websites.</li>
                            <li className={styles.Sec2List}><BsFillPlayCircleFill className=' text-danger'/>  Tracking of accepted applicants during initial selection.</li>
                            <li className={styles.Sec2List}><BsFillPlayCircleFill className=' text-danger'/>  Inquiring about the results of accepted applicants in the final results or waitlist.</li>
                            <li className={styles.Sec2List}><BsFillPlayCircleFill className=' text-danger'/>  Live chat with a dedicated team via WhatsApp.</li>
                            </ul>
                    </div>
                        </div>
                        <div className="col-lg-6">
                            <img className=' w-100' src={Doctor} alt="photos" />
                        </div>
                        <button className='btn btn-outline-danger w-25 m-auto fw-bold rounded-5'> I want to register</button>
                    </div>
                </div>
                </div>

            </section>

            <section className=' py-5'>
                <h2 className=' text-center py-3'>Take advantage of N9dar's <span className={styles.H_span}>"Sign Me Up"</span>  service now!</h2>
                <div className={styles.SectionThree}>
                    <div className=" container">
                        <div className="row">
                            <div className=" col-lg-5">
                                <img className=' w-100' src={CartoonImage} alt="photos" />
                            </div>
                            <div className=" col-lg-7 ">
                                <h2 className=' text-center py-4'>By choosing one of the above offers , <br /> you will benefit from this service for free.</h2>
                                
                            <div className=' mt-5'>
                                <h4 className={styles.Section_H4}>You just need</h4>
                                <ul type='none'>
                            <li className={styles.Sec3List}><BsFillPlayCircleFill className=' text-danger'/>to get in touch with our team</li>
                            <li className={styles.Sec3List}><BsFillPlayCircleFill className=' text-danger'/> Send your documents</li>
                            <li className={styles.Sec3List}><BsFillPlayCircleFill className=' text-danger'/>  Choose the schools </li>
                            <li className={styles.Sec3List}><BsFillPlayCircleFill className=' text-danger'/> Or services you want directly</li>
                            </ul>
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className=' text-center mt-5'>
                <h2 >Do you already have an account on the site?</h2>
                <button className='btn btn-outline-danger w-25 fw-bold rounded-5 mt-5' > Please log in</button>
                </div>
            </section>

            <div className={styles.payment}>
                <h1> <span className={styles.payment_Span}>Various and different payment methods</span>  to facilitate the purchase <br /> process and benefit from the service.</h1>
                <div className={styles.paymentImages}>
                    <img className={styles.payImg} src={paypal} alt="pho" />
                    <img className={styles.payImg} src={visa} alt="pho" />
                    <img className={styles.payImg} src={wafacash} alt="pho" />
                    <img className={styles.payImg} src={cashplus} alt="pho" />
                </div>
            </div>

            <section>
                <div className=' text-center mt-5'>
                <h2 className={styles.Section4_H2}>Find an instructor</h2>
                <h3>Discover your ideal instructor with our platform</h3>
                </div>

                <div>
                <InstructorSlider/>
                </div>

                <h2 className=' text-center py-5'>Together with us to succeed and make your dreams come true</h2>
            </section>
            </>
    )
}

export default N9dar;


