import { Card } from "./Card";
import { Select } from "./Select";

import camisaFeminina from "../assets/camisa-feminina.jpg";
import calcaFeminina from "../assets/calca-feminina.jpg";
import sapatoFeminino from "../assets/sapato-feminino.jpg";

export const Female = ({ fields, setFields }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div className="flex flex-col gap-4">
        <Card
          title="Parte Superior"
          imgSrc={camisaFeminina}
          alt="Camiseta feminina"
        />
        <Select
          id="tshirt"
          value={fields.tshirt}
          onChange={(e) => setFields({ ...fields, tshirt: e.target.value })}
          options={[
            {
              label: "Camisa social tons claros / pastel",
              value: "camisa_social_tons_claros_pastel",
            },
            {
              label: "Camisa social tons claros / pastel com blazer",
              value: "camisa_social_tons_claros_pastel_com_blazer",
            },
            {
              label: "Camiseta básica cores vibrantes",
              value: "camisa_básica_cores_vibrantes",
            },
            {
              label: "Camiseta de tecido leve em tons vibrantes",
              value: "camiseta_tecido_leve_tons_vibrantes",
            },
            {
              label: "Vestido longo nas cores branco / preto",
              value: "vestido_longo_branco_preto",
            },
            {
              label: "Camiseta básica em tons vibrantes",
              value: "camiseta_básica_cores_vibrantes",
            },
            {
              label: "Cropped em cores vibrantes básicas",
              value: "cropped_cores_vibrantes_basicas",
            },
            {
              label: "Vestido curto em tons vibrantes",
              value: "vestido_curto_tons_vibrantes",
            },
            {
              label: "Vestido longo em tons vibrantes",
              value: "vestido_longo_tons_vibrantes",
            },
            {
              label: "Vestido de praia em tecido leve e cores claras",
              value: "vestido_praia_tecido_leve_cores_claras",
            },
            {
              label: "Biquíni em cores básicas",
              value: "biquini_cor_basica",
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Card
          title="Parte Inferior"
          imgSrc={calcaFeminina}
          alt="Calça feminina"
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
              label: "Shorts legging em tons claro / pastel",
              value: "shorts_legging_tons_claros_pastel",
            },
            {
              label: "Calça legging em tons claro / pastel",
              value: "calca_legging_tons_claros_pastel",
            },
            {
              label: "Short jeans tons medios / escuros",
              value: "short_jeans_tom_medio_escuro",
            },
            {
              label: "Calça jeans tons medios / escuros",
              value: "calca_jeans_tom_medio_escuro",
            },
            {
              label: "nenhum",
              value: "nenhum",
            },
            {
              label: "Biquíni em cores básicas",
              value: "biquini_cor_basica",
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Card title="Sapato" imgSrc={sapatoFeminino} alt="Sapato feminino" />
        <Select
          id="shoes"
          value={fields.shoes}
          onChange={(e) => setFields({ ...fields, shoes: e.target.value })}
          options={[
            {
              label: "Salto alto preto / nude",
              value: "salto_alto_preto_nude",
            },
            {
              label: "Tênis branco / preto",
              value: "tenis_branco_preto",
            },
            {
              label: "Salto alto em tons metálicos",
              value: "salto_alto_tons_metalicos",
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
