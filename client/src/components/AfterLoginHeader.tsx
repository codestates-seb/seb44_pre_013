import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiPaperTray } from 'react-icons/gi';
import { FaTrophy } from 'react-icons/fa';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setLogout } from '../store/loginSlice';

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
  height: 56px;
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

// 로고
const HeaderLogo = styled.span`
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
  padding: 0 calc(8px * 1);
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
  width: 776px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 0.188rem;
`;

const HeaderMypageIcon = styled(BsFillPersonFill)`
  height: 100%;
  margin-right: 4px;
  padding: 0 calc(16px * 1);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: hsl(210, 8%, 15%);
  width: 50px;
  &:hover {
    background-color: lightgray;
  }
`;

const HeaderRightContents = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
`;

const HeaderTrayIcon = styled(GiPaperTray)`
  height: 50px;
  margin-right: 4px;
  padding: 0 calc(6px * 1);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: hsl(210, 8%, 35%);
  width: 30px;
  &:hover {
    background-color: lightgray;
  }
`;
const HeaderTrophyIcon = styled(FaTrophy)`
  height: 50px;
  margin-right: 4px;
  padding: 0 calc(6px * 1);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: hsl(210, 8%, 35%);
  width: 30px;
  &:hover {
    background-color: lightgray;
  }
`;
const HeaderQuestionIcon = styled(BsQuestionCircleFill)`
  height: 50px;
  margin-right: 4px;
  padding: 0 calc(6px * 1);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: hsl(210, 8%, 35%);
  width: 30px;
  &:hover {
    background-color: lightgray;
  }
`;
const HeaderMessageIcon = styled(RiLogoutBoxFill)`
  height: 50px;
  margin-right: 4px;
  padding: 0 calc(6px * 1);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: hsl(210, 8%, 35%);
  width: 30px;
  &:hover {
    background-color: lightgray;
  }
`;

const AfterLoginHeader = () => {
  const dispatch = useDispatch();

  return (
    <HeaderPositioner>
      <HeaderContainer>
        <HeaderLogo>
          <Link to="/">
            <img src="https://i.ibb.co/tCPLnm3/Header-Logo-removebg-preview.png" width="166px" />
          </Link>
        </HeaderLogo>
        <HeaderNav>
          <Link to="/">
            <HeaderNavItem>Products</HeaderNavItem>
          </Link>
        </HeaderNav>
        <HeaderSearchComponent>
          <HeaderSearchIcon />
          <HeaderSearchbar aria-label="Search" placeholder="Search..." />
        </HeaderSearchComponent>
        <HeaderMypageIcon />
        <HeaderRightContents>
          <HeaderTrayIcon />
          <HeaderTrophyIcon />
          <HeaderQuestionIcon />
          <HeaderMessageIcon
            onClick={() => {
              dispatch(setLogout());
              location.reload();
            }}
          />
        </HeaderRightContents>
      </HeaderContainer>
    </HeaderPositioner>
  );
};

export default AfterLoginHeader;
