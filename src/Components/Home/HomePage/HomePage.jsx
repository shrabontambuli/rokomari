import Superstore from "../Superstore/Superstore";
import Banner from "../Banner/Banner";
import BestSaller from "../BestSaller/BestSaller";
import SoldProduct from "../SoldProduct/SoldProduct";


const HomePage = () => {
    return (
        <>
            <Banner />
            <BestSaller />
            <Superstore/>
            <SoldProduct/>
        </>
    );
};

export default HomePage;