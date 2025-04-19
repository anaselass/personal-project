import bannerImg from "../assets/banner2.png";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={bannerImg}
        heading={"Devolop Your Skills With Anas"}
        subheading={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
      nulla nemo odio officiis ab fugit quaerat commodi soluta hic
      aspernatur nisi accusantium natus maxime tempore autem, nostrum
      voluptas nesciunt saepe?`}
        btn1={"Get Started"}
        btn2={"Learn More"}
      />
    </div>
  );
};

export default Home;
