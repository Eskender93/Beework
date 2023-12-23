import React from "react";
import TariffItem from "./TariffItem";
import { tariffData } from "../Data/tariffData";
import { Section } from "./TariffItem.styled";
import { Title, Subtitle } from "../Common/Common.styled";

const Tariffs = () => (
  <Section>
    <Title>Тарифи</Title>
    <Subtitle>
      Працюйте з впевненістю, ми піклуємося про всі ваші потреби!
    </Subtitle>
    {tariffData.map((tariff, title) => (
      <TariffItem key={title} {...tariff} />
    ))}
  </Section>
);

export default Tariffs;
