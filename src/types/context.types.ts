import { Item } from './component.ui.types';

export type Action = {
  type: string;
  value: object;
};

export type ThemeColors = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  line: string;
  disabled: string;
  background: string;
  onBackground: string;
  error: string;
  onError: string;
  success: string;
  onSuccess: string;
  warn: string;
  onWarn: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  tertiary: string;
  onTertiary: string;
  overlayWhite: string;
  overlayDark: string;
  onOverlay: string;
  masked: string;
  link: string;
  sideBar: string;
  filterBoxBackground: string;
  sectionBorderLine: string;
  pieChart: string[];
  stepping1: string;
  stepping2: string;
  stepping3: string;
  containerBackground: string;
  highlight: string;
  highlightBackground: string;
  tableHeaderBackground: string;
  tableRowBackground: string;
  modalBackground: string;
};

export type Theme = {
  mode: `light` | `dark`;
};

export type Language = {
  mode: `en_us` | `ms_my`;
};

export type ModalError = {
  isVisible: boolean;
  title?: string;
  message?: string;
};

export type NewClientAccountCreation = {
  documentUploadType: Item;
  image: {
    name: string;
    path: string;
    file: File;
  };
  image1: {
    name: string;
    path: string;
    file: File;
  };
  identityAnalysedResult: {
    fullname: string;
    idType: Item;
    idNo: string;
    address: string;
    postcode: string;
    city: string;
    state: Item;
    country: Item;
  };
  age: string;
  gender: Item;
  maritalStatus: Item;
  numberOfDependant: string;
  totalAnnualIncome: Item;
  investmentEligibilityCheck: {
    id: string;
    options: Item;
  }[];
  numberOfCarLoan: string;
  numberOfHousingLoan: string;
  employmentType: Item;
  employmentSector: Item;
  occupation: Item;
  sourceOfFunds: Item[];
  monthlyIncome: string;
  monthlyExpenses: string;
  assests: string;
  liabilities: string;
  currentInvestmentAmount: string;
  expectedInitialInvestment: string;
  fullName: string;
  idType: Item;
  idNo: string;
  dateOfBirth: string;
  nationality: Item;
  email: string;
  isSameAsICAddress: boolean;
  address: string;
  postcode: string;
  city: string;
  state: Item;
  country: Item;
  proofOfResidence: {
    name: string;
    path: string;
  };
  taxDeclarations: {
    taxResidenceCountry: Item;
    tinNumber: string;
  }[];
  investmentExperiences: {
    qid: string;
    options: { title: string; value: string };
  }[];
  riskType: Item;
  productCode: Item;
  isRiskDeclarationChecked: boolean;
  marketProducts: Item[];
};
