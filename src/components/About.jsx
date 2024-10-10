import React from "react"
import "../css/About.css"
function About(){
    return (
        <>
            <section id="about-section" className="about-section container-fluid">
                <div className="row about-info">
                    <h1 className="text-center about-title" data-aos="fade-up">ABOUT</h1>
                    <p className="about-desk" data-aos="fade-up" data-aos-delay="200">
                    <span>Black Myth: Wukong</span> is an epic action-adventure game inspired by the legendary Chinese tale <span>Journey to the West</span>. Players step into the role of the Monkey King, wielding extraordinary powers and engaging in intense, cinematic combat against mythical creatures. With stunning visuals, fluid gameplay, and a rich, immersive world, Black Myth: Wukong promises a breathtaking journey through ancient China, blending myth and fantasy in a truly captivating experience.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About