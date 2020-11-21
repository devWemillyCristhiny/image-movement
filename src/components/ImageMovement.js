import React from 'react'
import './ImageMovement.css'
import Image1 from '../image/image001.jpg'
import Image2 from '../image/image002.jpg'
import Image3 from '../image/image003.jpg'

export default function(){
    return (
        <div className="container">
            <div className="box">
                <div className="imgBx">
                    <img src={Image1}/>
                </div>
                <div className="contentBx">
                    <div>
                        <h2>Torta de chocolate</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, remaining 
                            essentially unchanged.</p>
                    </div>
                </div>
            </div>
            
            <div className="box">
                <div className="imgBx">
                    <img src={Image2}/>
                </div>
                <div className="contentBx">
                    <div>
                        <h2>Torta de chocolate</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, remaining 
                            essentially unchanged.</p>
                    </div>
                </div>
            </div>
            
            <div className="box">
                <div className="imgBx">
                    <img src={Image3}/>
                </div>
                <div className="contentBx">
                    <div>
                        <h2>Torta de chocolate</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, remaining 
                            essentially unchanged.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

