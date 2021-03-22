import Link from "next/link";

const Header = () => (
  // This is the main header element on the which routes you to the index page
  <div>
    <Link href="/">
      <a>index</a>
    </Link>

    <style jsx>
      {`
        a {
          color: blue;
          margin-left: 20px;
          text-decoration: none;
          font-size: 20px;
          text-transform: uppercase;
          font-family: gill sans;
          border: 2px solid blue;
          padding: 15px;
        }
      `}
    </style>
  </div>
);

export default Header;
