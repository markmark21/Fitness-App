import Navbar from "@/scenes/navbar/Navbar.tsx";
import {useEffect, useState} from "react";
import {SelectedPage} from "@/shared/types.ts";
import Home from "@/scenes/home/Home.tsx";
import Benefits from "@/scenes/benefits/Benefits.tsx";
import OurClasses from "@/scenes/ourClasses/OurClasses.tsx";
import ContactUs from "@/scenes/contactUs/ContactUs.tsx";
import Footer from "@/scenes/footer/Footer.tsx";


function App() {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    )

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY === 0) {
                setIsTopOfPage(true)
                setSelectedPage(SelectedPage.Home)
            } else {
                setIsTopOfPage(false)
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, []);
    return (
        <div className='app bg-gray-20'>
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage}/>
            <Benefits setSelectedPage={setSelectedPage}/>
            <OurClasses setSelectedPage={setSelectedPage}/>
            <ContactUs setSelectedPage={setSelectedPage}/>
            <Footer/>
        </div>
    )
}

export default App
