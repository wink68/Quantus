import { styled } from 'styled-components';

export const Wrapper = styled.header`
  width: 100vw;
  z-index: 2;

  background-color: rgb(14 14 14);
`;

export const Container = styled.div`
  min-width: 1020px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid rgb(30 30 30);
`;

export const LogoHeader = styled.div`
  width: 1020px;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 37px;
    cursor: pointer;
  }
`;

export const LoginBtn = styled.p`
  height: 20px;

  color: rgb(236 38 38);
  cursor: pointer;
`;

export const Navbar = styled.nav`
  width: 1020px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: rgb(252 252 252);
  font-size: 14px;
`;

export const Menu = styled.ul`
  width: 874px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuBtn = styled.li`
  position: relative;
  &: hover {
    color: rgb(236 38 38);
    transition: 0.5s;
    cursor: pointer;
  }
  img {
    position: absolute;
    top: -22px;
    right: -28px;
    width: 51px;
  }
`;

export const NoticeBtn = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;