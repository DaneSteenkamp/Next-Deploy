import fetch from "isomorphic-unfetch"; // Must inport when using getinitial props
import Layout from "../Components/Layout";
import Link from "next/link";

const Index = (props) => {
  console.log(props);
  const { user } = props;

  return (
    <Layout>
      <div>
        <h4>CLICK ON THE USER NAME BELOW TO SEE MORE INFO ON EACH USER</h4>
        {user.map((
          item // Maping throught the data returned fromn jsonplaceholder
        ) => (
          <div>
            <style jsx>
              {`
                p {
                  color: Grey;
                  margin-left: 20px;
                  text-decoration: none;
                  font-size: 15px;
                  text-transform: uppercase;
                  text-decoration: underline;
                  font-family: gill sans;
                }
              `}
            </style>

            <Link href="/userDetails">
              <a>
                <p>{item.name}</p>
                <br></br>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  // Fetching Data from jsonplaceholder
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();

  return {
    user: result,
  };
};

export default Index;
