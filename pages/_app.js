
import "@/styles/globals.css";
import "../public/style.css";
import SideBar from "@/components/template/SideBar";
import Header from "@/components/template/Header";
import Footer from "@/components/template/Footer";
import HousesProvider from "@/components/context/HousesProvider";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <SideBar />
      <div className="body w-full -z-1 bg-black">
        <div className="mr-20 p-4">

          <Header />
          <div className="w-full mt-16 ">
            <HousesProvider>
              <Component {...pageProps} />
            </HousesProvider>

          </div>
        </div>
        <Footer />
      </div>

    </div>
  )
}
