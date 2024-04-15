import Link from "next/link";
import "@/app/globals.css";

import MeuComponenteLogo from "@/components/images/MeuComponenteLogo/index";
import BtnIngresso from "@/components/ui/button/BtnIngresso/index";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navBorder">
        <div className="navContainer">
          {/* link para pagina inicial da landingpage*/}
          <Link href="/">
            <div className="logo">
              <MeuComponenteLogo />
            </div>
          </Link>

          <ul className="sora-medium">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/palestrantes">PALESTRANTES</Link>
            </li>
            <li>
              <Link href="/programacao">PROGRAMAÇÃO</Link>
            </li>
            <li>
              <Link href="/#contato">CONTATO</Link>
            </li>
            <li>
              <Link href="/#faq">FAQ</Link>
            </li>
          </ul>

          <BtnIngresso url="https://www.example.com">Comprar Ingresso </BtnIngresso>
        </div>
      </div> 
    </nav>
  );
};

export default Navbar;
