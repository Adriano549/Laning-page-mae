import Logo from "@img/logo/Logo.jpg";
import { useNavigate } from 'react-router-dom';
import { Header } from './styled';

const Navi: React.FC = () => {
    const navigation = useNavigate();

    const handleScrollToSection = (sectionId: string) => {
        if (location.pathname === "/") {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            localStorage.setItem("scrollToSection", sectionId);
            navigation("/");
        }
    };

    return (
        <Header>
            <div>
                <img src={Logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <h2 onClick={() => navigation("/")}>Home</h2>
                    </li>
                    <li>
                        <h2 onClick={() => navigation("/sobre")}>Sobre</h2>
                    </li>
                    <li>
                        <h2 onClick={() => handleScrollToSection("contatos")}>Contatos</h2>
                    </li>
                    <li>
                        <h2 onClick={() => navigation("/aparelhos")}>Aparelhos</h2>
                    </li>
                </ul>
            </nav>
        </Header>
    );
};

export default Navi;