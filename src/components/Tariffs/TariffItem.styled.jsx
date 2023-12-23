import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 0px 12px 24px 12px;
`;

export const TariffCard = styled.div`
  padding: 22px 12px 38px 12px;
  background-color: #f5f5f5;
  margin-bottom: 10px;

  img {
    margin-bottom: 17px;
  }

  h2 {
    margin-bottom: 17px;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #000;
  }
  ul {
    margin-bottom: 27px;
  }
  li {
    list-style: inside;
    text-indent: -1.5em;
    padding-left: 2.5em;
    font-size: 14px;
    font-weight: 400;
    color: #000;
  }

  /* Your styles here */

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 19px;
  }
`;

export const PriceTitle = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Price = styled.span`
  color: #000;

  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FeatureList = styled.ul`
  /* Your styles here */
`;

export const JoinButton = styled.button`
  background: #000;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 11px 20px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: #fcc857;
  }
`;

export const LearnMoreButton = styled.button`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  padding: 11px 20px;
  background: #f5f5f5;
  border: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #fcc857;
  }
`;
