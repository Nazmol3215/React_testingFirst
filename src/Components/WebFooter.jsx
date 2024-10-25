// Footer.js
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="/path-to-logo/logo.png" alt="Redecrafts Logo" className="footer-logo" />
        <p>Importer, Wholesaler & Supplier</p>
        <address>
          1247 (2nd Floor), Begum Rokeya Sarani, Kazipara, Mirpur, Dhaka-1216<br />
          <a href="tel:+8801301377371">+880 1301 - 377 371</a><br />
          <a href="mailto:info@redecrafts.com">info@redecrafts.com</a>
        </address>
        <div className="social-icons">
          <a href="#"><img src="/path-to-icons/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="/path-to-icons/instagram-icon.png" alt="Instagram" /></a>
          <a href="#"><img src="/path-to-icons/youtube-icon.png" alt="YouTube" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className='footer-bottom_two'>
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Office Furniture</a></li>
            <li><a href="#">Home Furniture</a></li>
            <li><a href="#">Interior Decoration</a></li>
            <li><a href="#">Lights Items</a></li>
            <li><a href="#">Artificial Decoration</a></li>
            <li><a href="#">Wall Decoration</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Our Blogs</a></li>
            <li><a href="#">Place an Order</a></li>
            <li><a href="#">How to Returns</a></li>
            <li><a href="#">License & Certificates</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">License & Certificates</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
