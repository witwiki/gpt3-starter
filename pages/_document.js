import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Starter" key="title"/>
        <meta property="og:description" content="Build with GPT-3" key="description"/>
        <meta
          property="og:image"
          content="https://cdn-cgbdj.nitrocdn.com/RbczMDpxKIrQLdqnZdHDBvZTsISICJjh/assets/desktop/optimized/rev-7e76d99/3DgY99bH6RTVmkdkUeVvtLJXJX3rhhWVO9d2wHSOnP7XUyNQKO8hEFss-kgzr3aaILy3qesxi9ehVhmQ5gh27nj9Pox16DQDPi1kY-_hRFJrpts7iahLut_MvWeUg1veYW1OT_oZzVyPSIpnwLuXdIkUmO_MABrYYWElYV8f9AnMiwTpeC8H7JQJbOZiuQ"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
