import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen p-2 bg-[#F3F9FF] dark:bg-[#1A1A40] flex flex-col justify-start items-center text-black">
      <Header />
      <div className="container grid grid-cols-12 md:gap-10 justify-between">
        <Info />
        <main className="col-span-12 lg:col-span-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
