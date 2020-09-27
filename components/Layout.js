import Link from "next/link";
const Layout = (props) => (
  <div>
    <nav className="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden">
      <a href="/" className="block text-left">
        <img src="https://stitches.hyperyolo.com/images/logo.png" className="h-10 sm:h-10 rounded-full" alt="logo" />
      </a>
      <ul className="text-sm text-gray-700 list-none p-0 flex items-center">
        <li className="mr-6">
          <Link href="/" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
            About
          </Link>
        </li>
        <li className="pl-2 border-l">
          <a href="#" className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
            Log In
          </a>
        </li>
        <button className="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">Sign Up</button>
      </ul>
    </nav>
    <main className="container mx-auto min-h-screen">{props.children}</main>
    <section className="antialiased font-sans w-full bg-gray-300 text-left text-black py-8">
      <div className="container mx-auto max-w-xl py-8 font-normal leading-normal">
        <h3 className="text-2xl">Grow Your Business</h3>
        <p className="">
          Build high performing teams, establish design practices, mentor and grow the next generation of great designers, and design interfaces and
          experiences.
        </p>
        <div className="max-w-sm mt-4 sm:flex">
          <input
            type="email"
            className="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0"
            name="email"
            placeholder="Enter your email"
            required=""
          />
          <button className="uppercase text-sm text-white focus:outline-0 w-full sm:w-auto bg-black hover:bg-gray-900 focus:bg-gray-300 tracking-wide px-6">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default Layout;
