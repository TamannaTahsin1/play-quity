import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Blog from "../Page/Blog/Blog";
import Footer from "../Page/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;