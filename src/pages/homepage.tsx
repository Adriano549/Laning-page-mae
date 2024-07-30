import Aparelhos from "@components/aparelhos/aparelhos"
import HomeTop from "@components/apresentacao"
import Contatos from "@components/contatos/contatos";
import Footer from "@components/footer";
import { useEffect } from "react";


const HomePage = () =>{
    useEffect(() => {
        const sectionId = localStorage.getItem("scrollToSection");
        if (sectionId) {
            const element = document.getElementById(sectionId);
            if(element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
            localStorage.removeItem("scrollToSection");
        }
    })
    return(
        <>
        <HomeTop/>
        <Aparelhos/>
        <Contatos/>
        <Footer/>
        </>
    )
}

export default HomePage;