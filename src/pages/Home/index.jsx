import React from 'react'
import './index.css'
import img1 from './images/贝拉.png'
import img2 from './images/嘉然.png'
import img3 from './images/珈乐.png'
import img4 from './images/乃琳.png'
import img5 from './images/向晚.png'
import { Carousel } from 'antd';
const Home = () => {
    const contentStyle = {
        height: '56.6vh',
        color: '#fff',
        lineHeight: '56.6vh',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <Carousel autoplay style={{
            margin: "0 6.6vw 0 6.6vw",
        }}>
            <div>
                <h3 style={contentStyle}>
                    <img src={img1} alt="" />
                </h3>

            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src={img2} alt="" />
                </h3>

            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src={img3} alt="" />
                </h3>

            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src={img4} alt="" />
                </h3>

            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src={img5} alt="" />
                </h3>

            </div>

        </Carousel>

    )
}
export default Home