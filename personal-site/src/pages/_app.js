import App from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalLayout from "layout/Global";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <GlobalLayout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalLayout>
    );
  }
}
