import styled from 'styled-components';

const LeftNavPostioner = styled.div`
  flex-shrink: 0;
  z-index: 1000;
  width: 164px;
  box-sizing: border-box;
  box-shadow: 0 0 0 hsla(210, 8%, 5%, 0.05);
  transition: box-shadow ease-in-out 0.1s, transform ease-in-out 0.1s;
  transform: translateZ(0);
`;

const LeftNavContainer = styled.div`
  position: sticky;
  top: 0;
  top: 56px;
  overflow-y: auto;
  width: auto;
  max-height: 100vh;
  max-height: calc(100vh - 56px);
  margin-bottom: calc(8px * 1);
  padding-top: calc(24px * 1);
`;

const LeftNavList = styled.ol`
  margin: 0 0 calc(12px * 1);
  padding: 0;
  list-style: none;
`;

const LeftNavListItem = styled.a`
  display: block;
  padding: calc(4px * 1);
  padding-left: calc(8px * 1);
  color: hsl(210, 8%, 35%);
  font-size: 13px;
  line-height: 2;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
    border-right: 3px solid hsl(27, 90%, 55%);
  }
  &:visited {
    font-weight: bold;
    background: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
    border-right: 3px solid hsl(27, 90%, 55%);
  }
`;

const LeftNavListItemPublic = styled.li`
  display: block;
  color: hsl(210, 8%, 35%);
  margin-top: calc(16px * 1);
  padding-bottom: calc(4px * 1);
  padding-left: calc(8px * 1);
  font-size: 13px;
  line-height: 2;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
    border-right: 3px solid hsl(27, 90%, 55%);
  }
  &:visited {
    font-weight: bold;
    background: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
    border-right: 3px solid hsl(27, 90%, 55%);
  }
`;

const LeftNavLink = styled.a`
  display: flex;
  padding: 4px 4px 4px 30px;
  color: hsl(210, 8%, 35%);
  font-size: 13px;
  line-height: 2;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
    border-right: 3px solid hsl(27, 90%, 55%);
  }
  &:visited {
    font-weight: bold;
    background: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
    border-right: 3px solid hsl(27, 90%, 55%);
  }
`;

const LeftNav = () => {
  return (
    <LeftNavPostioner>
      <LeftNavContainer>
        <LeftNavList>
          <li>
            <LeftNavListItem>Home</LeftNavListItem>
          </li>
          <LeftNavList>
            <LeftNavListItemPublic>PUBLIC</LeftNavListItemPublic>
            <LeftNavLink>
              {/* <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
                <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
              </svg> */}
              <span>Questions</span>
            </LeftNavLink>
            <LeftNavLink>Tags</LeftNavLink>
            <LeftNavLink>Users</LeftNavLink>
            <LeftNavLink>Companies</LeftNavLink>
            <LeftNavListItemPublic>Collectives</LeftNavListItemPublic>
            <LeftNavLink>Explore Collectives</LeftNavLink>
          </LeftNavList>
        </LeftNavList>
        <LeftNavListItemPublic>TEAMS</LeftNavListItemPublic>
        <LeftNavLink>Create free Team</LeftNavLink>
      </LeftNavContainer>
    </LeftNavPostioner>
  );
};

export default LeftNav;
