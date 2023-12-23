import styled from "@emotion/styled";

export const Arrow = styled.div`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

export const LeftArrow = styled(Arrow)`
  left: 0px;

  svg {
    stroke-width: 2px;
    fill: #fcc857;
    width: 35px;
    height: 35px;
  }
`;

export const RightArrow = styled(Arrow)`
  right: 0px;

  svg {
    stroke-width: 2px;
    fill: #fcc857;
    width: 35px;
    height: 35px;
  }
`;

export const Container = styled.div`
  padding: 0px 28px;
  position: relative;
  hieght: 100%;
`;

export const SlideContainer = styled.div`
  justify-content: center;
  align-text: center;
`;

export const Card = styled.div`
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  background: #fff;
`;

export const ImgContainer = styled.div`
  height: 161px;
`;

export const CardDisctription = styled.div`
  padding: 13px 17px 20px;
`;
export const CardTitle = styled.h3`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 11px;
`;

export const Description = styled.p`
  margin-bottom: 11px;
`;

export const Image = styled.img`
  width: 100%; // Makes the image take the full width of its container
  height: 100%; // Makes the image take the full height of its container
  object-fit: cover; // Ensures the image covers the area without stretching
  display: block;
`;

export const Button = styled.button`
  padding: 11px 28px;
  background: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  margin-bottom: 0px;

  &:hover {
    background-color: #fcc857;
  }
`;
