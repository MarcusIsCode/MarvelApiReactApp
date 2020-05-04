import styled from "styled-components";

const FrontPageBox = styled.div`
  position: relative;
  top:10vh;
  margin: 0 auto;
  width: 100%;
  height: 90vh;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(69, 86, 102, 1) 0%,
    rgba(34, 34, 34, 1) 90%
  );
  display: flex;
  align-items:center;
  flex-direction:column;
 
`;

export default FrontPageBox