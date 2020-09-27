const Layout = (props) => (
  <div>
    <nav class="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden">
      <a href="/" class="block text-left">
        <img src="https://stitches.hyperyolo.com/images/logo.png" class="h-10 sm:h-10 rounded-full" alt="logo" />
      </a>
      <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
        <li>
          <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
            Products
          </a>
        </li>
        <li>
          <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
            Pricing
          </a>
        </li>
        <li class="pr-2">
          <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
            FAQs
          </a>
        </li>
        <li class="pl-2 border-l">
          <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
            Log In
          </a>
        </li>
        <button class="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">Sign Up</button>
      </ul>
    </nav>
    <main className="container mx-auto min-h-screen">{props.children}</main>
    <section class="antialiased font-sans w-full bg-gray-300 text-left text-black py-8">
      <div class="container mx-auto max-w-xl py-8 font-normal leading-normal">
        <h3 class="text-2xl">Grow Your Business</h3>
        <p class="">
          Build high performing teams, establish design practices, mentor and grow the next generation of great designers, and design interfaces and
          experiences.
        </p>
        <div class="max-w-sm mt-4 sm:flex">
          <input type="email" class="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0" name="email" placeholder="Enter your email" required="" />
          <button class="uppercase text-sm text-white focus:outline-0 w-full sm:w-auto bg-black hover:bg-gray-900 focus:bg-gray-300 tracking-wide px-6">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default Layout;
