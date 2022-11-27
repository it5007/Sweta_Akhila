import styles from './Footer.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Footer(){

    return(
        <div class="footer-basic">
        <footer>
            <div class="social">
                <a target="_blank" href="https://www.instagram.com/"><i class="icon ion-social-instagram"></i></a>
                <a target="_blank" href="https://www.twitter.com/"><i class="icon ion-social-twitter"></i></a>
                <a target="_blank" href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a></div>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Home</a></li>
                    <li class="list-inline-item"><a href="mailto:support@vannerplanner.com">Contact</a></li>
                    <li class="list-inline-item"><a href="#">Terms and Conditions</a></li>
                </ul>
                <p class="copyright">VannerPlanner © 2022</p>
        </footer>
    </div>
    );
}

export default Footer;