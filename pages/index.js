import Link from "next/link";
import Layout from "../components/Layout";
const Index = () => (
  <div className="bg-gray-100">
    <Layout>
      <Link href="/about">About</Link>
      <h1>Home</h1>Home Page
    </Layout>
  </div>
);
export default Index;
