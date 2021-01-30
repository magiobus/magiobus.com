import '@/styles/global.css';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import MDXComponents from '@/components/MDXComponents';

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-166257933-1`}></script>
          <script async dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', "UA-166257933-1");`
          }}
          />
        </Head>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
