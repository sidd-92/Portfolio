const Layout = (props) => (
  <div>
    <header>Header </header>
    {props.children}
    <footer>Footer</footer>
  </div>
);

export default Layout;
