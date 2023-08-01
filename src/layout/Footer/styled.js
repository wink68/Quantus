import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  width: 100vw;
  min-width: 1020px;
  height: 374px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(0 0 0);
`;

export const FooterCon = styled.div`
  width: 1020px;
  display: flex;
  justify-content: space-between;
`;

export const FooterInfo = styled.div`
  margin-top: 50px;

  color: rgb(110 110 110);
  img {
    height: 37px;
    cursor: pointer;
  }
  .title {
    margin: 28px 0 16px 0;
  }
  .content {
    margin: 14px 0;
  }
  .rights {
    margin: 28px 0 50px 0;
  }
`;

export const FooterBtns = styled.div`
  margin-top: 50px;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const FooterBtn = styled.a`
  padding-block: 6px;
  padding-inline: 27px;
  display: block;
  text-align: end;

  color: rgb(230 230 230);
  border: 1px solid rgb(236 38 38);
  border-radius: 16px;
  cursor: pointer;
`;

export const PolicyBtns = styled.div`
  position: absolute;
  right: 0px;
  top: 257px;
  display: flex;
  gap: 32px;
`

export const PolicyBtn = styled.a`
  color: rgb(110 110 110);
  text-decoration-style: solid;
  text-decoration-line: none;
  cursor: pointer;
`;