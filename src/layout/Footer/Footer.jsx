import { Container, FooterBtn, FooterBtns, FooterInfo, PolicyBtn, PolicyBtns, Wrapper } from './styled';

function Footer() {
  return (
    <>
      <Wrapper>
        <Container>
          <FooterInfo>
            <img src='logo.png' alt='로고' />
            <p class='title'>주식회사 퀀터스테크놀로지스</p>
            <p class='content'>대표자명: 이재민 ┃ 주소: 서울특별시 강남구 선릉로 93길 54, 6층 6062호 (역삼동, 일환빌딩)</p>
            <p class='content'>사업자등록번호: 245-88-02569</p>
            <p class='content'>문의: info@quantus.kr</p>
            <p class='content'>비즈니스 관련 문의: 070-4193-5192 (퀀터스 이용 문의는 고객지원의 1:1 문의, 혹은 메일로 문의주세요.)</p>
            <p class='rights'>© 2023 Quantus Technologies. All rights reserved.</p>
          </FooterInfo>
          <FooterBtns>
            <FooterBtn>Fire로 가는길</FooterBtn>
            <FooterBtn>채용공고</FooterBtn>
            <PolicyBtns>
              <PolicyBtn href='https://www.quantus.kr/service/useservice'>개인정보처리방침</PolicyBtn>
              <PolicyBtn href='https://www.quantus.kr/service'>이용약관</PolicyBtn>
            </PolicyBtns>
          </FooterBtns>
        </Container>
      </Wrapper>
    </>
  );
}

export default Footer;