import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(14 14 14);
`;

export const Container = styled.div`
  margin-top: 170px;
  margin-bottom: 110px;
  width: 1020px;
  min-height: 810px;
  position: relative;
`;

export const Title = styled.div`
  margin-bottom: 28px;

  font-size: 18px;
  font-weight: 500;
`;

export const AlgoCon = styled.div`
  position: relative;
  display: inline-block;
  width: 640px;
`;

export const AlgoTitle = styled.div`
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 300;
`;

export const Subtitle = styled.div`
  margin-top: 38px;
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 300;
`;

export const TermTitle = styled.div`
  margin-top: 80px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 18px;
`;