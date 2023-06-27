import styled from 'styled-components';

const MypageContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: white;
  border-radius: 0;
  border: 1px solid hsl(210, 8%, 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
  box-sizing: border-box;
`;

const MypageInfoContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
`;
const MypageInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 16px;
`;
const UserImg = styled.div`
  width: 128px;
  height: 128px;
  background-image: url(../../public/UserImg.png);
`;
const UserInfoDiv = styled.div`
  display: flex;
  margin: 16px;
`;
const UserNameDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 8px;
  box-sizing: inherit;
`;
const UserName = styled.div`
  margin: 8px;
  margin-bottom: 12px;
  font-size: 2.615rem;
  line-height: 1 !important;
`;
const UserInfoList = styled.ul`
  display: flex !important;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  margin-left: 4px;
  padding: 0;
  color: hsl(210, 8%, 45%);
`;
const UserInfo = styled.li`
  margin: 8px;
  vertical-align: baseline;
  font-size: 13px;
`;
const BtnContainer = styled.div`
  position: absolute !important;
  display: flex !important;
  right: 0 !important;
  top: 0 !important;
  flex-wrap: wrap;
  margin: 6px;
`;
const BtnProfile = styled.div`
  margin: 6px;
  padding: 6px;
  border: 1px solid hsl(210, 8%, 45%);
  color: hsl(210, 8%, 45%);
  font-size: 13px;
`;
const BtnHeaderNav = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  flex-wrap: wrap;
`;
const BtnNav = styled.div`
  margin-top: 16px;
  color: hsl(210, 8%, 35%);
  font: unset;
  font-size: 13px;
  padding: 6px 12px;
  white-space: nowrap;
  align-items: center;
  border: none;
  border-radius: 1000px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: auto;
  &:hover {
    background-color: hsl(210, 8%, 85%);
  }
`;
const MypageSectionPositioner = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 48px;
`;
const MypageNavContainer = styled.div`
  /* min-width: 97rem; */
  margin-right: 32px;
  flex-shrink: 0 !important;
  display: block;
`;
const MypageNavList = styled.ul`
  position: sticky !important;
  top: 64px !important;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const MypageNavListItem = styled.a`
  width: 120px;
  height: 30px;
  background-color: white;
  color: hsl(210, 8%, 15%);
  font-size: 13px;
  padding: 6px 12px;
  white-space: normal;
  align-items: center;
  border: none;
  border-radius: 1000px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: hsl(210, 8%, 85%);
  }
`;
const MypageSectionContainer = styled.section`
  max-width: 100%;
  flex-grow: 1;
  display: block;
`;

const MypageSummaryTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 21px;
  font-weight: normal;
`;

const MypageSummaryTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 24px;
  padding: 24px;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 5px;
  color: 1px solid hsl(210, 8%, 45%);
  font-size: 13px;
`;

const Mypage = () => {
  return (
    <MypageContainer>
      <MypageInfoContainer>
        <MypageInfo>
          <UserImg />
          <UserInfoDiv>
            <UserNameDiv>
              <UserName>User</UserName>
            </UserNameDiv>
          </UserInfoDiv>
        </MypageInfo>
        <BtnContainer>
          <BtnProfile>Edit profile</BtnProfile>
          <BtnProfile>Network profile</BtnProfile>
        </BtnContainer>
      </MypageInfoContainer>
      <UserInfoList>
        <UserInfo>Member for 100 days</UserInfo>
        <UserInfo>Last seen this week</UserInfo>
        <UserInfo>Visited 100 days, 100 consecutive</UserInfo>
      </UserInfoList>
      <BtnHeaderNav>
        <BtnNav>Profile</BtnNav>
        <BtnNav>Activity</BtnNav>
        <BtnNav>Saves</BtnNav>
        <BtnNav>Settings</BtnNav>
      </BtnHeaderNav>
      <MypageSectionPositioner>
        <MypageNavContainer>
          <MypageNavList>
            <li>
              <MypageNavListItem>Summary</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Answers</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Questions</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Tags</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Articles</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Badges</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Following</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Bounties</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Reputation</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>All actions</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Responses</MypageNavListItem>
            </li>
            <li>
              <MypageNavListItem>Votes</MypageNavListItem>
            </li>
          </MypageNavList>
        </MypageNavContainer>
        <MypageSectionContainer>
          <MypageSummaryTitle>Summary</MypageSummaryTitle>
          <MypageSummaryTable>You have not answered any questions</MypageSummaryTable>
          <MypageSummaryTitle>Answers</MypageSummaryTitle>
          <MypageSummaryTable>You have not answered any questions</MypageSummaryTable>
          <MypageSummaryTitle>Questions</MypageSummaryTitle>
          <MypageSummaryTable>You have not asked any questions</MypageSummaryTable>
          <MypageSummaryTitle>Tags</MypageSummaryTitle>
          <MypageSummaryTable>You have not participated in any tags</MypageSummaryTable>
          <MypageSummaryTitle>Reputation</MypageSummaryTitle>
          <MypageSummaryTable>You have not recent reputation changes</MypageSummaryTable>
        </MypageSectionContainer>
      </MypageSectionPositioner>
    </MypageContainer>
  );
};

export default Mypage;
