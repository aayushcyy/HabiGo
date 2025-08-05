// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#1a1a1a" />
          <link rel="apple-touch-icon" href="/icons/icon-192.png" />
          <link rel="icon" href="/favicon.ico" />
          {/* Add any fonts or meta tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
