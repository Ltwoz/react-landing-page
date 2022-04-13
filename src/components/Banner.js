import React from 'react'
import "./Banner.css"

let bannerData = {
    title : "React landing page",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facere amet quod culpa nisi earum dolorum dolorem numquam nostrum. Modi repudiandae accusantium mollitia sequi eveniet dignissimos natus, illum blanditiis maxime."
}

function Banner() {
  return (
    <div className='banner-bg'>
        <div className="container">
            <div className="banner-con">
                <div className="banner-text">
                    <h1>{bannerData.title}</h1>
                    <p>{bannerData.desc}</p>
                    <a href="#" className='banner-btn'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner