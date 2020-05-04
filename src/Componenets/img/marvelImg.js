import styled from "styled-components";

const MarvelImg = styled.img.attrs((props) => ({
  src: props.img,
}))`
  width: 320px;
  margin-top: 30px;
  padding: 0 10px;
`;

export default MarvelImg;
