import React from 'react'
import "./Content.css"

function Content() {
  return (
    <div className='container'>
        <section className="content-con">
            <div className="content-l">
                <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
            </div>
            <div className="content-r">
                <h2>Some Title</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero cum soluta illo excepturi, maxime perspiciatis incidunt fugit aliquam laudantium ipsa magni tenetur. Alias vero ab minus sint fuga consequatur deleniti.
                </p>
            </div>
        </section>
        <section className="content-con">
            <div className="content-r">
                <h2>Some Title</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero cum soluta illo excepturi, maxime perspiciatis incidunt fugit aliquam laudantium ipsa magni tenetur. Alias vero ab minus sint fuga consequatur deleniti.
                </p>
            </div>
            <div className="content-l">
                <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
            </div>
        </section>
        <section className="content-con">
            <div className="content-l">
                <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
            </div>
            <div className="content-r">
                <h2>Some Title</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero cum soluta illo excepturi, maxime perspiciatis incidunt fugit aliquam laudantium ipsa magni tenetur. Alias vero ab minus sint fuga consequatur deleniti.
                </p>
            </div>
        </section>
    </div>
  )
}

export default Content