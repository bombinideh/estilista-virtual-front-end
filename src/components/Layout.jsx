import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="bg-neutral-50">
      <Header />
      <main className="container mx-auto w-full ">{children}</main>
    </div>
  );
};
