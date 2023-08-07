import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/globals.css" />
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <body className="bg-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
