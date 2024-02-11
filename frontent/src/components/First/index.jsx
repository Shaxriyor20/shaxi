import './style.scss'
import Image8 from '../../assets/images/play1.png'
import Image1 from '../../assets/images/play2.png'
import Image6 from '../../assets/images/play3.png'
import Image7 from '../../assets/images/play4.png'
import Image3 from '../../assets/images/About.png'
import Marquee from 'react-fast-marquee';

import NewExcurc from '../NewExcurs';
import About from '../About';
import Galereya from '../Galereya';
import ContactsForm from '../ContactsForm';
import Reviews from '../Reviews';
function Main() {
    return (
    <div>
        <div className="body-v">
            <div className='body-main'>
                <div className="main">
                    <div className="text">
                        <p className="title">ПУТЕШЕСТВУЙ</p>
                        <p className="litle-text">вместе с</p>
                        <p className="subtitle">PERO TRAVEL</p>
                    </div>
                    <button id='btn'>К экскурсиям</button>
                    <br />
                    <br />
                </div>
            </div>
            <Marquee className='marquee' direction='right'>
                <img src={Image1} alt="" />
                <img src={Image8} alt="" /> 
                <img src={Image6} alt="" /> 
                <img src={Image7} alt="" />  
                <img src={Image3} alt="" />  
            </Marquee>
        </div>
        <NewExcurc/>
            <About/> 
            <Galereya/>
            <br />
            <br />
            <br />
            

            <Reviews/>
            <br />
            <ContactsForm/>
    </div>
    );
}

export default Main;