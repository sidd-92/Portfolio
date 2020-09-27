
import Layout from "../components/Layout";
import Head from "next/head";

const Index = () => (
  <React.Fragment>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className="text-2xl font-bold py-6">Welcome To Next Js Tutorial App</div>
    </Layout>
  </React.Fragment>
);
export default Index;
