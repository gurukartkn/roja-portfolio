import Header from "./Header";
import Info from "./Info";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen p-2 bg-gradient-to-tl from-pink-400 via-cyan-300 to-violet-400 flex flex-col justify-center items-center">
      <Header />
      <div className="container grid grid-cols-12 md:gap-10 justify-between">
        <Info />
        <div className="col-span-12 lg:col-span-8">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
