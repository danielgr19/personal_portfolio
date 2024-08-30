import Link from "next/link";
import { button } from "./ui/button"

const Header = () => {
   return <header className="py-8 xl:py-12 text-white bg-pink-50/20"> 
        <div className="container mx-auto">
            {/* LOGO */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">Daniel <span className="text-accent">.</span></h1>
            </Link>

            {/* Desktop Nav */}
            
        </div>
   </header>;
};

export default Header
 