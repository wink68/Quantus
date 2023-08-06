import logo from '../../assets/logo.png';
import beta from '../../assets/beta.png';
import newNotice from '../../assets/newNotice.svg';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/alloc/static_alloc');
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoHeader>
          <img src={logo} alt='logo' />
          <S.LoginBtn>로그인 하러가기</S.LoginBtn>
        </S.LogoHeader>
      </S.Container>
      <S.Container>
        <S.Navbar>
          <S.Menu>
            <S.MenuBtn>백테스트</S.MenuBtn>
            <S.MenuBtn onClick={handleClick}>자산배분</S.MenuBtn>
            <S.MenuBtn>포트폴리오 추출</S.MenuBtn>
            <S.MenuBtn>
              <img src={beta} alt='beta_logo' />
              <span>실전 투자</span>
            </S.MenuBtn>
            <S.MenuBtn>전략 예시</S.MenuBtn>
            <S.MenuBtn>사용권 구매</S.MenuBtn>
            <S.MenuBtn>고객지원</S.MenuBtn>
          </S.Menu>
          <S.NoticeBtn>
            <img src={newNotice} alt='notice' />
            <span>공지사항</span>
          </S.NoticeBtn>
        </S.Navbar>
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;