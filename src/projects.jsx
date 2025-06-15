import React from 'react'
import Card from './Card';
import photography from"./images/photography.jpg"
import ecommerce from"./images/ecommerce.jpg"
import movieMania from"./images/movieMania.png"
import snake from "./images/snake.jpg"
import weather from "./images/weather.png"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: photography,
          altText: 'Photography website',
          title: 'Photography Website',
          description: 'A stunning photography website showcasing a portfolio of breathtaking images, with features for galleries, client proofing, and contact information.',
          explore:"https://pawan1305.github.io/PSD-Design/"
        },
        {
          imageUrl:ecommerce,
          altText: 'E-commerce',
          title: 'E-commerce Website',
          description: 'A fully functional e-commerce website featuring product listings, shopping cart functionality, and secure payment processing.',
          explore:"https://tangerine-gingersnap-3c8b63.netlify.app/"

        },
        {
          imageUrl: snake,
          altText: 'Snake Game',
          title: 'Snake Game',
          description: "An innovative twist on the classic snake game, allowing players to control the snake's movements through keyboard, providing an engaging and interactive gaming experience.",
          explore:"https://pawan1305.github.io/Snake_Game/"
        },
        {
            imageUrl: movieMania,
            altText: 'Movie Mania',
            title: 'Movie Mania',
            description: "The design replicates the layout and styling of the OTT platform, featuring a responsive navbar, hero sections, and neatly organized carousels for displaying content.",
            explore:"https://pawan1305.github.io/Prime-Video-Clone/"
          },
          {
            imageUrl: weather,
            altText: 'Weather App',
            title: 'Weather App',
            description: "A weather application that provides real-time weather updates and forecasts for any location.",
            explore:"https://pawan1305.github.io/Weather/"
          }
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
