import React , { useState} from "react";
import Modal from 'react-modal';
import Styles from '../modal/RegisterModal.module.css'
function RegisterModal()
{
    const [modalIsopen,setModalIsOpen] = useState(false);
    
        let FirestSection=[
            { imgsrc:require('../../Images/11.png'),text:'Lorem ipsum dolor sit amet.'},
            { imgsrc: require('../../Images/22.png'),text:'Lorem ipsum dolor sit amet.'},
            { imgsrc: require('../../Images/33.png'),text:'Lorem ipsum dolor sit amet.'},
            { imgsrc: require('../../Images/44.png'),text:'Lorem ipsum dolor sit amet.'},
            { imgsrc: require('../../Images/55.png'),text:'Lorem ipsum dolor sit amet.'},
            { imgsrc: require('../../Images/66.png'),text:'Lorem ipsum dolor sit amet.'},
            { imgsrc: require('../../Images/77.png'),text:'Lorem ipsum dolor sit amet.'},
            { imgsrc: require('../../Images/88.png'),text:'Lorem ipsum dolor sit amet.'},
            { imgsrc: require('../../Images/99.png'),text:'Lorem ipsum dolor sit amet.'},
    ];

    return(
    <div className="App">
            <section>
                <div className="container">
                    <div className=" row">
                        {FirestSection.map((value,index)=>{
                            return(
                            <div key={index} className="col-lg-4">
                                <div className={Styles.ImgCursor}>
                                <img  className=' w-100' src={value.imgsrc} onClick={()=>{setModalIsOpen(true)}}  alt="photos"/>
                                <p className={Styles.ImageParagraph}>{value.text}</p>
                                </div>
                            </div> 
                            )
                        })}
                    </div>
                </div>
            </section>
    <Modal isOpen={modalIsopen} onRequestClose={()=>setModalIsOpen(false)} className={Styles.FormStyle}>
            <div className=" text-center mt-3">
                <h2>Please fill out the <br /> following form to register</h2>
            </div>
        <div className=' w-75 mt-3 m-auto'>
            <form >
                    <input type="text" name="Fname"  className=' form-control my-5' placeholder='Full name'/>
                    <input type="email" name="email"  className=' form-control my-5' placeholder='Email'/>
                    <input type="number" name="Phone"   className=' form-control my-5' placeholder='Phone number'/>
                    <select name="pets" id="pet-select" className=" form-control my-5">
                        <option value="">Field of study</option>
                        <option value="SPC">SPC</option>
                        <option value="SVT">SVT</option>
                        <option value="SM A">SM A</option>
                        <option value="SM B">SM B</option>
                        <option value="Eco">Eco</option>
                    </select>
                    <select name="pets" id="pet-select" className=" form-control my-5">
                        <option value="FMP">Concours FMP (1000 Dhs)</option>
                        <option value="TAFEM">Concours TAFEM (1000 Dhs)</option>
                        <option value="ISPITS">Concours ISPITS (1000 Dhs)</option>
                        <option value="CPGE">Concours CPGE (800 Dhs)</option>
                        <option value="ENSA">Concours ENSA (1000 Dhs)</option>
                        <option value="ENAM">Concours ENAM (1000 Dhs)</option>
                        <option value="ENSAM">Concours ENSAM (1000 Dhs)</option>
                        <option value="ENA">Concours ENA (1000 Dhs)</option>
                        <option value="ÉTUDIER">Concours ÉTUDIER EN FRANCE (1000 Dhs)</option>
                    </select>
                <div className=" text-center">
                    <button type="submit" className=' btn btn-outline-primary w-50 '>I am registering</button>
                </div>
            </form>
                <div>
                    <button className=' btn btn-danger mt-3' onClick={()=>setModalIsOpen(false)}>close</button>
                </div>
        </div>
    </Modal>
    </div>
    )

}
export default RegisterModal;