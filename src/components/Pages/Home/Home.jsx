import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ContactUs></ContactUs>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;