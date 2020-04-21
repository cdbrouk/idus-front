export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  laptop: mediaQuery(1024),
  tablet: mediaQuery(768),
};

export default media;
