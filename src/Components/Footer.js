import React from 'react'
import facebook from "../logo/facebook.png"
import intagram from "../logo/instagram.png"
import twitter from "../logo/twitter.png"
import youtube from "../logo/youtube.png"
import "./Footer.css"
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const nav = useNavigate();
    return (
        <div className='footerContainner'>
            <div >
                <h2 className='about'>AboutUs</h2>
                <hr className='footerHr' />
                <span className='blo-des'>This Project Based on Front-end-label & Build by Html,Css & React
                </span>
                <div className='displayFt'>
                    <img className='footerLogo' alt='not found' src={facebook} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={intagram} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={twitter} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={youtube} height={50} width={50} />
                </div>
            </div>
            <div>
                <h2 className='about1'>Social Media Link</h2>
                <hr className='footerHr1' />
                <span className='links1' onClick={() => {
                    nav("/")
                }}>Facebook</span>
                <span className='links1' onClick={() => {
                    nav("/fitness")
                }}>Instragram</span>
                <span className='links1' onClick={() => {
                    nav("/technology")
                }}>Twitter</span>
                <span className='links1'>You Tube</span>

            </div> <div>
                <h2 className='about1'>Ours  Services</h2>
                <hr className='footerHr1' />
                <span className='links1'>Bollywood</span>
                <span className='links1'>Hollwywood</span>
                <span className='links1'>fitness</span>

                <span className='links1'>fitness Food</span>
                <span className='links1'>Technology</span>
            </div> <div>
                <h2 className='about1'> Contact:- </h2>
                <hr className='footerHr1' />
                <span>Upasana Asati</span>

                <span>Please Tell your Queries......</span>

                <input type='text' placeholder='Write here' className='question' />
                <button className='qsend'>Send</button>
            </div>
        </div>
    )
}

export default Footer
