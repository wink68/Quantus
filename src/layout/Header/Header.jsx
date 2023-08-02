import { Container, LoginBtn, LogoHeader, Menu, MenuBtn, Navbar, NoticeBtn, Wrapper } from './styled';

function Header() {
  return (
    <Wrapper>
      <Container>
        <LogoHeader>
          <img src='logo.png' alt='로고' />
          <LoginBtn>로그인 하러가기</LoginBtn>
        </LogoHeader>
      </Container>
      <Container>
        <Navbar>
          <Menu>
            <MenuBtn>백테스트</MenuBtn>
            <MenuBtn>자산배분</MenuBtn>
            <MenuBtn>포트폴리오 추출</MenuBtn>
            <MenuBtn>
              <img src='beta.png' alt='betaLogo' />
              <span>실전 투자</span>
            </MenuBtn>
            <MenuBtn>전략 예시</MenuBtn>
            <MenuBtn>사용권 구매</MenuBtn>
            <MenuBtn>고객지원</MenuBtn>
          </Menu>
          <NoticeBtn>
            <img src='newNotice.svg' alt='공지사항' />
            <span>공지사항</span>
          </NoticeBtn>
        </Navbar>
      </Container>
    </Wrapper>
  );
}

export default Header;