import App from "next/app";
import React from "react";
// Styles
import "../src/assets/main.css";
class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
