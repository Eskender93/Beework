import styled from "@emotion/styled";
import HeroBackground from "./Hero-img.png";

export const HeroContainer = styled.section`
  background-size: cover;
  height: 100%; // This will make it cover the full viewport height
  background-image: url("${HeroBackground}");
  background-size: cover, cover;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  position: absolute
  top: 0;
  left:0;
  z-index: -1
`;

export const HeroContent = styled.div`
  /* Your styles for content positioning and styling */
  color: #fff;
  padding: 106px 20px 245px 20px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }
`;
