import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto w-full">{children}</main>
    </div>
  );
};
