import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialMediaFooter() {
  return (
    <footer>
      <div className="social-media-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p style={{fontSize:0.75 + 'em'}}>
        &copy; {new Date().getFullYear()} Randoms Ecommerce Store. All rights
        reserved.
      </p>
    </footer>
  );
}

export default SocialMediaFooter;