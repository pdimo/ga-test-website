
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Dynamically loaded GTM containers from environment variable */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ 'visitorType': 'New' });
              try {
                const gtmIds = JSON.parse(process.env.NEXT_PUBLIC_GTM_IDS || '[]');
                if (Array.isArray(gtmIds)) {
                  gtmIds.forEach(gtmId => {
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer',gtmId);
                  });
                }
              } catch (e) {
                console.error('Error parsing NEXT_PUBLIC_GTM_IDS:', e);
              }
            `,
          }}
        />
      </Head>
      <body>
        {/* --- GTM NOSCRIPT SNIPPETS --- */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
