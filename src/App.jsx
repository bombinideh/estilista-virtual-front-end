import { useState } from "react";

import { Layout } from "./components/Layout";

import { InputRadio } from "./components/InputRadio";
import { Select } from "./components/Select";
import { Male } from "./components/Male";
import { Female } from "./components/Female";

export const App = () => {
  const [combinationStatus, setCombinationStatus] = useState("DEFAULT"); // DEFAULT - MATCH - NOT_MATCH

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
        accept: "application/json",
        "content-type": "application/json",
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

  return (
    <Layout>
      <div className="p-4">
        <div className="flex flex-col">
          <p className="text-base font-medium text-neutral-900 mb-2">Gênero:</p>
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

          <Select
            id="ocasion"
            label="Ocasião:"
            value={fields.ocasion}
            className="mt-2"
            selectClassName="w-1/4"
            onChange={(e) => setFields({ ...fields, ocasion: e.target.value })}
            options={[
              { label: "Casual", value: "casual" },
              { label: "Esporte", value: "esporte" },
              { label: "Formal", value: "formal" },
              { label: "Festa", value: "festa" },
              { label: "Praia", value: "praia" },
            ]}
          />
        </div>

        {fields.gender === "male" ? (
          <Male fields={fields} setFields={setFields} />
        ) : (
          <Female fields={fields} setFields={setFields} />
        )}

        <button
          type="button"
          className="flex mx-auto text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-base px-10 py-2.5 text-center uppercase mt-10"
          onClick={handleCombination}
        >
          Combinar
        </button>

        {combinationStatus === "MATCH" && (
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-2xl text-green-500 font-medium">DEU BOM</h1>
          </div>
        )}

        {combinationStatus === "NOT_MATCH" && (
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-2xl text-red-500 font-medium">DEU RUIM</h1>
          </div>
        )}
      </div>
    </Layout>
  );
};
