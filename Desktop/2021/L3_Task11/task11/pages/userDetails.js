import fetch from "isomorphic-unfetch"; // Must inport when using getinitial props
import Layout from "../Components/Layout";

const userDetails = (props) => {
  console.log(props);
  const { user } = props;
  return (
    <Layout>
      <div>
        <h4>DETAILS PAGE</h4>
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
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <br></br>
          </div>
        ))}
      </div>
    </Layout>
  );
};

userDetails.getInitialProps = async () => {
  // Fetching Data from jsonplaceholder
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();

  return {
    user: result,
  };
};

export default userDetails;
