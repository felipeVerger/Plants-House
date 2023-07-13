import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Hero from "../HomeComponents/Hero";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showHero: boolean;
}

const Layout: FC<LayoutProps> = ({ children, showHero }) => {
  return (
    <div className="relative z-0 h-screen flex flex-col justify-between">
      <div className="bg-background">
        <Navbar />
        {showHero && <Hero />}
      </div>
      <main className="flex-1 bg-background">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
