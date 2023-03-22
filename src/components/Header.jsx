import { useNavigate } from "react-router-dom";
import logoUnisagrado from "../assets/logo-unisagrado.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto">
        <img
          src={logoUnisagrado}
          alt="Unisagrado"
          className="cursor-pointer"
          width={250}
          height={125}
          onClick={() => navigate("/")}
        />
      </div>
    </header>
  );
};
