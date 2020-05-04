import styled from "styled-components";

const MarvelImg = styled.img.attrs((props) => ({
  src: props.img,
}))`
  width: 70px;
  height: 60px;
  margin-top: 0px;
  padding: 0 10px;
`;

export default MarvelImg;
