import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';

// 상단 고정, 위치
const HeaderPositioner = styled.div`
  box-sizing: border-box;
  position: fixed !important;
  left: 0px !important;
  top: 0px !important;
  min-width: auto;
  width: 100%;
  z-index: 5056;
  background-color: hsl(0, 0%, 100%);
  height: 3.5rem;
  display: flex;
  border-top: 3px solid hsl(27, 90%, 55%);
  border-bottom: 1px solid hsl(210, 8%, 85%);
  align-items: center;
  justify-content: center;
`;

// 헤더 내용이 들어갈 영역
const HeaderContainer = styled.div`
  width: 97.2307692rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

// 메뉴 아이콘
const HeaderMenuIcon = styled(GiHamburgerMenu)`
  height: 100%;
  margin-right: 4px;
  padding: 0 calc(16px * 1);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: hsl(210, 8%, 15%);
  width: 3.125rem;
  &:hover {
    background-color: lightgray;
  }
`;

// 로고
const HeaderLogo = styled.a`
  padding: 5 calc(8px * 1);
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  margin-left: 0;
  width: 170px;
  height: 100%;
  box-sizing: border-box;
  background-size: cover;
  color: hsl(206, 100%, 40%);
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

// Product
const HeaderNav = styled.ul`
  background-color: none;
  color: hsl(210, 8%, 35%);
  font: unset;
  font-size: 13px;
  white-space: nowrap;
  align-items: center;
  border: none;
  border-radius: 1000px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: auto;
  margin-top: 4px;
  margin-left: 10px;
  margin-right: 10px;
  list-style-type: none;
`;

const HeaderNavItem = styled.li`
  padding: calc(6px * 1) calc(12px * 1);
  border-radius: 5px;
  &:hover {
    background-color: lightgray;
  }
`;

const HeaderSearchComponent = styled.form`
  padding: 5px calc(8px * 1);
  display: flex;
  align-items: center;
  position: relative;
  width: 686px;
  height: 32px;
`;

const HeaderSearchIcon = styled(AiOutlineSearch)`
  right: auto;
  left: 18px;
  margin-top: -9px;
  pointer-events: none;
  position: absolute;
  top: 50%;
  color: hsl(210, 8%, 55%);
`;

const HeaderSearchbar = styled.input`
  padding: 7px 9px 7px 32px;
  border-color: hsl(210, 8%, 75%);
  background-color: hsl(0%, 0%, 100%);
  color: rgb(106, 115, 124);
  border: 1px solid rgb(159, 166, 173);
  display: block;
  line-height: calc((13 + 2) / 2);
  width: 672px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 0.188rem;
`;

const HeaderRightContents = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
`;

const HeaderLogin = styled.li`
  background-color: hsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  border: 1px solid hsl(206, 100%, 52%);
  border-radius: 3px;
  font-size: 13px;
  padding: 8px 10px;
  width: 100%;
  height: 32px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-weight: normal;
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  align-items: center;
  margin: 2px;
  &:hover {
    background-color: hsl(206, 93%, 83.5%);
  }
`;

const HeaderSignUp = styled.li`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  border: 1px solid hsl(206, 100%, 52%);
  border-radius: 3px;
  font-size: 13px;
  padding: 8px 10px;
  width: 100%;
  height: 32px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-weight: normal;
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  align-items: center;
  margin: 2px;
  &:hover {
    background-color: hsl(209, 100%, 37.5%);
  }
`;

const BeforeLoginHeader = () => {
  return (
    <HeaderPositioner>
      <HeaderContainer>
        <HeaderMenuIcon />
        <HeaderLogo>
          <Link to="/">
            <img
              src="https://fe-img-uploads.s3.ap-northeast-2.amazonaws.com/HeaderLogo-removebg-preview.png"
              width="166px"
            />
          </Link>
        </HeaderLogo>
        <HeaderNav>
          <Link to="/">
            <HeaderNavItem>About</HeaderNavItem>{' '}
          </Link>
          <Link to="/">
            <HeaderNavItem>Products</HeaderNavItem>{' '}
          </Link>
          <Link to="/">
            <HeaderNavItem>For Teams</HeaderNavItem>{' '}
          </Link>
        </HeaderNav>
        <HeaderSearchComponent>
          <HeaderSearchIcon />
          <HeaderSearchbar aria-label="Search" placeholder="Search..." />
        </HeaderSearchComponent>
        <HeaderRightContents>
          <Link to="/login">
            <HeaderLogin>Log in</HeaderLogin>
          </Link>
          <Link to="/signup">
            <HeaderSignUp>Sign up</HeaderSignUp>
          </Link>
        </HeaderRightContents>
      </HeaderContainer>
    </HeaderPositioner>
  );
};

export default BeforeLoginHeader;
