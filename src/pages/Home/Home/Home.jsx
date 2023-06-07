import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Elegant Edge Fashion School</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;