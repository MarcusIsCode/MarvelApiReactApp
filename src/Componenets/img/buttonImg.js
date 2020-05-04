import styled from "styled-components";
const ButtonImg = styled.img.attrs((props) => ({
  src: props.img,
}))`
  width: 80%;
`;

export default ButtonImg;
