import Banner from "../shared/Banner";
import bannerImg from "../assets/banner2.png";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner
        banner={bannerImg}
        heading={"Each Personne can share the same discount code"}
        subheading={
          "Get 20% off your first order when you sign up for our newsletter."
        }
        btn1={"I have a code"}
        btn2={"Get started"}
      />
    </div>
  );
};

export default Newsletter;
