import { Card } from "./Card";
import { Select } from "./Select";

import camisaMasculino from "../assets/camisa-masculino.png";
import calcaMasculino from "../assets/calca-masculino.jpeg";
import sapatoMasculino from "../assets/sapato-masculino.png";

export const Male = ({ fields, setFields }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div className="flex flex-col gap-4">
        <Card
          title="Camisa"
          imgSrc={camisaMasculino}
          alt="Camiseta masculina"
        />
        <Select
          id="tshirt"
          value={fields.tshirt}
          onChange={(e) => setFields({ ...fields, tshirt: e.target.value })}
          options={[
            {
              label: "Camisa social tons claros ou pastel",
              value: "social_tons_claros_pastel",
            },
            {
              label: "Camisa social tons claros ou pastel com blazer",
              value: "social_tons_claros_pastel_com_blazer",
            },
            {
              label: "Camiseta básica cores vibrantes",
              value: "básica_cores_vibrantes",
            },
            {
              label: "Camiseta de tecido leve",
              value: "camiseta_tecido_leve",
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Card title="Calça" imgSrc={calcaMasculino} alt="Calça masculina" />
        <Select
          id="pants"
          value={fields.pants}
          onChange={(e) => setFields({ ...fields, pants: e.target.value })}
          options={[
            {
              label: "Calça social tons neutros",
              value: "social_tons_neutros",
            },
            {
              label: "Calça social tons escuros",
              value: "jeans_medio_escuro",
            },
            {
              label: "Calça jeans",
              value: "calca_jeans",
            },
            {
              label: "Bermuda jeans tons medios / escuros",
              value: "bermuda_jeans_medio_escuro",
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Card title="Sapato" imgSrc={sapatoMasculino} alt="Sapato masculino" />
        <Select
          id="shoes"
          value={fields.shoes}
          onChange={(e) => setFields({ ...fields, shoes: e.target.value })}
          options={[
            {
              label: "Sapato social marrom / preto",
              value: "social_preto_marrom",
            },
            {
              label: "Tênis branco / preto",
              value: "tenis_branco_preto",
            },
            {
              label: "Tênis cor neutra",
              value: "tenis_neutro",
            },
            {
              label: "Sapato social",
              value: "sapato_social",
            },
            {
              label: "Chinelo",
              value: "chinelo",
            },
          ]}
        />
      </div>
    </div>
  );
};
