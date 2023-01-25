import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser, selectCurrentToken } from "features/auth/authSlice";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome${user}!` : "Welcome!";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  return (
    <section>
      <h1>{welcome}</h1>
      <p>Token:{tokenAbbr}</p>
      <Link to={"/test"}>go to test</Link>
    </section>
  );
};

export default Welcome;
