import Link from "next/link";

import Header from "./Header";

const layoutStyle = {
  // Main layout component with header
  margin: 20,
  padding: 20,
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <br></br>
    {props.children}
  </div>
);

export default Layout;
