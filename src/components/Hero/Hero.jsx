import React from "react";
import { HeroContainer, HeroContent } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>BEEWORKING HOLOSIIV</h1>
        <p>
          Креативна локація для оренди офісу з розвинутою інфраструктурою та
          зонами відпочинку у самому зеленому районі Києва. Понад 4 650
          квадратних метрів сучасного коворкінгу, в якому є все — починаючи від
          власного кафе і тренажерної зали, закінчуючи бібліотекою на даху з
          приголомшливим видом.
        </p>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
