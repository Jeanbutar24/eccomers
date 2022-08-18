import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Promo from "../../Components/ProductPromo/Promo";
import Slider from "../../Components/Slider/Slider";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Categories from "../../Components/Category/Categories";
const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Slider />
      <Promo />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
