import { useState } from "react";

import { Layout } from "./components/Layout";

import { InputRadio } from "./components/InputRadio";
import { Select } from "./components/Select";
import { Male } from "./components/Male";
import { Female } from "./components/Female";
import { CheckCircle, XCircle } from "phosphor-react";
import { Button } from "./components/Button";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [combinationStatus, setCombinationStatus] = useState("NOT_MATCH"); // DEFAULT - MATCH - NOT_MATCH
  const [fields, setFields] = useState({
    gender: "male",
    ocasion: "",
    tshirt: "",
    pants: "",
    shoes: "",
  });

  const handleCombination = async () => {
    try {
      const response = await fetch("http://localhost:3000/", {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          gender: fields.gender,
          ocasion: fields.ocasion,
          tshirt: fields.tshirt,
          pants: fields.pants,
          shoes: fields.shoes,
        }),
      });

      const status = response.status;

      if (status !== 200 && status !== 201) {
        throw new Error("Failed to fetch combination.");
      }

      const data = await response.json();

      setCombinationStatus(data.result ? "MATCH" : "NOT_MATCH");
    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = () => {
    setCombinationStatus("DEFAULT");
    setFields({
      gender: "male",
      ocasion: "",
      tshirt: "",
      pants: "",
      shoes: "",
    });
  };

  return (
    <Layout>
      <div className="py-12">
        <article className="space-y-4 text-center">
          <h1 className="text-4xl font-medium text-neutral-800">
            Bem vindo(a) ao{" "}
            <span className="text-red-600">Estilísta Virtual!</span>
          </h1>
          <p className="text-base font-normal text-neutral-600">
            Faça combinações de roupas de acordo com o seu gênero e estilo, veja
            se você está na moda!
          </p>
        </article>

        <hr className="my-16" />

        <h2 className="text-2xl font-medium text-neutral-800">
          Preencha as opções abaixo:
        </h2>

        <div className="flex gap-6 mt-4">
          <Select
            id="ocasion"
            label="Ocasião:"
            value={fields.ocasion}
            selectClassName="w-60"
            onChange={(e) => setFields({ ...fields, ocasion: e.target.value })}
            options={[
              { label: "Casual", value: "casual" },
              { label: "Esporte", value: "esporte" },
              { label: "Formal", value: "formal" },
              { label: "Festa", value: "festa" },
              { label: "Praia", value: "praia" },
            ]}
          />

          <div className="flex flex-col">
            <p className="text-base font-medium text-neutral-900 mb-4">
              Gênero:
            </p>
            <div className="flex gap-4">
              <InputRadio
                id="male"
                type="radio"
                name="male"
                label="Masculino"
                checked={fields.gender === "male"}
                onChange={() => setFields({ ...fields, gender: "male" })}
              />
              <InputRadio
                id="female"
                type="radio"
                name="female"
                label="Feminino"
                checked={fields.gender === "female"}
                onChange={() => setFields({ ...fields, gender: "female" })}
              />
            </div>
          </div>
        </div>

        {fields.gender === "male" ? (
          <Male fields={fields} setFields={setFields} />
        ) : (
          <Female fields={fields} setFields={setFields} />
        )}

        {combinationStatus === "DEFAULT" && (
          <Button className="mt-12" onClick={handleCombination}>
            Verificar combinação
          </Button>
        )}

        {combinationStatus === "MATCH" && (
          <div className="flex flex-col gap-4 items-center justify-center mt-8">
            <CheckCircle size={52} className="text-green-500" />
            <h3 className="text-green-500 font-medium text-4xl">Combina</h3>
          </div>
        )}

        {combinationStatus === "NOT_MATCH" && (
          <div className="flex flex-col gap-4 items-center justify-center mt-8">
            <XCircle size={52} className="text-red-500" />
            <h3 className="text-red-500 font-medium text-4xl">Não combina</h3>
          </div>
        )}

        {combinationStatus !== "DEFAULT" && (
          <Button onClick={handleReset} className="mt-12">
            Refazer combinação
          </Button>
        )}
      </div>
    </Layout>
  );
};
