import logoUnisagrado from "../assets/logo-unisagrado.png";

export const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto">
        <img src={logoUnisagrado} alt="Unisagrado" width={250} height={125} />
      </div>
    </header>
  );
};
