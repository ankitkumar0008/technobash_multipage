import React, { useEffect, useState } from 'react';

const OpenInBrowserPrompt = () => {
  const [isInstagramBrowser, setIsInstagramBrowser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (userAgent.includes('Instagram')) {
      setIsInstagramBrowser(true);
    }
  }, []);

  const handleRedirect = () => {
    const url = window.location.href;
    window.open(url, '_blank'); // Opens in default browser
  };

  return (
    isInstagramBrowser && (
      <div style={{ background: '#ffc107', padding: '15px', textAlign: 'center' }}>
        <p>
          For the best experience, open this website in your browser.
          <button
            onClick={handleRedirect}
            style={{ marginLeft: '10px', background: '#007bff', color: '#fff', padding: '5px 10px', border: 'none', borderRadius: '5px' }}
          >
            Open in Browser
          </button>
        </p>
      </div>
    )
  );
};

export default OpenInBrowserPrompt;
