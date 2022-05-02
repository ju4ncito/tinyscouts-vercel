import Document, { Html, Head, Main, NextScript } from 'next/document';
import Favicons from '../components/Favicons';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <Favicons />
          <meta
            name='description'
            content='A collection of dreaming lemurs coming to the blockchain 🐒😴⚡️'
          />
          <meta
            property='og:description'
            content={`A collection of dreaming lemurs coming to the blockchain 🐒😴⚡️`}
          />
          <meta property='og:image' content='/images/Logo-01.jpg' />
        </Head>
        <body className='bg-white dark:bg-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
