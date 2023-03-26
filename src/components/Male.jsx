import { Card } from "./Card";
import { Select } from "./Select";

import camisaMasculino from "../assets/camisa-masculina.png";
import calcaMasculino from "../assets/calca-masculino.jpeg";
import sapatoMasculino from "../assets/sapato-masculino.png";

export const Male = ({ fields, setFields }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div className="flex flex-col gap-4">
        <Card
          title="Parte Superior"
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
              value: "camisa_social_tons_claros_pastel",
            },
            {
              label: "Camisa social tons claros ou pastel com blazer",
              value: "camisa_social_tons_claros_pastel_com_blazer",
            },
            {
              label: "Camiseta básica cores vibrantes",
              value: "camisa_basica_cores_vibrantes",
            },
            {
              label: "Camiseta tecido leve cores vibrantes",
              value: "camisa_tecido_leve_tons_vibrantes",
            },
            {
              label: "Camiseta de botão em cores vibrantes",
              value: "camiseta_botao_cores_vibrante",
            },
            {
              label: "Camiseta social em cores vibrantes",
              value: "camisa_social_tons_vibrantes",
            },
            {
              label: "Camiseta em cores vibrantes e estampadas",
              value: "camiseta_cores_vibrantes_estampadas",
            },
            {
              label: "Camiseta de tecido leve",
              value: "camiseta_tecido_leve",
            },
            {
              label: "nenhum",
              value: "nenhum",
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Card
          title="Parte Inferior"
          imgSrc={calcaMasculino}
          alt="Calça masculina"
        />
        <Select
          id="pants"
          value={fields.pants}
          onChange={(e) => setFields({ ...fields, pants: e.target.value })}
          options={[
            {
              label: "Calça social tons neutros",
              value: "calca_social_tons_neutros",
            },
            {
              label: "Sunga",
              value: "sunga",
            },
            {
              label: "Bermuda tecido leve tom médio escuro",
              value: "bermuda_tecido_leve_medio_escuro",
            },
            {
              label: "Bermuda tecido leve tons claros",
              value: "bermuda_tecido_leve_tons_claros",
            },
            {
              label: "Calça social tons escuros",
              value: "calca_social_tons_escuro",
            },
            {
              label: "Calça jeans tons medios / escuros",
              value: "calca_jeans_medio_escuro",
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
              value: "sapato_social_preto_marrom",
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
              label: "Chinelo",
              value: "chinelo",
            },
          ]}
        />
      </div>
    </div>
  );
};
