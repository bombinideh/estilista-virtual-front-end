import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";

import notFoundImg from "../assets/not-found.jpg";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-12 h-full flex flex-col gap-16 items-center justify-center">
        <figure className="border border-red-200 rounded-xl overflow-hidden">
          <img
            src={notFoundImg}
            alt="Página não encontrada."
            width={400}
            height={800}
          />
        </figure>

        <article className="space-y-6 text-center">
          <h1 className="text-4xl font-medium text-neutral-800">Oooops...</h1>
          <p className="text-base font-normal text-neutral-600">
            Como você chegou aqui é um mistério. A página que você procura está
            indisponível ou não existe.
          </p>
        </article>

        <Button onClick={() => navigate("/")}>Voltar ao início</Button>
      </div>
    </Layout>
  );
};
