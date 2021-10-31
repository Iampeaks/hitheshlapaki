import React from 'react'
import "./Home.css"
import container from"./container.png"
import Product from './Product'
import slap from"./slap.png"
import kick from "./kick.png"
import punch from"./punch.png"
import balls from "./balls.png"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image1" 
                src={container} 
                alt="lapaki hithesh"
                />
            </div>

            <div className="home__row">
                <Product 
                title="I Want to slap Hithesh" 
                price="Free"
                image={slap}
                rating={5}
                />
                <Product 
                title="I Want to kick Hithesh" 
                price="Free"
                image={kick}
                rating={5}/>

            </div>


            <div className="home__row1">
                <Product 
                title="I Want to punch Hithesh" 
                price="Free"
                image={punch}
                rating={5}
                />
                <Product 
                title="I Want to kick Hithesh Balls" 
                price="Free"
                image={balls}
                rating={5}/>

            </div>

        </div>
    )
}

export default Home
