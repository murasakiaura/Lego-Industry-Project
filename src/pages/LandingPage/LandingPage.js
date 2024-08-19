import "./LandingPage.scss"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link, useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
  function navigationIdea() {
    navigate("/giftIdeas");
  }
    return (
        <>
        <Carousel className='landing' autoPlay infiniteLoop showThumbs={false}>
            <div className='landing__element-wrapper landing__main-img'>
                {/* <img className='landing__image' src={wizardImg} alt="Slide 1" /> */}
                {/* <div className='landing__hero-container'> */}
                <h2 className='landing__heading'>LEGO Gift Finder</h2>
                <p className="landing__text">Try out new Gift Finder and let us find a set that just CLICKS!</p>
                <button className='landing__button' onClick={navigationIdea}>Gift Finder </button>
                {/* </div> */}
            </div>
            <div className='landing__element-wrapper landing__side1-img'>
                {/* <img className='landing__image' src="https://www.lego.com/cdn/cs/set/assets/bltb2886ed0c867b39e/AugustNovelty-Homepage-202408-Hero-Standard-Small.jpg?fit=crop&format=webply&quality=80&width=600&height=600&dpr=2" alt="Slide 2" />
                */}
                <h2 className='landing__heading'>Come and see whats new</h2>
                <p className="landing__text landing__text-side1">Explore these and other amazing new arrivals.</p>
                <button className='landing__button'>Shop now</button>

            </div>
            <div className='landing__element-wrapper landing__side2-img'>
                {/* <img className='landing__image' src="https://www.lego.com/cdn/cs/set/assets/blt8aead4f73a1ec4db/1946-DreamZzz-202408-HP-Hero-Standard-71486-71484-Medium.jpg?format=webply&fit=crop&quality=60&width=900&height=445&dpr=2" alt="Slide 3" />
                <div className='landing__hero-container'> */}
                <h2 className='landing__heading'>Dream it. Build it.</h2>
                <p className="landing__text landing__text-side1">Awaken kids creativity with new sets they can build and rebuild.</p>
                <button className='landing__button'>Shop Now</button>
                {/* </div> */}
            </div>
        </Carousel>
        </>
    );
};

export default Landing;