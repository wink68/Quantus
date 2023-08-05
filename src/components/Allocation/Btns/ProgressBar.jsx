import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: rgb(14 14 14);
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: rgb(236, 97, 38);
  border-radius: 6px;
  text-align: center;
  transition: width 2s;

  ${({ progress }) => {
    if (progress <= 40) {
      return `width: 5%;`;
    } else if (progress <= 60) {
      return `width: 15%;`;
    } else if (progress <= 80) {
      return `width: 30%;`;
    } else if (progress <= 100) {
      return `width: 45%;`;
    } else if (progress <= 120) {
      return `width: 60%;`;
    } else {
      return `width: 10%;`;
    }
  }}
`;

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Progress progress={progress} />
    </Container>
  );
};

export default ProgressBar;