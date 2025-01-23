import React from 'react';

const OpenInChromeBanner = () => {
  const redirectToChrome = () => {
    const chromeUrl = `googlechrome://${window.location.href.replace(/^https?:\/\//, '')}`;
    window.location.href = chromeUrl;
  };

  return (
    <div style={{ backgroundColor: '#ffeeba', padding: '10px', textAlign: 'center' }}>
      <p>
        For the best experience, please open this website in Chrome.{' '}
        <button
          onClick={redirectToChrome}
          style={{
            marginLeft: '10px',
            padding: '5px 10px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Open in Chrome
        </button>
      </p>
    </div>
  );
};

export default OpenInChromeBanner;
