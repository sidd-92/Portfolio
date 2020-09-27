import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";

const Index = () => (
  <React.Fragment>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Link href="/about">About</Link>
      <h1>Home</h1>Home Page
    </Layout>
  </React.Fragment>
);
export default Index;
