import { ThemeColors } from '@/types';

const common = {
  text: `rgba(254, 254, 255, 0.9)`,
  text1: `rgba(254, 254, 255, 0.75)`,
  text2: `rgba(254, 254, 255, 0.5)`,
  text3: `rgba(254, 254, 255, 0.2)`,
  text4: `rgba(254, 254, 255, 0.1)`,
  line: `rgba(200, 200, 200, 1)`,
  disabled: `rgba(62, 52, 111, 1)`,

  background: `linear-gradient(to left, rgba(14, 3, 24, 1) 0%, rgba(10, 7, 30, 1) 18%, rgba(17, 12, 36, 1) 32%, 
  rgba(29, 23, 49, 1) 60%, rgba(41, 34, 64, 1) 90%, rgba(42, 36, 64, 1) 100% )`,
  onBackground: `rgba(255, 255, 255, 0.1)`,
};

const main = {
  error: `rgba(255, 0, 0, 1)`,
  onError: `rgba(255, 255, 255, 1)`,
  success: `rgba(102, 192, 126, 1)`,
  onSuccess: `rgba(255, 255, 255, 1)`,
  warn: `rgba(255, 204, 0, 1)`,
  onWarn: `rgba(255, 255, 255, 1)`,

  primary: `rgba(133, 97, 245, 1)`,
  onPrimary: `rgba(255, 255, 255, 1)`,
  secondary: `rgba(78, 63, 149, 1)`,
  onSecondary: `rgba(255, 255, 255, 1)`,
  tertiary: `rgba(227, 220, 248, 1)`,
  onTertiary: `rgba(0, 0, 0, 1)`,

  overlayWhite: `rgba(255, 255, 255, 0.4)`,
  overlayDark: `rgba(0, 0, 0, 0.5)`,
  onOverlay: `rgba(255, 255, 255, 1)`,
  masked: `rgba(0, 0, 0, 0.1)`,

  link: `rgba(183, 165, 255, 1)`,
  sideBar: `rgba(255, 255, 255, 0.01)`,
  filterBoxBackground: `rgba(181, 221, 251, 0.44)`,
  sectionBorderLine: `rgba(57, 133, 194, 1)`,
  pieChart: [
    `rgba(68, 53, 129, 1)`,
    `rgba(183, 165, 255, 1)`,
    `rgba(108, 92, 170)`,
    `rgba(108, 83, 210)`,
    `rgba(255, 251, 158)`,
    `rgba(233, 187, 77)`,
    `rgba(162, 162, 162)`,
  ],
  componentLabel: `rgba(195, 196, 206, 1)`,
  stepping1: `rgba(255, 255, 255, 1)`,
  stepping2: `rgba(183, 165, 255, 1)`,
  stepping3: `rgba(65, 88, 255, 1)`,
  containerBackground: `rgba(55, 46, 98, 0.63)`,
  highlight: `rgba(0, 255, 178, 1)`,
  highlightBackground: `rgba(0, 255, 178, 0.1)`,
  tableHeaderBackground: `rgba(61, 48, 100, 1)`,
  tableRowBackground: `rgba(61, 48, 100, 0.65)`,
  modalBackground: `rgba(34, 29, 61, 1)`,
};

const darkTheme: ThemeColors = {
  ...common,
  ...main,
};

export default darkTheme;
