import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt=''/>
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Liberio</h2>
            <p className='fs-17 description'>Welcome to Liberio – Your Gateway to a World of Books!

                <p>Liberio is your go-to destination for a vast collection of books sourced from across the web. Explore a diverse array of titles, from timeless classics to contemporary bestsellers, all curated with care. Our user-friendly interface makes discovering and navigating through our extensive library a breeze.</p>

                <p>What Sets Us Apart:Comprehensive Collection: Dive into a rich assortment of books spanning various genres.
                User-Friendly Interface: Seamlessly navigate to find your next favorite read.
                Powered by Open Library: Trust in accurate and up-to-date information sourced from the Open Library API.</p>
                
                <p>Our Mission: At Liberio, we're dedicated to making literature accessible to all, fostering a love for reading regardless of your level of expertise.</p>

                <p>How It Works:
                Search and Discover: Find specific titles or explore based on your favorite genres.
                Book Details: View comprehensive information, including descriptions and covers.
                Personalized Reading Lists: Create and manage your own reading lists.
                Embark on a literary adventure with Liberio – Start exploring now!</p>
                
                <p>Created by Louie Lywton, Jonathan Woen, and Nicolas Baron Brahmantyo.</p>
              
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About