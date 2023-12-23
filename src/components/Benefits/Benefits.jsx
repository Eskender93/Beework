import React from "react";
import {
  Benefit,
  BenefitTitle,
  BenefitDescription,
  Container,
  Image,
} from "./Benefits.styled";
import { Title, Subtitle } from "../Common/Common.styled";
import { benefitData } from "../Data/benefitData"; // Переконайтеся, що шлях вірний

const Benefits = () => (
  <Container>
    <Title>Надайте потужності своєму бізнесу!</Title>
    <Subtitle>
      Об'єднайтесь з тими, хто прагне більшого, розкрийте свій потенціал та
      досягайте нових висот разом з BeeWorking!
    </Subtitle>
    {benefitData.map((item, index) => (
      <Benefit key={index}>
        {" "}
        {item.image && <Image src={item.image} alt={item.title} />}
        <div>
          {" "}
          <BenefitTitle>{item.title}</BenefitTitle>
          <BenefitDescription>{item.description}</BenefitDescription>
        </div>
      </Benefit>
    ))}
  </Container>
);

export default Benefits;
