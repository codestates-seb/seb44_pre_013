// 미디어 쿼리를 재사용 가능하도록 정의
const customMediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export default media;
