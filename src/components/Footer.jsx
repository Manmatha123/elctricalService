import React from 'react'
import "../styles/Footer.css"

 function Footer() {
    return (
      <footer className="bg-gray-700 text-white text-sm">
        <div className="bg-red-700 py-4 flex justify-between items-center footer-container px-8">
         <div>
         <span className='copy-right'>
            Copyright &copy; <strong>sky-electrical</strong> - 2025
          </span>
         </div>

          <div className="flex footer-social"  >
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <i className="fab fa-flickr"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer