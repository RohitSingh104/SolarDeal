import React from 'react'
import './footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="solar_footer">
                <div className="row">
                    <div className="footer_divider"></div>
                </div>

                <div className="footer">
                    <div className="footer-cont">
                        <div className="footer_branding">
                            <img id="footer_logo"src="https://solardeal.in/public/assets/img/logo-white.png"/>
                        </div>
                        <div class="footer_content">

                            <p>Supplier and online service Provider for Solar PV Modules, Solar Inverters, Solar DC &amp; AC Cables</p>

                        </div>
                        <div class="footer_social_icon">

                            <p>
                                
                                <a href="https://www.facebook.com/solardeal.in/" target="_blank">
                                    <img id="fb_pic" src="https://image.flaticon.com/icons/png/512/124/124010.png" alt="not avail"/>
                                </a>
                        
                            

                                <a href="https://twitter.com/Solardeal1" target="_blank">
                                    <img id="twitter_pic"src="https://image.flaticon.com/icons/png/512/124/124021.png"/>
                                </a>

                                <a href="https://www.linkedin.com/in/solardeal/" target="_blank">
                                    
                                    <img id="linkedin_pic" src="https://image.flaticon.com/icons/png/512/124/124011.png"/>
                                </a>

                            

                            </p>

                        </div>
                    </div>
                    <div className="footer_middle">

                        <div className="footer_title">

                            <h5>USEFUL LINKS</h5>

                            <div className="common_border"></div>

                        </div>

                        <div className="footer_links">

                            <ul className="list" type="none">

                                <li><a href="https://solardeal.in/about-us" id="about-ft">About Us</a></li>

                                <li><a href="https://solardeal.in/contact-us" id="contact-ft">Contact Us</a></li>

                                <li><a href="https://solardeal.in/privacy-policy" id="privacy-ft">Privacy Policy</a></li>

                                <li><a href="https://solardeal.in/terms-conditions" id="terms-ft">Terms and Conditions</a></li>
                                
                            </ul>

                        </div>

                    </div>
                    <div class="footer-last">

                        <div class="footer_title_contact">

                            <h5>CONTACT US</h5>

                            <div class="common_border"></div>

                        </div>

                        <div class="footer_icon">

                            <ul class="list" type="none">
                                <li><a id="contact-ft1" href="tel:7016889502"><span >(+91) 701 688 9502</span></a></li>

                                <li><a id="email-ft1" href="mailto:info@solardeal.in"><span >info@solardeal.in</span></a></li>

                            </ul>

                        </div>

                    </div>
                    
                </div>
                <div className="row">
                    <div className="bottom_divider"></div>

                </div>

                <div className="footer-bottom">
                    <div className="copyright">

                            Copyright © 2019 All Rights Reserved

                    </div>
                    <div className="designed">

                        Designed &amp; Developed by | <a id="besticoder" href="https://besticoder.com/" target="_blank">Besticoder</a>

                    </div>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer;
