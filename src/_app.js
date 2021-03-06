import App, { Container } from 'next/app';
import { DefaultSeo } from 'next-seo';

// import your default seo configuration
// import SEO from '../next-seo.config';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'ja_JP',
            url: 'https://floatype.vercel.app//',
            site_name: 'FloaType',
          }}
        />
        <Component {...pageProps} />
      </Container>
    );
  }
}
