import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import CustomClasses from "../CustomClasses/CustomClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Elegant Edge Fashion School</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <CustomClasses></CustomClasses>
        </div>
    );
};

export default Home;