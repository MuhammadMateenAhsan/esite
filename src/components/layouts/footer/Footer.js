import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Company Name</h3>
          <p style={{ fontSize: '1rem', marginBottom: '5px' }}>123 Main St.</p>
          <p style={{ fontSize: '1rem', marginBottom: '5px' }}>City, State ZIP</p>
          <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Connect With Us</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginBottom: '5px' }}><a href="#">Facebook</a></li>
            <li style={{ marginBottom: '5px' }}><a href="#">Twitter</a></li>
            <li style={{ marginBottom: '5px' }}><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
