import Script from 'next/script';
import React from 'react';

import isLocalhost from '../utils/isLocalhost';

function Analytics() {
  if (isLocalhost) {
    console.info('Analytics is disabled on localhost');
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1YD1ZSVP59"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1YD1ZSVP59');
        `}
      </Script>
    </>
  );
}

export default Analytics;
