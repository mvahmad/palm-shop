import Header from "layouts/header";
import Fotter from "layouts/footer";
import Main from "layouts/main";
const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <Main />
        <Fotter />
      </div>
    </>
  );
};
export default Home;
