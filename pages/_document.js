
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ 'visitorType': 'New' });
            `,
          }}
        />
        {/* --- GTM CONTAINER SNIPPETS --- */}
      </Head>
      <body>
        {/* --- GTM NOSCRIPT SNIPPETS --- */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
