import Link from "next/link";

const HireMe = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div style={{ marginLeft: "5px" }}>
          <Link href="/about">About</Link>
        </div>
      </div>
      <h2>Hire Me</h2>
    </div>
  );
};
export default HireMe;
