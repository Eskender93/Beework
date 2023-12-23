import {
  TariffCard,
  FeatureList,
  Price,
  PriceTitle,
  LearnMoreButton,
  JoinButton,
} from "./TariffItem.styled";
const TariffItem = ({
  image,
  title,
  description,
  features,
  price,
  buttons,
  highlighted,
  style,
}) => (
  <TariffCard highlighted={highlighted} style={style}>
    {image && <img src={image} alt={title} />}
    <h2>{title}</h2>
    <p>{description}</p>
    <FeatureList>
      {features.map((feature, title) => (
        <li key={title}>{feature}</li>
      ))}
    </FeatureList>
    <div>
      <PriceTitle>Вартість</PriceTitle>
      <Price>{price}</Price>
    </div>
    {buttons.join && <JoinButton>{buttons.join}</JoinButton>}
    {buttons.learnMore && (
      <LearnMoreButton>{buttons.learnMore}</LearnMoreButton>
    )}
  </TariffCard>
);

export default TariffItem;
