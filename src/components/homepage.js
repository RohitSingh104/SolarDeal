import React from 'react'
import './homepage.css'

const Home = () => {
    return (
        <div className="homepage">
            <div className="logo">
                <nav className="navbar">
                    <span>
                        <a href="https://solardeal.in">
                            <img  class="logo-img" src="https://solardeal.in/public/assets/img/solar-deal.png" />

                        </a>
                    </span>
                    <span>
                        <a href="https://solardeal.in/leads" className="business">Business Deals</a>
                    </span>

                    <span>
                    <a href="javascript:avoid(0)" className="signin">Sign in</a>
                    </span>
                   
                    
                   
                </nav>
            </div>
        </div>
    )
}

export default Home
