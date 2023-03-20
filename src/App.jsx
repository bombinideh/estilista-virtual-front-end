import { useState } from "react";

import { Layout } from "./components/Layout";

import camisaFeminina from "./assets/camisa-feminina.jpg";
import calcaFeminina from "./assets/calca-feminina.jpg";
import sapatoFeminino from "./assets/sapato-feminino.jpg";

import camisaMasculino from "./assets/camisa-masculino.png";
import calcaMasculino from "./assets/calca-masculino.jpeg";
import sapatoMasculino from "./assets/sapato-masculino.png";

export const App = () => {
  const [fields, setFields] = useState({
    gender: "male",
    tshirt: "",
    pants: "",
    shoes: "",
  });

  return (
    <Layout>
      <div className="p-4">
        <div className="flex gap-2">
          <div className="flex gap-1">
            <input
              id="male"
              type="radio"
              name="male"
              checked={fields.gender === "male"}
              onChange={() => setFields({ ...fields, gender: "male" })}
            />
            <label htmlFor="male">Masculino</label>
          </div>

          <div className="flex gap-1">
            <input
              id="female"
              type="radio"
              name="female"
              checked={fields.gender === "female"}
              onChange={() => setFields({ ...fields, gender: "female" })}
            />
            <label htmlFor="female">Feminino</label>
          </div>
        </div>

        {fields.gender === "male" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center gap-4 bg-red-700 rounded-lg p-4">
              <p className="text-white font-bold text-2xl">Camisa</p>
              <img
                className="rounded-lg object-cover w-full h-[400px]"
                src={camisaMasculino}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bg-red-700 rounded-lg p-4">
              <p className="text-white font-bold text-2xl">Calça</p>
              <img
                className="rounded-lg object-cover w-full h-[400px]"
                src={calcaMasculino}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bg-red-700 rounded-lg p-4">
              <p className="text-white font-bold text-2xl">Sapato</p>
              <img
                className="rounded-lg object-cover w-full h-[400px]"
                src={sapatoMasculino}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center gap-4 bg-red-700 rounded-lg p-4">
              <p className="text-white font-bold text-2xl">Camisa</p>
              <img
                className="rounded-lg object-cover w-full h-[400px]"
                src={camisaFeminina}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bg-red-700 rounded-lg p-4">
              <p className="text-white font-bold text-2xl">Calça</p>
              <img
                className="rounded-lg object-cover w-full h-[400px]"
                src={calcaFeminina}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bg-red-700 rounded-lg p-4">
              <p className="text-white font-bold text-2xl">Sapato</p>
              <img
                className="rounded-lg object-cover w-full h-[400px]"
                src={sapatoFeminino}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
