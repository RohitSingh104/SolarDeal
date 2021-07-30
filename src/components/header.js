import React from 'react'
import  './header.css';


const Header = () => {
    return (
        <div className="container">
          
            <div class="contact_no">
               <a href="javascript:void(0)" className="chat">Chat Now!</a>
                <a href="https://wa.me/+9195586 08536" target="_blank"  className="cont">What's app</a>
                
            </div>
			
            <div className="nav">
               
                <a href="https://solardeal.in" className="nav-item">Home</a>
                <a href="https://solardeal.in/become-a-installer" className="nav-item">Become a Installer</a>
                <a href="https://solardeal.in/become-a-seller" className="nav-item">Become a Seller</a>
                <a href="https://solardeal.in/blogs" className="nav-item   ">How it's Work</a>
                <a href="https://solardeal.in/faq" className="nav-item   ">FAQ</a>
            </div>
            
        </div>
    )
}

export default Header
