import classes from "./Home.module.css";
import MainLogo from "./MainLogo";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.btn}>
        <MainLogo size="10" />
      </div>
      <h1>Welcome to Our Company Directory</h1>
      <p>
        Discover a wide range of companies from various industries and explore
        their locations.
      </p>
      <div className={classes.btn}>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
