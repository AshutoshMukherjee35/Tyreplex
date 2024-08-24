import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const FooterLink = ({ text, href }) => (
  <p className="mb-1"><a href={href} className="text-dark text-decoration-none">{text}</a></p>
);

export default function Footer() {
  const leftLinks = [
    { text: 'Who We Are', href: '#' },
    { text: 'Are you a Tyre Dealer?', href: '#' }
  ];

  const centerLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of use', href: '#' }
  ];

  const rightLinks = [
    { text: 'Contact Us', href: '#' },
    { text: 'Career', href: '#' },
    { text: 'Shipping & Return Policy', href: '#' }
  ];

  return (
    <footer className="bg-light text-center p-4" style={{marginLeft: "14%" , marginRight: "14%"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="mb-3">
              <span style={{ fontWeight: 'bold' }}>Tyre</span>
              <span style={{ color: 'red' }}>Plex</span>
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="me-3 text-dark text-decoration-none">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-dark text-decoration-none">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="col-md-2 text-center text-md-start">
            {leftLinks.map(link => <FooterLink key={link.text} {...link} />)}
          </div>
          <div className="col-md-2 text-center text-md-start">
            {centerLinks.map(link => <FooterLink key={link.text} {...link} />)}
          </div>
          <div className="col-md-4 text-center text-md-start">
            {rightLinks.map(link => <FooterLink key={link.text} {...link} />)}
          </div>
        </div>
      </div>
      <p className='mt-5' style={{ borderTop: '1px solid #000', width: '100%', margin: '20px auto 0' }}>&copy; 2024 Shree Hemkunt Tyres. All Rights Reserved.</p>
    </footer>
  );
}
