import Link from "next/link"
import { Button } from "./ui/button"

//Components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
   return <header className="py-8 xl:py-12 text-white bg-pink-50/20"> 
        <div className="container mx-auto flex justify-between items-center">
            {/* LOGO */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                <span className="text-accent"> &lt; </span> Daniel Gr <span className="text-accent"> &gt; </span></h1>
            </Link>

            {/* Desktop Nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button> Hire me </Button>
                </Link>
            </div>
            
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
   </header>
}

export default Header