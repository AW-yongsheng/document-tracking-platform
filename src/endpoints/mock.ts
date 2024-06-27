export const login = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    code: `MY000010`,
    name: `Loh`,
    display_name: `Loh Jyh Yeong`,
    type: `INV`,
    parent_code: `MY000001`,
    token: `ashdinsakldnkals91092012`,
  },
};

export const login1 = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    code: `MY000001`,
    name: `Ryan`,
    display_name: `Tong Yee Chow`,
    type: `SV`,
    parent_code: ``,
    token: `ashdinsakldnkals91092012`,
  },
};

export const documentUploadTypes = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        label: `Malaysia IC`,
        value: `IC`,
        image: `/ic.png`,
        description: `*Please upload Malaysia IC if you are Malaysian`,
        type: [
          { label: `Front Side`, value: `front` },
          { label: `Back Side`, value: `back` },
        ],
      },
      {
        label: `Passport`,
        value: `PASSPORT`,
        image: `/passport.png`,
        description: ``,
        type: [
          { label: `Personal Details Page`, value: `front` },
          { label: `Visa/PR`, value: `back` },
        ],
      },
    ],
  },
};

export const investmentEligibilityChecklist = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `1`,
        title: `Are you a Malaysia citizen/permanent resident?`,
        options: [
          { value: `1`, label: `Yes` },
          { value: `2`, label: `No` },
        ],
      },
      {
        id: `2`,
        title: `Do you currently hold permanent resident status in any countries other than Malaysia?`,
        options: [
          { value: `1`, label: `Yes` },
          { value: `2`, label: `No` },
        ],
      },
      {
        id: `3`,
        title: `Are you currently residing in Malaysia?`,
        options: [
          { value: `1`, label: `Yes` },
          { value: `2`, label: `No` },
        ],
      },
      {
        id: `4`,
        title: `Are you a US citizen or resident, or do you hold a green card?`,
        options: [
          { value: `1`, label: `Yes` },
          { value: `2`, label: `No` },
        ],
      },
    ],
  },
};

export const fundSources = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `873404e8-b8c4-4130-a3fd-bf026bd89762`,
        title: `Savings`,
        sequence: 0,
      },
      {
        id: `103c217b-3fb7-494a-b2dc-e07c4faeeb61`,
        title: `Salary`,
        sequence: 0,
      },
      {
        id: `de93bd0f-b88c-40e0-b100-268ad84efb10`,
        title: `Business Income`,
        sequence: 0,
      },
      {
        id: `b311e591-b377-4a3e-8327-cf53a6c04081`,
        title: `Investment`,
        sequence: 0,
      },
      {
        id: `d3068423-6c98-4b82-b753-40bfbd29c87d`,
        title: `Inheritance`,
        sequence: 0,
      },
    ],
  },
};

export const countries = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Malaysia`,
        sequence: 0,
      },
      {
        id: `f7c4314e-8b57-4964-8960-8bc12ad38c87`,
        title: `Singapore`,
        sequence: 0,
      },
    ],
  },
};

export const states = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `e8938ee6-f37e-4d1a-87a1-85922fb994fd`,
        title: `Kuala Lumpur`,
        sequence: 0,
      },
      {
        id: `8d9dfa38-3f4c-40ef-b353-34137aefe593`,
        title: `Selangor`,
        sequence: 0,
      },
    ],
  },
};

export const portfolios = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        code: `2874986e-443c-4f35-9efa-5339ca5a9403`,
        title: `Preservation`,
        description: `The preservation portfolio prioritises capital preservation with an extremely high allocation to government bonds that provides secure regular bond coupons while maintaining a small allocation to developed market stocks that provides dividends, capital appreciation & portfolio diversification effect.`,
        risk_level: 1,
        factsheet_url: `https://www.google.com`,
        sequence: 0,
        group_id: `cc287a35-0faa-495d-ac9a-887727815e11`,
        group_title: `Starter`,
        allocations: [
          {
            title: `SPDR Portfolio S&P 1500 Composite Stock Market`,
            class: `Stocks`,
            geographic: `U.S.`,
            abbreviation: `SPTM`,
            factsheet_url: `https://www.google.com`,
            percentage: `14.40`,
            sequence: 0,
          },
          {
            title: `Xtrackers MSCI Europe Hedged Equity`,
            class: `Stocks`,
            geographic: `Eu.`,
            abbreviation: `DBEU`,
            factsheet_url: `https://www.google.com`,
            percentage: `3.50`,
            sequence: 0,
          },
          {
            title: `Vanguard FTSE Pacific`,
            class: `Stocks`,
            geographic: `APAC`,
            abbreviation: `VPL`,
            factsheet_url: `https://www.google.com`,
            percentage: `2.10`,
            sequence: 0,
          },
          {
            title: `ABF Malaysia Bond Index Fund`,
            class: `Bonds`,
            geographic: `M'sia`,
            abbreviation: `0800EA.KL`,
            factsheet_url: `https://www.google.com`,
            percentage: `32.00`,
            sequence: 0,
          },
          {
            title: `SPDR Portfolio Intermediate Term Treasury`,
            class: `Bonds`,
            geographic: `U.S.`,
            abbreviation: `SPTI`,
            factsheet_url: `https://www.google.com`,
            percentage: `19.90`,
            sequence: 0,
          },
          {
            title: `SPDR Bloomberg International Treasury`,
            class: `Bonds`,
            geographic: `Global ex U.S.`,
            abbreviation: `BWX`,
            factsheet_url: `https://www.google.com`,
            percentage: `28.10`,
            sequence: 0,
          },
        ],
        performances: [
          {
            title: `par`,
            horizon_years: 1,
            percentage: `7.06`,
          },
          {
            title: `par`,
            horizon_years: 3,
            percentage: `-7.15`,
          },
          {
            title: `par`,
            horizon_years: 5,
            percentage: `9.34`,
          },
          {
            title: `cagr`,
            horizon_years: 5,
            percentage: `1.87`,
          },
          {
            title: `av`,
            horizon_years: 0,
            percentage: `5.60`,
          },
          {
            title: `mtd`,
            horizon_years: 5,
            percentage: `-17.58`,
          },
        ],
      },
    ],
  },
};

export const portfolio = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: {
      code: `2874986e-443c-4f35-9efa-5339ca5a9403`,
      title: `Preservation`,
      description: `The preservation portfolio prioritises capital preservation with an extremely high allocation to government bonds that provides secure regular bond coupons while maintaining a small allocation to developed market stocks that provides dividends, capital appreciation & portfolio diversification effect.`,
      risk_level: 1,
      factsheet_url: `https://www.google.com`,
      sequence: 0,
      group_id: `cc287a35-0faa-495d-ac9a-887727815e11`,
      group_title: `Starter`,
      allocations: [
        {
          title: `SPDR Portfolio S&P 1500 Composite Stock Market`,
          class: `Stocks`,
          geographic: `U.S.`,
          abbreviation: `SPTM`,
          factsheet_url: `https://www.google.com`,
          percentage: `14.40`,
          sequence: 0,
        },
        {
          title: `Xtrackers MSCI Europe Hedged Equity`,
          class: `Stocks`,
          geographic: `Eu.`,
          abbreviation: `DBEU`,
          factsheet_url: `https://www.google.com`,
          percentage: `3.50`,
          sequence: 0,
        },
        {
          title: `Vanguard FTSE Pacific`,
          class: `Stocks`,
          geographic: `APAC`,
          abbreviation: `VPL`,
          factsheet_url: `https://www.google.com`,
          percentage: `2.10`,
          sequence: 0,
        },
        {
          title: `ABF Malaysia Bond Index Fund`,
          class: `Bonds`,
          geographic: `M'sia`,
          abbreviation: `0800EA.KL`,
          factsheet_url: `https://www.google.com`,
          percentage: `32.00`,
          sequence: 0,
        },
        {
          title: `SPDR Portfolio Intermediate Term Treasury`,
          class: `Bonds`,
          geographic: `U.S.`,
          abbreviation: `SPTI`,
          factsheet_url: `https://www.google.com`,
          percentage: `19.90`,
          sequence: 0,
        },
        {
          title: `SPDR Bloomberg International Treasury`,
          class: `Bonds`,
          geographic: `Global ex U.S.`,
          abbreviation: `BWX`,
          factsheet_url: `https://www.google.com`,
          percentage: `28.10`,
          sequence: 0,
        },
      ],
      performances: [
        {
          title: `par`,
          horizon_years: 1,
          percentage: `7.06`,
        },
        {
          title: `par`,
          horizon_years: 3,
          percentage: `-7.15`,
        },
        {
          title: `par`,
          horizon_years: 5,
          percentage: `9.34`,
        },
        {
          title: `cagr`,
          horizon_years: 5,
          percentage: `1.87`,
        },
        {
          title: `av`,
          horizon_years: 0,
          percentage: `5.60`,
        },
        {
          title: `mtd`,
          horizon_years: 5,
          percentage: `-17.58`,
        },
      ],
    },
  },
};

export const portfolioPastPerformance = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        title: `par`,
        horizon_years: 1,
        percentage: `7.06`,
      },
      {
        title: `par`,
        horizon_years: 3,
        percentage: `-7.15`,
      },
      {
        title: `par`,
        horizon_years: 5,
        percentage: `9.34`,
      },
      {
        title: `cagr`,
        horizon_years: 5,
        percentage: `1.87`,
      },
      {
        title: `av`,
        horizon_years: 0,
        percentage: `5.60`,
      },
      {
        title: `mtd`,
        horizon_years: 5,
        percentage: `-17.58`,
      },
    ],
  },
};

export const portfolioInvestmentHorizon = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    horizon_years: 5,
    percentage: `-17.58`,
    description: `If your investment horizon is shorter than the recommended minimum, this portfolio may not be suitable for you.`,
    description1: `If you choose to withdraw before the recommended minimum time horizon, your projected maximum decline/dropdown in portfolio value may exceed`,
    description2: `based on portfolio performance in the last 5 years.`,
    description_value: `-24.22`,
  },
};

export const onboardingUserAgreement = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    html: `<style>ol { counter-reset: item } li:before { content: counters(item, ".") " "; counter-increment: item }</style>
    <p>This User Agreement ("Agreement") is a legal agreement between you ("User," "you," or "your") and [AutoWealth] ("Company," "we," "us," or "our") governing your use of the AutoWealth platform ("Platform") and related services. By creating an account and accessing or using our Platform, you agree to be bound by the terms and conditions of this Agreement. If you do not agree with these terms, please do not use our Platform.</p>
    <br />
    <ol>
    <li>Account Creation and Security
    <ol>
    <li style::before="content: counters(item, ".");counter-increment: item">You must be at least 18 years old to create an account with AutoWealth.
    <li>You agree to provide accurate, current, and complete information during the account creation process.</li>
    <li>You are responsible for maintaining the confidentiality of your account credentials, including your username and password. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.</li>
    </ol>
    </li> 
    <br />
    
    <li>Robo-Advisory Services
    <ol>
    <li>AutoWealth provides automated investment advisory services based on your investment goals, risk tolerance, and other criteria specified by you.</li>
    <li> You acknowledge that investment decisions made by AutoWealth are based on algorithms and historical data and may not always result in profitable outcomes.</li>
    <li>Past performance is not indicative of future results. AutoWealth does not guarantee any specific investment returns.</li>
    </ol>
    </li>
    <br />
    
    <li>Risks
    <ol>
    <li>nvesting involves risks, including the risk of loss of principal. You acknowledge that there are risks associated with investing in financial markets and that you are solely responsible for assessing and managing these risks.</li>
    <li>AutoWealth does not provide personalized investment advice and does not take into account your individual financial circumstances. You should consult with a qualified financial advisor before making any investment decisions.</li>
    </ol>
    </li>
    <br />

    <li> Fees
    <ol>
    <li>4.1. AutoWealth charges fees for its robo-advisory services. Details of these fees are outlined in the fee schedule available on our website.</li>
    </ol>
    </li>
    <br />
    <li>Privacy
    <ol>
    <li>Your privacy is important to us. Please refer to our Privacy Policy for information about how we collect, use, and disclose your personal information.</li>
    </ol>
    </li>
    <br />
    <li>Termination
    <ol>
    <li>We reserve the right to suspend or terminate your account and access to our Platform at any time, with or without cause and without prior notice.</li>
    </ol>
    </li>
    <br />

    <li>Limitation of Liability
    <ol>
    <li> In no event shall AutoWealth, its officers, directors, employees, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our Platform.</li>
    </ol>
    </li>
    <br />
    
    <li> Governing Law
    <ol>
    <li> This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.</li>
    </ol>
    </li>
    <br />

    <li>Amendments
    <ol>
    <li> We reserve the right to modify or amend this Agreement at any time. Any changes will be effective immediately upon posting the revised Agreement on our website. Your continued use of our Platform after any such changes constitutes your acceptance of the revised Agreement.</li>
    </ol>
    </li>
    <br />
    
    <li>Contact Information
    <ol>
    <li> If you have any questions or concerns about this Agreement, please contact us at [clientservices@autowealth.my].</li></ol>
    </li>
    </ol>
    `,
  },
};

export const indices = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        abbreviation: `SPX500`,
        title: `Standard & Poor's 500`,
        icon_url: `/logo_SPX500.png`,
        currency: `USD`,
        performances: [
          { date: `2024-03-01`, price: `5000` },
          { date: `2024-03-04`, price: `5001.3` },
          { date: `2024-03-05`, price: `5005` },
          { date: `2024-03-06`, price: `5012` },
          { date: `2024-03-07`, price: `5010` },
          { date: `2024-03-08`, price: `5009` },
          { date: `2024-03-11`, price: `5015` },
          { date: `2024-03-12`, price: `5026` },
          { date: `2024-03-13`, price: `5021` },
          { date: `2024-03-14`, price: `5022` },
          { date: `2024-03-15`, price: `5030` },
          { date: `2024-03-18`, price: `5035` },
          { date: `2024-03-19`, price: `5031` },
          { date: `2024-03-20`, price: `5030` },
          { date: `2024-03-21`, price: `5029` },
          { date: `2024-03-22`, price: `5036` },
          { date: `2024-03-25`, price: `5041` },
          { date: `2024-03-26`, price: `5040` },
          { date: `2024-03-27`, price: `5046` },
          { date: `2024-03-28`, price: `5049` },
          { date: `2024-03-29`, price: `5050` },
          { date: `2024-04-01`, price: `5051` },
          { date: `2024-04-02`, price: `5047` },
          { date: `2024-04-03`, price: `5045` },
          { date: `2024-04-04`, price: `5053` },
          { date: `2024-04-05`, price: `5050` },
          { date: `2024-04-08`, price: `5055` },
          { date: `2024-04-09`, price: `5056` },
          { date: `2024-04-10`, price: `5054` },
          { date: `2024-04-11`, price: `5060` },
          { date: `2024-04-12`, price: `5062` },
          { date: `2024-04-15`, price: `5063` },
          { date: `2024-04-16`, price: `5070` },
          { date: `2024-04-17`, price: `5076` },
          { date: `2024-04-18`, price: `5078` },
          { date: `2024-04-19`, price: `5081` },
          { date: `2024-04-22`, price: `5085` },
          { date: `2024-04-23`, price: `5092` },
          { date: `2024-04-24`, price: `5099` },
          { date: `2024-04-25`, price: `5103` },
          { date: `2024-04-26`, price: `5111` },
          { date: `2024-04-29`, price: `5126` },
          { date: `2024-04-30`, price: `5136` },
          { date: `2024-05-01`, price: `5144.76` },
          { date: `2024-05-02`, price: `5153.84` },
          { date: `2024-05-03`, price: `5167.11` },
          { date: `2024-05-06`, price: `5175.92` },
          { date: `2024-05-07`, price: `5181.26` },
          { date: `2024-05-08`, price: `5198.55` },
          { date: `2024-05-09`, price: `5106.77` },
          { date: `2024-05-10`, price: `5112.34` },
          { date: `2024-05-13`, price: `5128.46` },
          { date: `2024-05-14`, price: `5132.73` },
          { date: `2024-05-15`, price: `5149.98` },
          { date: `2024-05-16`, price: `5155.61` },
          { date: `2024-05-17`, price: `5160.79` },
          { date: `2024-05-20`, price: `5179.04` },
          { date: `2024-05-21`, price: `5181.47` },
          { date: `2024-05-22`, price: `5198.32` },
          { date: `2024-05-23`, price: `5230` },
          { date: `2024-05-24`, price: `5238.11` },
          { date: `2024-05-27`, price: `5304.72` },
        ],
      },
      {
        abbreviation: `KLSE`,
        title: `FTSE Malaysia KLCI`,
        icon_url: `/logo_KLSE.png`,
        currency: `MYR`,
        performances: [
          { date: `2024-03-01`, price: `1480.00` },
          { date: `2024-03-02`, price: `1490.27` },
          { date: `2024-03-03`, price: `1482.95` },
          { date: `2024-03-04`, price: `1497.83` },
          { date: `2024-03-05`, price: `1486.49` },
          { date: `2024-03-06`, price: `1485.74` },
          { date: `2024-03-07`, price: `1501.66` },
          { date: `2024-03-08`, price: `1495.28` },
          { date: `2024-03-09`, price: `1496.72` },
          { date: `2024-03-10`, price: `1502.43` },
          { date: `2024-03-11`, price: `1486.88` },
          { date: `2024-03-12`, price: `1511.07` },
          { date: `2024-03-13`, price: `1493.64` },
          { date: `2024-03-14`, price: `1516.23` },
          { date: `2024-03-15`, price: `1512.66` },
          { date: `2024-03-16`, price: `1483.98` },
          { date: `2024-03-17`, price: `1514.10` },
          { date: `2024-03-18`, price: `1519.55` },
          { date: `2024-03-19`, price: `1492.80` },
          { date: `2024-03-20`, price: `1509.22` },
          { date: `2024-03-21`, price: `1489.67` },
          { date: `2024-03-22`, price: `1504.45` },
          { date: `2024-03-23`, price: `1488.52` },
          { date: `2024-03-24`, price: `1518.06` },
          { date: `2024-03-25`, price: `1499.34` },
          { date: `2024-03-26`, price: `1498.52` },
          { date: `2024-03-27`, price: `1512.18` },
          { date: `2024-03-28`, price: `1506.80` },
          { date: `2024-03-29`, price: `1520.94` },
          { date: `2024-03-30`, price: `1523.10` },
          { date: `2024-03-31`, price: `1514.23` },
          { date: `2024-04-01`, price: `1515` },
          { date: `2024-04-02`, price: `1521` },
          { date: `2024-04-03`, price: `1518` },
          { date: `2024-04-04`, price: `1523` },
          { date: `2024-04-05`, price: `1527` },
          { date: `2024-04-08`, price: `1530` },
          { date: `2024-04-09`, price: `1529` },
          { date: `2024-04-10`, price: `1533` },
          { date: `2024-04-11`, price: `1535` },
          { date: `2024-04-12`, price: `1534` },
          { date: `2024-04-15`, price: `1538` },
          { date: `2024-04-16`, price: `1539` },
          { date: `2024-04-17`, price: `1546` },
          { date: `2024-04-18`, price: `1541` },
          { date: `2024-04-19`, price: `1542` },
          { date: `2024-04-22`, price: `1544` },
          { date: `2024-04-23`, price: `1548` },
          { date: `2024-04-24`, price: `1550` },
          { date: `2024-04-25`, price: `1551` },
          { date: `2024-04-26`, price: `1555` },
          { date: `2024-04-29`, price: `1554` },
          { date: `2024-04-30`, price: `1559` },
          { date: `2024-05-01`, price: `1556` },
          { date: `2024-05-02`, price: `1563` },
          { date: `2024-05-03`, price: `1560` },
          { date: `2024-05-06`, price: `1564` },
          { date: `2024-05-07`, price: `1569` },
          { date: `2024-05-08`, price: `1567` },
          { date: `2024-05-09`, price: `1572` },
          { date: `2024-05-10`, price: `1570` },
          { date: `2024-05-13`, price: `1576` },
          { date: `2024-05-14`, price: `1580` },
          { date: `2024-05-15`, price: `1571` },
          { date: `2024-05-16`, price: `1583` },
          { date: `2024-05-17`, price: `1584` },
          { date: `2024-05-20`, price: `1585` },
          { date: `2024-05-21`, price: `1593` },
          { date: `2024-05-22`, price: `1584` },
          { date: `2024-05-23`, price: `1599` },
          { date: `2024-05-24`, price: `1600` },
          { date: `2024-05-27`, price: `1619.81` },
        ],
      },
      {
        abbreviation: `NSDQ100`,
        title: `Nasdaq-100`,
        icon_url: `/logo_NSDQ100.png`,
        currency: `USD`,
        performances: [
          { date: `2024-03-01`, price: `18000` },
          { date: `2024-03-04`, price: `18010` },
          { date: `2024-03-05`, price: `18006` },
          { date: `2024-03-06`, price: `18013` },
          { date: `2024-03-07`, price: `18101` },
          { date: `2024-03-08`, price: `18095` },
          { date: `2024-03-11`, price: `18064` },
          { date: `2024-03-12`, price: `18088` },
          { date: `2024-03-13`, price: `18164` },
          { date: `2024-03-14`, price: `18146` },
          { date: `2024-03-15`, price: `18201` },
          { date: `2024-03-18`, price: `18131` },
          { date: `2024-03-19`, price: `18264` },
          { date: `2024-03-20`, price: `18222` },
          { date: `2024-03-21`, price: `18264` },
          { date: `2024-03-22`, price: `18254` },
          { date: `2024-03-25`, price: `18199` },
          { date: `2024-03-26`, price: `18249` },
          { date: `2024-03-27`, price: `18267` },
          { date: `2024-03-28`, price: `18299` },
          { date: `2024-03-29`, price: `18303` },
          { date: `2024-04-01`, price: `18321` },
          { date: `2024-04-02`, price: `18300` },
          { date: `2024-04-03`, price: `18278` },
          { date: `2024-04-04`, price: `18288` },
          { date: `2024-04-05`, price: `18299` },
          { date: `2024-04-08`, price: `18323` },
          { date: `2024-04-09`, price: `18364` },
          { date: `2024-04-10`, price: `18381` },
          { date: `2024-04-11`, price: `18396` },
          { date: `2024-04-12`, price: `18403` },
          { date: `2024-04-15`, price: `18370` },
          { date: `2024-04-16`, price: `18406` },
          { date: `2024-04-17`, price: `18421` },
          { date: `2024-04-18`, price: `18464` },
          { date: `2024-04-19`, price: `18478` },
          { date: `2024-04-22`, price: `18456` },
          { date: `2024-04-23`, price: `18485` },
          { date: `2024-04-24`, price: `18475` },
          { date: `2024-04-25`, price: `18493` },
          { date: `2024-04-26`, price: `18500` },
          { date: `2024-04-29`, price: `18530` },
          { date: `2024-04-30`, price: `18512` },
          { date: `2024-05-01`, price: `18506` },
          { date: `2024-05-02`, price: `18520` },
          { date: `2024-05-03`, price: `18531` },
          { date: `2024-05-06`, price: `18561.92` },
          { date: `2024-05-07`, price: `18568` },
          { date: `2024-05-08`, price: `18561` },
          { date: `2024-05-09`, price: `18589` },
          { date: `2024-05-10`, price: `18631` },
          { date: `2024-05-13`, price: `18624` },
          { date: `2024-05-14`, price: `18646` },
          { date: `2024-05-15`, price: `18689` },
          { date: `2024-05-16`, price: `18721` },
          { date: `2024-05-17`, price: `18703` },
          { date: `2024-05-20`, price: `18750` },
          { date: `2024-05-21`, price: `18777` },
          { date: `2024-05-22`, price: `18788` },
          { date: `2024-05-23`, price: `18803` },
          { date: `2024-05-24`, price: `18783` },
          { date: `2024-05-27`, price: `18808.35` },
        ],
      },
    ],
  },
};

export const myPortfolios = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        portfolio_code: `PORTFOLIO1`,
        portfolio_name: `Portfolio 1`,
        portfolio_group: `Starter`,
        portfolio_title: `Long Term Growth`,
        portfolio_risk_level: `4`,
        portfolio_value: `100020`,
        portfolio_values: [
          { effective_at: `2024-01-01`, portfolio_value: `75000` },
          { effective_at: `2024-01-02`, portfolio_value: `76052` },
          { effective_at: `2024-01-03`, portfolio_value: `76200` },
          { effective_at: `2024-01-04`, portfolio_value: `76200` },
          { effective_at: `2024-01-05`, portfolio_value: `76200` },
          { effective_at: `2024-01-06`, portfolio_value: `77224` },
          { effective_at: `2024-01-07`, portfolio_value: `77123` },
          { effective_at: `2024-01-08`, portfolio_value: `79621` },
          { effective_at: `2024-01-09`, portfolio_value: `78521` },
          { effective_at: `2024-01-10`, portfolio_value: `79721` },
          { effective_at: `2024-01-11`, portfolio_value: `79721` },
          { effective_at: `2024-01-12`, portfolio_value: `79721` },
          { effective_at: `2024-01-13`, portfolio_value: `79923` },
          { effective_at: `2024-01-14`, portfolio_value: `81000` },
          { effective_at: `2024-01-15`, portfolio_value: `80921` },
          { effective_at: `2024-01-16`, portfolio_value: `81203` },
          { effective_at: `2024-01-17`, portfolio_value: `81120` },
          { effective_at: `2024-01-18`, portfolio_value: `81120` },
          { effective_at: `2024-01-19`, portfolio_value: `81120` },
          { effective_at: `2024-01-20`, portfolio_value: `81139` },
          { effective_at: `2024-01-21`, portfolio_value: `81263` },
          { effective_at: `2024-01-22`, portfolio_value: `81204` },
          { effective_at: `2024-01-23`, portfolio_value: `81504` },
          { effective_at: `2024-01-24`, portfolio_value: `81400` },
          { effective_at: `2024-01-25`, portfolio_value: `81400` },
          { effective_at: `2024-01-26`, portfolio_value: `81400` },
          { effective_at: `2024-01-27`, portfolio_value: `81465` },
          { effective_at: `2024-01-28`, portfolio_value: `81574` },
          { effective_at: `2024-01-29`, portfolio_value: `81824` },
          { effective_at: `2024-01-30`, portfolio_value: `81922` },
          { effective_at: `2024-01-31`, portfolio_value: `82104` },
          { effective_at: `2024-02-01`, portfolio_value: `82104` },
          { effective_at: `2024-02-02`, portfolio_value: `82104` },
          { effective_at: `2024-02-03`, portfolio_value: `82063` },
          { effective_at: `2024-02-04`, portfolio_value: `82514` },
          { effective_at: `2024-02-05`, portfolio_value: `82364` },
          { effective_at: `2024-02-06`, portfolio_value: `82810` },
          { effective_at: `2024-02-07`, portfolio_value: `83045` },
          { effective_at: `2024-02-08`, portfolio_value: `83045` },
          { effective_at: `2024-02-09`, portfolio_value: `83045` },
          { effective_at: `2024-02-10`, portfolio_value: `83304` },
          { effective_at: `2024-02-11`, portfolio_value: `83621` },
          { effective_at: `2024-02-12`, portfolio_value: `84000` },
          { effective_at: `2024-02-13`, portfolio_value: `84230` },
          { effective_at: `2024-02-14`, portfolio_value: `84523` },
          { effective_at: `2024-02-15`, portfolio_value: `84523` },
          { effective_at: `2024-02-16`, portfolio_value: `84523` },
          { effective_at: `2024-02-17`, portfolio_value: `84751` },
          { effective_at: `2024-02-18`, portfolio_value: `85049` },
          { effective_at: `2024-02-19`, portfolio_value: `85320` },
          { effective_at: `2024-02-20`, portfolio_value: `85632` },
          { effective_at: `2024-02-21`, portfolio_value: `86024` },
          { effective_at: `2024-02-22`, portfolio_value: `86024` },
          { effective_at: `2024-02-23`, portfolio_value: `86024` },
          { effective_at: `2024-02-24`, portfolio_value: `86320` },
          { effective_at: `2024-02-25`, portfolio_value: `86721` },
          { effective_at: `2024-02-26`, portfolio_value: `86532` },
          { effective_at: `2024-02-27`, portfolio_value: `87423` },
          { effective_at: `2024-02-28`, portfolio_value: `87890` },
          { effective_at: `2024-02-29`, portfolio_value: `87890` },
          { effective_at: `2024-03-01`, portfolio_value: `87890` },
          { effective_at: `2024-03-02`, portfolio_value: `88203` },
          { effective_at: `2024-03-03`, portfolio_value: `88654` },
          { effective_at: `2024-03-04`, portfolio_value: `89123` },
          { effective_at: `2024-03-05`, portfolio_value: `89620` },
          { effective_at: `2024-03-06`, portfolio_value: `90104` },
          { effective_at: `2024-03-07`, portfolio_value: `90104` },
          { effective_at: `2024-03-08`, portfolio_value: `90104` },
          { effective_at: `2024-03-09`, portfolio_value: `90032` },
          { effective_at: `2024-03-10`, portfolio_value: `91124` },
          { effective_at: `2024-03-11`, portfolio_value: `91620` },
          { effective_at: `2024-03-12`, portfolio_value: `92132` },
          { effective_at: `2024-03-13`, portfolio_value: `92640` },
          { effective_at: `2024-03-14`, portfolio_value: `92640` },
          { effective_at: `2024-03-15`, portfolio_value: `92640` },
          { effective_at: `2024-03-16`, portfolio_value: `93121` },
          { effective_at: `2024-03-17`, portfolio_value: `93654` },
          { effective_at: `2024-03-18`, portfolio_value: `94120` },
          { effective_at: `2024-03-19`, portfolio_value: `94632` },
          { effective_at: `2024-03-20`, portfolio_value: `95120` },
          { effective_at: `2024-03-21`, portfolio_value: `95120` },
          { effective_at: `2024-03-22`, portfolio_value: `95120` },
          { effective_at: `2024-03-23`, portfolio_value: `95654` },
          { effective_at: `2024-03-24`, portfolio_value: `96120` },
          { effective_at: `2024-03-25`, portfolio_value: `96632` },
          { effective_at: `2024-03-26`, portfolio_value: `97120` },
          { effective_at: `2024-03-27`, portfolio_value: `97054` },
          { effective_at: `2024-03-28`, portfolio_value: `97054` },
          { effective_at: `2024-03-29`, portfolio_value: `97054` },
          { effective_at: `2024-03-30`, portfolio_value: `100020` },
        ],
        cash_flow: [
          { date: `2024-01-01`, value: `75000`, transaction_type: `DEPOSIT` },
        ],
      },
      {
        portfolio_code: `PORTFOLIO2`,
        portfolio_name: `Portfolio 2`,
        portfolio_group: `Starter`,
        portfolio_title: `Aggressive Growth`,
        portfolio_risk_level: `5`,
        portfolio_value: `10052`,
        portfolio_values: [
          { effective_at: `2024-01-01`, portfolio_value: `4000` },
          { effective_at: `2024-01-02`, portfolio_value: `4050` },
          { effective_at: `2024-01-03`, portfolio_value: `4041` },
          { effective_at: `2024-01-04`, portfolio_value: `4041` },
          { effective_at: `2024-01-05`, portfolio_value: `4041` },
          { effective_at: `2024-01-06`, portfolio_value: `3975` },
          { effective_at: `2024-01-07`, portfolio_value: `4204` },
          { effective_at: `2024-01-08`, portfolio_value: `4621` },
          { effective_at: `2024-01-09`, portfolio_value: `4205` },
          { effective_at: `2024-01-10`, portfolio_value: `4862` },
          { effective_at: `2024-01-11`, portfolio_value: `4862` },
          { effective_at: `2024-01-12`, portfolio_value: `4862` },
          { effective_at: `2024-01-13`, portfolio_value: `5214` },
          { effective_at: `2024-01-14`, portfolio_value: `5032` },
          { effective_at: `2024-01-15`, portfolio_value: `5164` },
          { effective_at: `2024-01-16`, portfolio_value: `5184` },
          { effective_at: `2024-01-17`, portfolio_value: `5098` },
          { effective_at: `2024-01-18`, portfolio_value: `5098` },
          { effective_at: `2024-01-19`, portfolio_value: `5098` },
          { effective_at: `2024-01-20`, portfolio_value: `5264` },
          { effective_at: `2024-01-21`, portfolio_value: `5364` },
          { effective_at: `2024-01-22`, portfolio_value: `5548` },
          { effective_at: `2024-01-23`, portfolio_value: `5319` },
          { effective_at: `2024-01-24`, portfolio_value: `5481` },
          { effective_at: `2024-01-25`, portfolio_value: `5481` },
          { effective_at: `2024-01-26`, portfolio_value: `5481` },
          { effective_at: `2024-01-27`, portfolio_value: `5621` },
          { effective_at: `2024-01-28`, portfolio_value: `5820` },
          { effective_at: `2024-01-29`, portfolio_value: `5932` },
          { effective_at: `2024-01-30`, portfolio_value: `6028` },
          { effective_at: `2024-01-31`, portfolio_value: `5792` },
          { effective_at: `2024-02-01`, portfolio_value: `5792` },
          { effective_at: `2024-02-02`, portfolio_value: `5792` },
          { effective_at: `2024-02-03`, portfolio_value: `6205` },
          { effective_at: `2024-02-04`, portfolio_value: `6218` },
          { effective_at: `2024-02-05`, portfolio_value: `6315` },
          { effective_at: `2024-02-06`, portfolio_value: `6487` },
          { effective_at: `2024-02-07`, portfolio_value: `6597` },
          { effective_at: `2024-02-08`, portfolio_value: `6597` },
          { effective_at: `2024-02-09`, portfolio_value: `6597` },
          { effective_at: `2024-02-10`, portfolio_value: `6348` },
          { effective_at: `2024-02-11`, portfolio_value: `6615` },
          { effective_at: `2024-02-12`, portfolio_value: `6825` },
          { effective_at: `2024-02-13`, portfolio_value: `6791` },
          { effective_at: `2024-02-14`, portfolio_value: `6908` },
          { effective_at: `2024-02-15`, portfolio_value: `6908` },
          { effective_at: `2024-02-16`, portfolio_value: `6908` },
          { effective_at: `2024-02-17`, portfolio_value: `7063` },
          { effective_at: `2024-02-18`, portfolio_value: `7098` },
          { effective_at: `2024-02-19`, portfolio_value: `7110` },
          { effective_at: `2024-02-20`, portfolio_value: `7062` },
          { effective_at: `2024-02-21`, portfolio_value: `7208` },
          { effective_at: `2024-02-22`, portfolio_value: `7208` },
          { effective_at: `2024-02-23`, portfolio_value: `7208` },
          { effective_at: `2024-02-24`, portfolio_value: `7406` },
          { effective_at: `2024-02-25`, portfolio_value: `7319` },
          { effective_at: `2024-02-26`, portfolio_value: `7549` },
          { effective_at: `2024-02-27`, portfolio_value: `7406` },
          { effective_at: `2024-02-28`, portfolio_value: `7610` },
          { effective_at: `2024-02-29`, portfolio_value: `7610` },
          { effective_at: `2024-03-01`, portfolio_value: `7610` },
          { effective_at: `2024-03-02`, portfolio_value: `7921` },
          { effective_at: `2024-03-03`, portfolio_value: `8217` },
          { effective_at: `2024-03-04`, portfolio_value: `8063` },
          { effective_at: `2024-03-05`, portfolio_value: `8214` },
          { effective_at: `2024-03-06`, portfolio_value: `8507` },
          { effective_at: `2024-03-07`, portfolio_value: `8507` },
          { effective_at: `2024-03-08`, portfolio_value: `8507` },
          { effective_at: `2024-03-09`, portfolio_value: `8691` },
          { effective_at: `2024-03-10`, portfolio_value: `8888` },
          { effective_at: `2024-03-11`, portfolio_value: `9000` },
          { effective_at: `2024-03-12`, portfolio_value: `8927` },
          { effective_at: `2024-03-13`, portfolio_value: `9217` },
          { effective_at: `2024-03-14`, portfolio_value: `9217` },
          { effective_at: `2024-03-15`, portfolio_value: `9217` },
          { effective_at: `2024-03-16`, portfolio_value: `9109` },
          { effective_at: `2024-03-17`, portfolio_value: `9507` },
          { effective_at: `2024-03-18`, portfolio_value: `9307` },
          { effective_at: `2024-03-19`, portfolio_value: `9267` },
          { effective_at: `2024-03-20`, portfolio_value: `9564` },
          { effective_at: `2024-03-21`, portfolio_value: `9564` },
          { effective_at: `2024-03-22`, portfolio_value: `9564` },
          { effective_at: `2024-03-23`, portfolio_value: `9721` },
          { effective_at: `2024-03-24`, portfolio_value: `9832` },
          { effective_at: `2024-03-25`, portfolio_value: `9999` },
          { effective_at: `2024-03-26`, portfolio_value: `10804` },
          { effective_at: `2024-03-27`, portfolio_value: `10524` },
          { effective_at: `2024-03-28`, portfolio_value: `10524` },
          { effective_at: `2024-03-29`, portfolio_value: `10524` },
          { effective_at: `2024-03-30`, portfolio_value: `10052` },
        ],
        cash_flow: [
          { date: `2024-01-01`, value: `4000`, transaction_type: `DEPOSIT` },
        ],
      },
      {
        portfolio_code: `PORTFOLIO3`,
        portfolio_name: `Portfolio 3`,
        portfolio_group: `Starter`,
        portfolio_title: `Balanced`,
        portfolio_risk_level: `3`,
        portfolio_value: `2120`,
        portfolio_values: [
          { effective_at: `2024-01-01`, portfolio_value: `600` },
          { effective_at: `2024-01-02`, portfolio_value: `615` },
          { effective_at: `2024-01-03`, portfolio_value: `614` },
          { effective_at: `2024-01-04`, portfolio_value: `614` },
          { effective_at: `2024-01-05`, portfolio_value: `614` },
          { effective_at: `2024-01-06`, portfolio_value: `632` },
          { effective_at: `2024-01-07`, portfolio_value: `620` },
          { effective_at: `2024-01-08`, portfolio_value: `658` },
          { effective_at: `2024-01-09`, portfolio_value: `692` },
          { effective_at: `2024-01-10`, portfolio_value: `702` },
          { effective_at: `2024-01-11`, portfolio_value: `702` },
          { effective_at: `2024-01-12`, portfolio_value: `702` },
          { effective_at: `2024-01-13`, portfolio_value: `699` },
          { effective_at: `2024-01-14`, portfolio_value: `725` },
          { effective_at: `2024-01-15`, portfolio_value: `745` },
          { effective_at: `2024-01-16`, portfolio_value: `740` },
          { effective_at: `2024-01-17`, portfolio_value: `763` },
          { effective_at: `2024-01-18`, portfolio_value: `763` },
          { effective_at: `2024-01-19`, portfolio_value: `763` },
          { effective_at: `2024-01-20`, portfolio_value: `755` },
          { effective_at: `2024-01-21`, portfolio_value: `775` },
          { effective_at: `2024-01-22`, portfolio_value: `765` },
          { effective_at: `2024-01-23`, portfolio_value: `798` },
          { effective_at: `2024-01-24`, portfolio_value: `824` },
          { effective_at: `2024-01-25`, portfolio_value: `824` },
          { effective_at: `2024-01-26`, portfolio_value: `824` },
          { effective_at: `2024-01-27`, portfolio_value: `810` },
          { effective_at: `2024-01-28`, portfolio_value: `836` },
          { effective_at: `2024-01-29`, portfolio_value: `875` },
          { effective_at: `2024-01-30`, portfolio_value: `859` },
          { effective_at: `2024-01-31`, portfolio_value: `888` },
          { effective_at: `2024-02-01`, portfolio_value: `888` },
          { effective_at: `2024-02-02`, portfolio_value: `888` },
          { effective_at: `2024-02-03`, portfolio_value: `894` },
          { effective_at: `2024-02-04`, portfolio_value: `903` },
          { effective_at: `2024-02-05`, portfolio_value: `925` },
          { effective_at: `2024-02-06`, portfolio_value: `906` },
          { effective_at: `2024-02-07`, portfolio_value: `915` },
          { effective_at: `2024-02-08`, portfolio_value: `915` },
          { effective_at: `2024-02-09`, portfolio_value: `915` },
          { effective_at: `2024-02-10`, portfolio_value: `978` },
          { effective_at: `2024-02-11`, portfolio_value: `1019` },
          { effective_at: `2024-02-12`, portfolio_value: `1264` },
          { effective_at: `2024-02-13`, portfolio_value: `1562` },
          { effective_at: `2024-02-14`, portfolio_value: `1349` },
          { effective_at: `2024-02-15`, portfolio_value: `1349` },
          { effective_at: `2024-02-16`, portfolio_value: `1349` },
          { effective_at: `2024-02-17`, portfolio_value: `1548` },
          { effective_at: `2024-02-18`, portfolio_value: `1864` },
          { effective_at: `2024-02-19`, portfolio_value: `1748` },
          { effective_at: `2024-02-20`, portfolio_value: `1946` },
          { effective_at: `2024-02-21`, portfolio_value: `2164` },
          { effective_at: `2024-02-22`, portfolio_value: `2164` },
          { effective_at: `2024-02-23`, portfolio_value: `2164` },
          { effective_at: `2024-02-24`, portfolio_value: `2284` },
          { effective_at: `2024-02-25`, portfolio_value: `2649` },
          { effective_at: `2024-02-26`, portfolio_value: `2548` },
          { effective_at: `2024-02-27`, portfolio_value: `2461` },
          { effective_at: `2024-02-28`, portfolio_value: `2431` },
          { effective_at: `2024-02-29`, portfolio_value: `2431` },
          { effective_at: `2024-03-01`, portfolio_value: `2431` },
          { effective_at: `2024-03-02`, portfolio_value: `2348` },
          { effective_at: `2024-03-03`, portfolio_value: `2495` },
          { effective_at: `2024-03-04`, portfolio_value: `2316` },
          { effective_at: `2024-03-05`, portfolio_value: `2297` },
          { effective_at: `2024-03-06`, portfolio_value: `2187` },
          { effective_at: `2024-03-07`, portfolio_value: `2187` },
          { effective_at: `2024-03-08`, portfolio_value: `2187` },
          { effective_at: `2024-03-09`, portfolio_value: `2097` },
          { effective_at: `2024-03-10`, portfolio_value: `1978` },
          { effective_at: `2024-03-11`, portfolio_value: `1999` },
          { effective_at: `2024-03-12`, portfolio_value: `2035` },
          { effective_at: `2024-03-13`, portfolio_value: `2021` },
          { effective_at: `2024-03-14`, portfolio_value: `2021` },
          { effective_at: `2024-03-15`, portfolio_value: `2021` },
          { effective_at: `2024-03-16`, portfolio_value: `2024` },
          { effective_at: `2024-03-17`, portfolio_value: `2059` },
          { effective_at: `2024-03-18`, portfolio_value: `2178` },
          { effective_at: `2024-03-19`, portfolio_value: `2265` },
          { effective_at: `2024-03-20`, portfolio_value: `2200` },
          { effective_at: `2024-03-21`, portfolio_value: `2200` },
          { effective_at: `2024-03-22`, portfolio_value: `2200` },
          { effective_at: `2024-03-23`, portfolio_value: `2189` },
          { effective_at: `2024-03-24`, portfolio_value: `2165` },
          { effective_at: `2024-03-25`, portfolio_value: `2154` },
          { effective_at: `2024-03-26`, portfolio_value: `2100` },
          { effective_at: `2024-03-27`, portfolio_value: `2122` },
          { effective_at: `2024-03-28`, portfolio_value: `2122` },
          { effective_at: `2024-03-29`, portfolio_value: `2122` },
          { effective_at: `2024-03-30`, portfolio_value: `2120` },
        ],
        cash_flow: [
          { date: `2024-01-01`, value: `600`, transaction_type: `DEPOSIT` },
        ],
      },
      {
        portfolio_code: `PORTFOLIO4`,
        portfolio_name: `Portfolio 4`,
        portfolio_group: `Starter`,
        portfolio_title: `Preservation`,
        portfolio_risk_level: `1`,
        portfolio_value: `1125.14`,
        portfolio_values: [
          { effective_at: `2024-01-01`, portfolio_value: `400` },
          { effective_at: `2024-01-02`, portfolio_value: `410` },
          { effective_at: `2024-01-03`, portfolio_value: `420` },
          { effective_at: `2024-01-04`, portfolio_value: `420` },
          { effective_at: `2024-01-05`, portfolio_value: `420` },
          { effective_at: `2024-01-06`, portfolio_value: `430` },
          { effective_at: `2024-01-07`, portfolio_value: `440` },
          { effective_at: `2024-01-08`, portfolio_value: `438` },
          { effective_at: `2024-01-09`, portfolio_value: `452` },
          { effective_at: `2024-01-10`, portfolio_value: `472` },
          { effective_at: `2024-01-11`, portfolio_value: `472` },
          { effective_at: `2024-01-12`, portfolio_value: `472` },
          { effective_at: `2024-01-13`, portfolio_value: `480` },
          { effective_at: `2024-01-14`, portfolio_value: `486` },
          { effective_at: `2024-01-15`, portfolio_value: `500` },
          { effective_at: `2024-01-16`, portfolio_value: `506` },
          { effective_at: `2024-01-17`, portfolio_value: `518` },
          { effective_at: `2024-01-18`, portfolio_value: `518` },
          { effective_at: `2024-01-19`, portfolio_value: `518` },
          { effective_at: `2024-01-20`, portfolio_value: `532` },
          { effective_at: `2024-01-21`, portfolio_value: `530` },
          { effective_at: `2024-01-22`, portfolio_value: `545` },
          { effective_at: `2024-01-23`, portfolio_value: `568` },
          { effective_at: `2024-01-24`, portfolio_value: `570` },
          { effective_at: `2024-01-25`, portfolio_value: `570` },
          { effective_at: `2024-01-26`, portfolio_value: `570` },
          { effective_at: `2024-01-27`, portfolio_value: `572` },
          { effective_at: `2024-01-28`, portfolio_value: `589` },
          { effective_at: `2024-01-29`, portfolio_value: `600` },
          { effective_at: `2024-01-30`, portfolio_value: `613` },
          { effective_at: `2024-01-31`, portfolio_value: `628` },
          { effective_at: `2024-02-01`, portfolio_value: `628` },
          { effective_at: `2024-02-02`, portfolio_value: `628` },
          { effective_at: `2024-02-03`, portfolio_value: `637` },
          { effective_at: `2024-02-04`, portfolio_value: `659` },
          { effective_at: `2024-02-05`, portfolio_value: `661` },
          { effective_at: `2024-02-06`, portfolio_value: `660` },
          { effective_at: `2024-02-07`, portfolio_value: `680` },
          { effective_at: `2024-02-08`, portfolio_value: `680` },
          { effective_at: `2024-02-09`, portfolio_value: `680` },
          { effective_at: `2024-02-10`, portfolio_value: `688` },
          { effective_at: `2024-02-11`, portfolio_value: `700` },
          { effective_at: `2024-02-12`, portfolio_value: `705` },
          { effective_at: `2024-02-13`, portfolio_value: `700` },
          { effective_at: `2024-02-14`, portfolio_value: `721` },
          { effective_at: `2024-02-15`, portfolio_value: `721` },
          { effective_at: `2024-02-16`, portfolio_value: `721` },
          { effective_at: `2024-02-17`, portfolio_value: `746` },
          { effective_at: `2024-02-18`, portfolio_value: `740` },
          { effective_at: `2024-02-19`, portfolio_value: `754` },
          { effective_at: `2024-02-20`, portfolio_value: `779` },
          { effective_at: `2024-02-21`, portfolio_value: `793` },
          { effective_at: `2024-02-22`, portfolio_value: `793` },
          { effective_at: `2024-02-23`, portfolio_value: `793` },
          { effective_at: `2024-02-24`, portfolio_value: `806` },
          { effective_at: `2024-02-25`, portfolio_value: `800` },
          { effective_at: `2024-02-26`, portfolio_value: `815` },
          { effective_at: `2024-02-27`, portfolio_value: `836` },
          { effective_at: `2024-02-28`, portfolio_value: `854` },
          { effective_at: `2024-02-29`, portfolio_value: `854` },
          { effective_at: `2024-03-01`, portfolio_value: `854` },
          { effective_at: `2024-03-02`, portfolio_value: `867` },
          { effective_at: `2024-03-03`, portfolio_value: `870` },
          { effective_at: `2024-03-04`, portfolio_value: `889` },
          { effective_at: `2024-03-05`, portfolio_value: `902` },
          { effective_at: `2024-03-06`, portfolio_value: `900` },
          { effective_at: `2024-03-07`, portfolio_value: `900` },
          { effective_at: `2024-03-08`, portfolio_value: `900` },
          { effective_at: `2024-03-09`, portfolio_value: `921` },
          { effective_at: `2024-03-10`, portfolio_value: `935` },
          { effective_at: `2024-03-11`, portfolio_value: `947` },
          { effective_at: `2024-03-12`, portfolio_value: `951` },
          { effective_at: `2024-03-13`, portfolio_value: `958` },
          { effective_at: `2024-03-14`, portfolio_value: `958` },
          { effective_at: `2024-03-15`, portfolio_value: `958` },
          { effective_at: `2024-03-16`, portfolio_value: `967` },
          { effective_at: `2024-03-17`, portfolio_value: `983` },
          { effective_at: `2024-03-18`, portfolio_value: `999` },
          { effective_at: `2024-03-19`, portfolio_value: `1024` },
          { effective_at: `2024-03-20`, portfolio_value: `1016` },
          { effective_at: `2024-03-21`, portfolio_value: `1016` },
          { effective_at: `2024-03-22`, portfolio_value: `1016` },
          { effective_at: `2024-03-23`, portfolio_value: `1030` },
          { effective_at: `2024-03-24`, portfolio_value: `1050` },
          { effective_at: `2024-03-25`, portfolio_value: `1067` },
          { effective_at: `2024-03-26`, portfolio_value: `1089` },
          { effective_at: `2024-03-27`, portfolio_value: `1111` },
          { effective_at: `2024-03-28`, portfolio_value: `1111` },
          { effective_at: `2024-03-29`, portfolio_value: `1111` },
          { effective_at: `2024-03-30`, portfolio_value: `1125.14` },
        ],
        cash_flow: [
          { date: `2024-01-01`, value: `400`, transaction_type: `DEPOSIT` },
        ],
      },
    ],
  },
};

export const marketOutlook = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        title: `Market Outlook 2024`,
        description: `Interesting trends of global market equities in 2024.`,
        background_image_url: `/market_outlook_1.png`,
        reference_url: `https://www.google.com`,
        posted_at: `2024-04-10`,
      },
      {
        title: `Market Outlook 2024`,
        description: `dummy....`,
        background_image_url: `/market_outlook_1.png`,
        reference_url: `https://www.google.com`,
        posted_at: `2024-04-12`,
      },
    ],
  },
};

export const recurringInvestments = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        start_date: `2023-12-15`,
        frequency: { label: `Monthly`, value: `monthly` },
        amount: `1000.00`,
        status: { label: `Active`, value: `active` },
      },
      {
        start_date: `2022-12-01`,
        frequency: { label: `Monthly`, value: `monthly` },
        amount: `500.00`,
        status: { label: `Terminated`, value: `terminated` },
      },
    ],
  },
};

export const frequencyTypes = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      { value: `1`, label: `Weekly` },
      { value: `2`, label: `Monthly` },
    ],
  },
};

export const withdrawReasons = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `77812561-fd29-4c7e-8c79-008246fef322`,
        title: `Financial Emergency`,
      },
      {
        id: `47c7f270-6395-453f-8961-ae093b8ad289`,
        title: `Change in Goals`,
      },
      {
        id: `b9d27d73-2a59-42cf-ad44-1431a66e19ec`,
        title: `Market Conditions`,
      },
      {
        id: `b76a1292-4231-43e8-92f3-5a037b46eeda`,
        title: `Investment Performance`,
      },
      {
        id: `9eb6472d-13db-483c-bf73-c3dada83eab5`,
        title: `Personal Reason`,
      },
    ],
  },
};

export const myRiskLevel = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    value: `4 (80% Equities, 20% Bonds)`,
  },
};

export const myPortfolioName = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    value: `Portfolio 1 - Starter`,
  },
};

export const portfolioNameSubmission = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {},
};

export const myPortfolioList = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        portfolio_code: `PORTFOLIO1`,
        portfolio_name: `Portfolio 1`,
        portfolio_group: `Starter`,
        portfolio_title: `Long Term Growth`,
        portfolio_risk_level: `4`,
      },
      {
        portfolio_code: `PORTFOLIO2`,
        portfolio_name: `Portfolio 2`,
        portfolio_group: `Starter`,
        portfolio_title: `Aggressive Growth`,
        portfolio_risk_level: `5`,
      },
      {
        portfolio_code: `PORTFOLIO3`,
        portfolio_name: `Portfolio 3`,
        portfolio_group: `Starter`,
        portfolio_title: `Balanced`,
        portfolio_risk_level: `3`,
      },
      {
        portfolio_code: `PORTFOLIO4`,
        portfolio_name: `Portfolio 4`,
        portfolio_group: `Starter`,
        portfolio_title: `Preservation`,
        portfolio_risk_level: `1`,
      },
    ],
  },
};

export const myPortfolioDetails = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    portfolio_code: `PORTFOLIO1`,
    portfolio_name: `Portfolio 1`,
    portfolio_group: `Starter`,
    portfolio_title: `Long Term Growth`,
    portfolio_risk_level: `4`,
    portfolio_value: `100020`,
    portfolio_values: [
      { effective_at: `2024-01-01`, portfolio_value: `75000` },
      { effective_at: `2024-01-02`, portfolio_value: `76052` },
      { effective_at: `2024-01-03`, portfolio_value: `76200` },
      { effective_at: `2024-01-04`, portfolio_value: `76200` },
      { effective_at: `2024-01-05`, portfolio_value: `76200` },
      { effective_at: `2024-01-06`, portfolio_value: `77224` },
      { effective_at: `2024-01-07`, portfolio_value: `77123` },
      { effective_at: `2024-01-08`, portfolio_value: `79621` },
      { effective_at: `2024-01-09`, portfolio_value: `78521` },
      { effective_at: `2024-01-10`, portfolio_value: `79721` },
      { effective_at: `2024-01-11`, portfolio_value: `79721` },
      { effective_at: `2024-01-12`, portfolio_value: `79721` },
      { effective_at: `2024-01-13`, portfolio_value: `79923` },
      { effective_at: `2024-01-14`, portfolio_value: `81000` },
      { effective_at: `2024-01-15`, portfolio_value: `80921` },
      { effective_at: `2024-01-16`, portfolio_value: `81203` },
      { effective_at: `2024-01-17`, portfolio_value: `81120` },
      { effective_at: `2024-01-18`, portfolio_value: `81120` },
      { effective_at: `2024-01-19`, portfolio_value: `81120` },
      { effective_at: `2024-01-20`, portfolio_value: `81139` },
      { effective_at: `2024-01-21`, portfolio_value: `81263` },
      { effective_at: `2024-01-22`, portfolio_value: `81204` },
      { effective_at: `2024-01-23`, portfolio_value: `81504` },
      { effective_at: `2024-01-24`, portfolio_value: `81400` },
      { effective_at: `2024-01-25`, portfolio_value: `81400` },
      { effective_at: `2024-01-26`, portfolio_value: `81400` },
      { effective_at: `2024-01-27`, portfolio_value: `81465` },
      { effective_at: `2024-01-28`, portfolio_value: `81574` },
      { effective_at: `2024-01-29`, portfolio_value: `81824` },
      { effective_at: `2024-01-30`, portfolio_value: `81922` },
      { effective_at: `2024-01-31`, portfolio_value: `82104` },
      { effective_at: `2024-02-01`, portfolio_value: `82104` },
      { effective_at: `2024-02-02`, portfolio_value: `82104` },
      { effective_at: `2024-02-03`, portfolio_value: `82063` },
      { effective_at: `2024-02-04`, portfolio_value: `82514` },
      { effective_at: `2024-02-05`, portfolio_value: `82364` },
      { effective_at: `2024-02-06`, portfolio_value: `82810` },
      { effective_at: `2024-02-07`, portfolio_value: `83045` },
      { effective_at: `2024-02-08`, portfolio_value: `83045` },
      { effective_at: `2024-02-09`, portfolio_value: `83045` },
      { effective_at: `2024-02-10`, portfolio_value: `83304` },
      { effective_at: `2024-02-11`, portfolio_value: `83621` },
      { effective_at: `2024-02-12`, portfolio_value: `84000` },
      { effective_at: `2024-02-13`, portfolio_value: `84230` },
      { effective_at: `2024-02-14`, portfolio_value: `84523` },
      { effective_at: `2024-02-15`, portfolio_value: `84523` },
      { effective_at: `2024-02-16`, portfolio_value: `84523` },
      { effective_at: `2024-02-17`, portfolio_value: `84751` },
      { effective_at: `2024-02-18`, portfolio_value: `85049` },
      { effective_at: `2024-02-19`, portfolio_value: `85320` },
      { effective_at: `2024-02-20`, portfolio_value: `85632` },
      { effective_at: `2024-02-21`, portfolio_value: `86024` },
      { effective_at: `2024-02-22`, portfolio_value: `86024` },
      { effective_at: `2024-02-23`, portfolio_value: `86024` },
      { effective_at: `2024-02-24`, portfolio_value: `86320` },
      { effective_at: `2024-02-25`, portfolio_value: `86721` },
      { effective_at: `2024-02-26`, portfolio_value: `86532` },
      { effective_at: `2024-02-27`, portfolio_value: `87423` },
      { effective_at: `2024-02-28`, portfolio_value: `87890` },
      { effective_at: `2024-02-29`, portfolio_value: `87890` },
      { effective_at: `2024-03-01`, portfolio_value: `87890` },
      { effective_at: `2024-03-02`, portfolio_value: `88203` },
      { effective_at: `2024-03-03`, portfolio_value: `88654` },
      { effective_at: `2024-03-04`, portfolio_value: `89123` },
      { effective_at: `2024-03-05`, portfolio_value: `89620` },
      { effective_at: `2024-03-06`, portfolio_value: `90104` },
      { effective_at: `2024-03-07`, portfolio_value: `90104` },
      { effective_at: `2024-03-08`, portfolio_value: `90104` },
      { effective_at: `2024-03-09`, portfolio_value: `90032` },
      { effective_at: `2024-03-10`, portfolio_value: `91124` },
      { effective_at: `2024-03-11`, portfolio_value: `91620` },
      { effective_at: `2024-03-12`, portfolio_value: `92132` },
      { effective_at: `2024-03-13`, portfolio_value: `92640` },
      { effective_at: `2024-03-14`, portfolio_value: `92640` },
      { effective_at: `2024-03-15`, portfolio_value: `92640` },
      { effective_at: `2024-03-16`, portfolio_value: `93121` },
      { effective_at: `2024-03-17`, portfolio_value: `93654` },
      { effective_at: `2024-03-18`, portfolio_value: `94120` },
      { effective_at: `2024-03-19`, portfolio_value: `94632` },
      { effective_at: `2024-03-20`, portfolio_value: `95120` },
      { effective_at: `2024-03-21`, portfolio_value: `95120` },
      { effective_at: `2024-03-22`, portfolio_value: `95120` },
      { effective_at: `2024-03-23`, portfolio_value: `95654` },
      { effective_at: `2024-03-24`, portfolio_value: `96120` },
      { effective_at: `2024-03-25`, portfolio_value: `96632` },
      { effective_at: `2024-03-26`, portfolio_value: `97120` },
      { effective_at: `2024-03-27`, portfolio_value: `97054` },
      { effective_at: `2024-03-28`, portfolio_value: `97054` },
      { effective_at: `2024-03-29`, portfolio_value: `97054` },
      { effective_at: `2024-03-30`, portfolio_value: `100020` },
    ],
  },
};

export const myPortfolioNews = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        title: `Rebalancing Executed`,
        date: `2024-03-08`,
        description: `We've completed a rebalancing of your portfolio to ensure it aligns with your investment objectives: SPTM 54% → 55%, VGK 13% → 12%, VPL 6% → 7%, SPEM 8% → 9%, ABF 8% → 6%, BMX 11% → 11%.`,
      },
      {
        title: `Mar’24 Market Outlook`,
        date: `2024-03-04`,
        description: `AutoWealth investment portfolios were generally flat in portfolio value over the last week. U.S. Stocks -0.2%, Europe Stocks +0.8%, Asia Pacific Stocks +1.1%, Emerging Markets Stocks +1.2%, U.S. Govt Bonds -0.6%, Intl Govt Bonds -0.5%. Global stocks ended the week mixed amidst speculation that the Federal Reserve will be in no rush to cut interest rates after the Jan 2024 producer price index data showed `,
      },
    ],
  },
};

export const myPortfolioGrowthRate = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    rate: `2.93`,
  },
};

export const myPortfolioInvestmentHorizon = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    value: `60`,
    description: `If your investment horizon is shorter than the recommended minimum, this portfolio may not be suitable for you.`,
    description_1: `If you choose to withdraw before the recommended minimum time horizon, your projected maximum decline/dropdown in portfolio value may exceed`,
    description_2: `based on portfolio performance in the last 5 years.`,
    description_value: `-24.22`,
  },
};

export const portfolioDisclaimer = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    note: `Performance and risk projections are based on robust financial modelling and past performance of the portfolio assets, and their corresponding market benchmarks where applicable. While such projections are grounded on sound financial concepts, the projections are not necessarily indicative of and are no guarantee of the future or likely performance of your investments. Any references to past performances are not necessarily indicative of and are no guarantee of the future or likely performance of your investments. Investments always involve risks and the possibility of losses. Notwithstanding, AutoWealth will manage risks on your behalf through portfolio diversification and portfolio rebalancing.`,
  },
};

export const maritalStatus = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `7c9dbd60-430d-42f9-ad0e-0587f247eeda`,
        title: `Single`,
        sequence: 0,
      },
      {
        id: `bcc5182a-49ee-4c7b-9278-be758d4b7f7d`,
        title: `Married`,
        sequence: 0,
      },
      {
        id: `a16a3785-c780-45ae-8d2e-0806fd8747c8`,
        title: `Divorced`,
        sequence: 0,
      },
    ],
  },
};

export const totalAnnualIncomes = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `029386c0-0ff2-456f-9a53-695ee2666292`,
        title: `Below RM36,000`,
        sequence: 0,
      },
      {
        id: `f101e560-0b07-405f-9bd9-1c44eee6a190`,
        title: `RM36,001 - RM150,000`,
        sequence: 0,
      },
      {
        id: `0438b445-63c5-4586-8273-30cd17456d3b`,
        title: `RM150,001 - RM300,000`,
        sequence: 0,
      },
      {
        id: `c60fb7d0-5504-464e-9682-52eedfc94311`,
        title: `RM300,000 and above`,
        sequence: 0,
      },
    ],
  },
};

export const employmentTypes = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `181e1558-8d4f-4f54-bb24-97ac86522e0e`,
        title: `Employer`,
        sequence: 0,
      },
      {
        id: `78991028-877f-4e20-9492-ef1c11d0c5e5`,
        title: `Self-employed`,
        sequence: 0,
      },
      {
        id: `4b3faebb-7ce2-4342-a12f-fbfb024865a3`,
        title: `Private Employee`,
        sequence: 0,
      },
      {
        id: `3b5693e0-30c6-4842-b619-b071e859b57e`,
        title: `Government Employee`,
        sequence: 0,
      },
      {
        id: `896326ae-d962-4ea4-8036-4d4b1ef4e53d`,
        title: `Unpaid Family Worker`,
        sequence: 0,
      },
      {
        id: `5c38bc1e-6c58-4041-867a-ef636b9c90f0`,
        title: `Unemployed`,
        sequence: 0,
      },
      {
        id: `37a81062-0e44-40bd-a58e-cbe36a2ca76f`,
        title: `Retiree`,
        sequence: 0,
      },
      {
        id: `e40f8eee-b977-43b8-8293-ded672fcc9fb`,
        title: `Student`,
        sequence: 0,
      },
      {
        id: `4ecf28e1-5829-46b3-bee0-c8c1e1edc9c3`,
        title: `Housewife/Househusband`,
        sequence: 0,
      },
      {
        id: `0bf450d2-230e-4781-9091-dfa84a63dfa2`,
        title: `Unemployed Disabled Person`,
        sequence: 0,
      },
    ],
  },
};

export const idTypes = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `aef6603a-f3ac-4369-acc8-f3564bb4329d`,
        title: `National Registration Identity Card`,
        sequence: 0,
      },
      {
        id: `2999d592-1bd3-4c26-9987-9d8d38caa5c1`,
        title: `Passport`,
        sequence: 0,
      },
    ],
  },
};

export const employmentSectors = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Agriculture`,
        sequence: 1,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Banking and Finance`,
        sequence: 2,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Construction`,
        sequence: 3,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Education`,
        sequence: 4,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Government`,
        sequence: 5,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Healthcare`,
        sequence: 6,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Hospitality`,
        sequence: 7,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Information Technology`,
        sequence: 8,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Manufacturing`,
        sequence: 9,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Real Estate`,
        sequence: 10,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Retail`,
        sequence: 11,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Services`,
        sequence: 12,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Telecommunications`,
        sequence: 13,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Transportation and Logistics`,
        sequence: 14,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Others`,
        sequence: 15,
      },
    ],
  },
};

export const nationalities = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Malaysia`,
        sequence: 0,
      },
      {
        id: `f7c4314e-8b57-4964-8960-8bc12ad38c87`,
        title: `Singapore`,
        sequence: 0,
      },
    ],
  },
};

export const genders = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Male`,
        sequence: 0,
      },
      {
        id: `2165acbc-05b2-4f81-8ef1-46364709be5f`,
        title: `Female`,
        sequence: 0,
      },
    ],
  },
};

export const suitabilityAssessmentQuestions = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `1`,
        title: `What is your investment time horizon?`,
        title1: `Apakah batas masa pelaburan anda?`,
        type: `Radio`,
        options: [
          {
            id: `1`,
            title: `Less than 1 year`,
            title1: `Kurang daripada 1 tahun`,
            points: `1`,
          },
          {
            id: `2`,
            title: `Within 1 - 2 years`,
            title1: `Antara 1 - 2 tahun`,
            points: `2`,
          },
          {
            id: `3`,
            title: `Within 2 - 3 years`,
            title1: `Antara 2 - 3 tahun`,
            points: `3`,
          },
          {
            id: `4`,
            title: `Within 3 - 5 years`,
            title1: `Antara 3 - 5 tahun`,
            points: `4`,
          },
          {
            id: `5`,
            title: `5 years and above`,
            title1: `Lebih daripada 5 tahun`,
            points: `5`,
          },
        ],
      },
      {
        id: `2`,
        title: `How many products have you invested before, and/or investing now?`,
        title1: `Berapa banyak produk telah anda labur sebelum ini dan/atau berapa banyak produk yang pernah anda labur sebelum ini?`,
        type: `CheckBox`,
        options: [
          { id: `1`, title: `Mutual Fund`, title1: `Dana Amanah`, points: `1` },
          { id: `2`, title: `Retail Bond`, title1: `Bon Runcit`, points: `1` },
          {
            id: `3`,
            title: `Range Accrual Product`,
            title1: `Produk Julat Terakru`,
            points: `1`,
          },
          { id: `4`, title: `Stock`, title1: `Stok/Saham`, points: `1` },
          { id: `5`, title: `Commodity`, title1: `Komoditi`, points: `2` },
          {
            id: `6`,
            title: `Dual Currency Inv. (DCI)`,
            title1: `Pelaburan Dwimata Wang`,
            points: `2`,
          },
          {
            id: `7`,
            title: `Equity Linked Inv.`,
            title1: `Pelaburan Berkait Ekuiti`,
            points: `2`,
          },
          { id: `8`, title: `Derivative`, title1: `Terbitan`, points: `2` },
        ],
        rates: [
          { id: `1`, level: `0`, points: `1` },
          { id: `2`, level: `1-3`, points: `2` },
          { id: `3`, level: `4-6`, points: `3` },
          { id: `4`, level: `7-9`, points: `4` },
          { id: `5`, level: `10-12`, points: `5` },
        ],
      },
      {
        id: `3`,
        title: `How much would you estimate your annual free cash flow (annual income minus necessary expenses)?`,
        title1: `Berapakah anggaran aliran tunai bebas tahunan anda (pendapatan tahunan tolak perbelanjaan keperluan)?`,
        type: `Radio`,
        options: [
          {
            id: `1`,
            title: `Below RM 50,000`,
            title1: `Kurang daripada RM 50,000`,
            points: `1`,
          },
          {
            id: `2`,
            title: `RM 50,001 - RM 100,000`,
            title1: `RM 50,001 - RM 100,000`,
            points: `2`,
          },
          {
            id: `3`,
            title: `RM 100,001 - RM 200,000`,
            title1: `RM 100,001 - RM 200,000`,
            points: `3`,
          },
          {
            id: `4`,
            title: `RM 200,001 - RM 400,000`,
            title1: `RM 200,001 - RM 400,000`,
            points: `4`,
          },
          {
            id: `5`,
            title: `Above RM 400,001`,
            title1: `Lebih daripada RM 400,001`,
            points: `5`,
          },
        ],
      },
      {
        id: `4`,
        title: `Please find below what best describes your risk behaviour.`,
        title1: `Di antara kenyataan-kenyataan di bawah, pilih yang terbaik untuk menghuraikan tingkah laku risiko anda.`,
        type: `Radio`,
        options: [
          {
            id: `1`,
            title: `I can accept minimal level of risk`,
            title1: `Saya boleh menerima risiko pada tahap minimum`,
            points: `1`,
          },
          {
            id: `2`,
            title: `I can accept moderate level of risk`,
            title1: `Saya boleh menerima risiko pada tahap sederhana`,
            points: `3`,
          },
          {
            id: `3`,
            title: `I can accept substantial level of risk`,
            title1: `Saya boleh menerima risiko pada tahap yang tinggi`,
            points: `5`,
          },
        ],
      },
      {
        id: `5`,
        title: `Please find below what best describes your investment objective.`,
        title1: `Di antara kenyataan-kenyataan di bawah, pilih yang terbaik untuk menghuraikan matlamat pelaburan anda.`,
        type: `Radio`,
        options: [
          {
            id: `1`,
            title: `I am looking to achieve return similar to fixed deposit rate`,
            title1: `Saya ingin mendapat pulangan yang hampir sama dengan kadar deposit tetap`,
            points: `1`,
          },
          {
            id: `2`,
            title: `I am looking to achieve return higher than fixed deposit rate`,
            title1: `Saya ingin mendapat pulangan yang lebih tinggi daripada kadar deposit tetap`,
            points: `3`,
          },
          {
            id: `3`,
            title: `I am looking to achieve return substantially higher than fixed deposit rate`,
            title1: `Saya ingin mendapat pulangan yang jauh lebih tinggi daripada kadar deposit tetap`,
            points: `5`,
          },
        ],
      },
      {
        id: `6`,
        title: `How much do you rely on your investment capital to fund your goals in next five years (taking into account of your saving)?`,
        title1: `Sejauh manakah anda bergantung kepada pelaburan modal anda untuk membiayai matlamat anda dalam lima tahun akan datang (dengan mengambil kira simpanan anda)?`,
        type: `Radio`,
        options: [
          {
            id: `1`,
            title: `100%`,
            title1: `100%`,
            points: `1`,
          },
          {
            id: `2`,
            title: `75%`,
            title1: `75%`,
            points: `2`,
          },
          {
            id: `3`,
            title: `50%`,
            title1: `50%`,
            points: `3`,
          },
          {
            id: `4`,
            title: `25%`,
            title1: `25%`,
            points: `4`,
          },
          {
            id: `5`,
            title: `0%, I have adequate income and saving`,
            title1: `0%, Saya mempunyai pendapatan dan simpanan yang mencukupi`,
            points: `5`,
          },
        ],
      },
      {
        id: `7`,
        title: `How secure is your future income from sources such as salary, pension, business and investment?`,
        title1: `Sejauh manakah jaminan pendapatan masa depan anda daripada sumber seperti gaji, pencen, perniagaan dan pelaburan?`,
        type: `Radio`,
        options: [
          {
            id: `1`,
            title: `I have zero future income`,
            title1: `Saya tidak mempunyai seberang pendapatan masa depan`,
            points: `1`,
          },
          {
            id: `2`,
            title: `Not secure`,
            title1: `Tiada jaminan`,
            points: `3`,
          },
          {
            id: `3`,
            title: `Secure`,
            title1: `Terjamin`,
            points: `5`,
          },
        ],
      },
    ],
  },
};

export const suitabilityAssessmentRanking = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    ranking: [
      {
        lower: `7`,
        upper: `11`,
        risk_level: `1`,
        title: `Secure`,
        title1: `Terjamin`,
        description: `You are a secure investor who do not want to accept any investment losses and looking for secure investment that generate return similar to fixed deposit`,
        description1: `Anda merupakan pelabur yang tidak mahu menerima sebarang kerugian dalam pelaburan dan inginkan pelaburan terjamin yang mampu menjana pulangan yang hampir sama seperti kadar deposit tetap`,
        fund_allocation: `Up to 100% fixed income.`,
        fund_allocation1: `Sehingga 100% Sekuriti.`,
      },
      {
        lower: `12`,
        upper: `20`,
        risk_level: `2`,
        title: `Income`,
        title1: `Income`,
        description: `You are a conservative investor who is looking for a low risk investment that provide regular income and capital stability. You prefer an investment portfolio that consist of fixed income securities.`,
        description1: `You are a conservative investor who is looking for a low risk investment that provide regular income and capital stability. You prefer an investment portfolio that consist of fixed income securities.`,
        fund_allocation: `Up to 20% equity, and up to 80% fixed income.`,
        fund_allocation1: `Sehingga 20% Ekuiti, dan Sehingga 80% Sekuriti Pendapatan Tetap.`,
      },
      {
        lower: `21`,
        upper: `26`,
        risk_level: `3`,
        title: `Balanced`,
        title1: `Balanced`,
        description: `You are an investor who want consistent returns and a regular income stream to help meet your cash flow needs. Your portfolio has a balanced exposure to shares and bonds. While you accept that this is likely to result in lower returns over the long term, you require an investment which has some potential to grow in value over the medium term to reduce the effect of inflation.`,
        description1: `You are an investor who want consistent returns and a regular income stream to help meet your cash flow needs. Your portfolio has a balanced exposure to shares and bonds. While you accept that this is likely to result in lower returns over the long term, you require an investment which has some potential to grow in value over the medium term to reduce the effect of inflation.`,
        fund_allocation: `Up to 60% equity, and up to 40% fixed income.`,
        fund_allocation1: `Sehingga 60% Ekuiti, dan Sehingga 40% Sekuriti Pendapatan Tetap.`,
      },
      {
        lower: `27`,
        upper: `31`,
        risk_level: `4`,
        title: `Growth`,
        title1: `Growth`,
        description: `You are a fairly aggressive investor who prefers capital growth rather than income. You want a diversified portfolio yet prefer a higher exposure to share investments which are more likely to provide higher returns over the long-term by taking on an average level of risks.`,
        description1: `You are a fairly aggressive investor who prefers capital growth rather than income. You want a diversified portfolio yet prefer a higher exposure to share investments which are more likely to provide higher returns over the long-term by taking on an average level of risks.`,
        fund_allocation: `Up to 80% Equity, and up to 20% Fixed Income.`,
        fund_allocation1: `Sehingga 80% Ekuiti, dan Sehingga 20% Sekuriti Pendapatan Tetap.`,
      },
      {
        lower: `32`,
        upper: `35`,
        risk_level: `5`,
        title: `Aggressive`,
        title1: `Aggressive`,
        description: `You are an aggressive investor who want access to share market opportunities, seeking potentially high investment returns over the long-term and can accept that investment returns may fluctuate significantly over the short-term and may be negative. You have a high risk tolerance and want to maximize capital growth.`,
        description1: `You are an aggressive investor who want access to share market opportunities, seeking potentially high investment returns over the long-term and can accept that investment returns may fluctuate significantly over the short-term and may be negative. You have a high risk tolerance and want to maximize capital growth.`,
        fund_allocation: `Up to 98% Equity, and up to 2% Fixed Income.`,
        fund_allocation1: `Sehingga 98% Ekuiti, dan Sehingga 2% Sekuriti Pendapatan Tetap.`,
      },
    ],
  },
};

export const portfolioAssetAllocation = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    category: `Long Term Growth`,
    description: `The growth portfolio prioritises long term capital appreciation with a high allocation to developed & emerging market stocks that provides dividends & capital appreciation and a small allocation to government bonds that provides secure regular bond coupons & portfolio diversification effect.`,
    past_performance: [
      { label: `10-Year Annualised Returns`, value: `8.26` },
      { label: `20-Year Annualised Returns`, value: `7.04` },
    ],
    list: [
      {
        type: `EQ`,
        name: `US Equity`,
        value: `55.6`,
      },
      {
        type: `EQ`,
        name: `Europe Equity`,
        value: `13`,
      },
      {
        type: `EQ`,
        name: `Asia Equity`,
        value: `6.9`,
      },
      {
        type: `EQ`,
        name: `Emerging Markets Equity`,
        value: `8.2`,
      },
      {
        type: `BS`,
        name: `Malaysia Bond`,
        value: `6.7`,
      },
      {
        type: `BS`,
        name: `International Government Bond`,
        value: `9.4`,
      },
      {
        type: `CASH`,
        name: `Cash/Dividend`,
        value: `0.4`,
      },
    ],
  },
};

export const fundsPrice = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        date: `2023-11-29`,
        prices: [
          { value: `US_EQ`, price: `0.66` },
          { value: `EU_EQ`, price: `0.75` },
          { value: `APAC_EQ`, price: `1` },
          { value: `EM_EQ`, price: `1.3` },
          { value: `MY_BS`, price: `1.5` },
          { value: `INTL_GOV_BS`, price: `1.7` },
          { value: `DIV`, price: `0` },
        ],
      },
      {
        date: `2024-03-31`,
        prices: [
          { value: `US_EQ`, price: `1` },
          { value: `EU_EQ`, price: `1.5` },
          { value: `APAC_EQ`, price: `0.8` },
          { value: `EM_EQ`, price: `1.1` },
          { value: `MY_BS`, price: `1.3` },
          { value: `INTL_GOV_BS`, price: `1.4` },
          { value: `DIV`, price: `0.5` },
        ],
      },
    ],
  },
};

export const portfolioDocuments = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      { title: `Portfolio Fact Sheet`, value: `FS`, url: `` },
      { title: `SPTM`, value: `SPTM`, url: `` },
      { title: `VGK`, value: `VGK`, url: `` },
      { title: `VPL`, value: `VPL`, url: `` },
      { title: `SPEM`, value: `SPEM`, url: `` },
      { title: `ABF`, value: `ABF`, url: `` },
      { title: `BWX`, value: `BWX`, url: `` },
    ],
  },
};

export const portfolioValueProjection = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    annualised_volatility: `12.80`,
    max_temporary_drawdown: `-24.39`,
  },
};

export const myPortfolioCash = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [{ date: `2024-01-01`, amount: `65000` }],
  },
};

export const myCashFlowTransaction = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    total: `5`,
    current_page: `1`,
    last_page: `1`,
    showing_from: `1`,
    showing_to: `5`,
    list: [
      {
        conducted_at: `2024-04-29`,
        type: `DEPOSIT`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        amount: `1000`,
        status: `DONE`,
      },
      {
        conducted_at: `2024-03-25`,
        type: `DEPOSIT`,
        portfolio_name: `Portfolio 3`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `3`,
        amount: `2000`,
        status: `DONE`,
      },
      {
        conducted_at: `2024-01-24`,
        type: `DEPOSIT`,
        portfolio_name: `Portfolio 2`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `5`,
        amount: `12000`,
        status: `DONE`,
      },
      {
        conducted_at: `2024-01-02`,
        type: `DEPOSIT`,
        portfolio_name: `Portfolio 2`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `4`,
        amount: `35000`,
        status: `DONE`,
      },
      {
        conducted_at: `2023-11-29`,
        type: `DEPOSIT`,
        portfolio_name: `Portfolio 1`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `4`,
        amount: `30000`,
        status: `DONE`,
      },
    ],
  },
};

export const myPortfolioTransaction = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    total: `325`,
    current_page: `1`,
    last_page: `2`,
    showing_from: `1`,
    showing_to: `5`,
    list: [
      {
        effective_at: `2024-05-01`,
        type: `BUY`,
        etf_abbreviation: `SPTM`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        unit: `54`,
        etf_price: `0.8976`,
        currency: `USD`,
      },
      {
        effective_at: `2024-05-01`,
        type: `SELL`,
        etf_abbreviation: `VGK`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        unit: `27`,
        etf_price: `2.1474`,
        currency: `USD`,
      },
      {
        effective_at: `2024-05-01`,
        type: `SELL`,
        etf_abbreviation: `VPL`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        unit: `12`,
        etf_price: `5.4500`,
        currency: `USD`,
      },
      {
        effective_at: `2024-05-01`,
        type: `SELL`,
        etf_abbreviation: `SPEM`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        unit: `13`,
        etf_price: `2.5177`,
        currency: `USD`,
      },
      {
        effective_at: `2024-05-01`,
        type: `BUY`,
        etf_abbreviation: `ABF`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        unit: `226`,
        etf_price: `7.8255`,
        currency: `MYR`,
      },
      {
        effective_at: `2024-05-01`,
        type: `SELL`,
        etf_abbreviation: `BWX`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        unit: `2`,
        etf_price: `11.44`,
        currency: `USD`,
      },
      // {
      //   effective_at: `2024-05-01`,
      //   type: `FX`,
      //   exchange_type: `RM/USD`,
      //   exchange_rate: `0.2112`,
      //   portfolio_name: `Portfolio 4`,
      //   portfolio_group_title: `Starter`,
      //   portfolio_risk_level: `1`,
      //   value_rm: `2000`,
      //   value_usd: `9469.7`,
      // },
      {
        effective_at: `2024-04-26`,
        type: `BUY`,
        etf_abbreviation: `SPTM`,
        portfolio_name: `Portfolio 3`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `3`,
        unit: `10`,
        etf_price: `0.7386`,
        currency: `USD`,
      },
    ],
  },
};

export const myPortfolioFees = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    total: `4`,
    current_page: `1`,
    last_page: `1`,
    showing_from: `1`,
    showing_to: `4`,
    list: [
      {
        started_at: `2024-04-01`,
        ended_at: `2024-04-30`,
        portfolio_code: `PORTFOLIO 4`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        portfolio_average_amount: `100058.1`,
        portfolio_chargeable_amount: `100058.1`,
        management_amount: `41.12`,
        storage_location: ``,
        path: ``,
      },
      {
        started_at: `2024-04-01`,
        ended_at: `2024-04-30`,
        portfolio_code: `PORTFOLIO 3`,
        portfolio_name: `Portfolio 3`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `3`,
        portfolio_average_amount: `10052`,
        portfolio_chargeable_amount: `10052`,
        management_amount: `4.13`,
        storage_location: ``,
        path: ``,
      },
      {
        started_at: `2024-04-01`,
        ended_at: `2024-04-30`,
        portfolio_code: `PORTFOLIO 2`,
        portfolio_name: `Portfolio 2`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `5`,
        portfolio_average_amount: `2120`,
        portfolio_chargeable_amount: `2120`,
        management_amount: `0.87`,
        storage_location: ``,
        path: ``,
      },
      {
        started_at: `2024-04-01`,
        ended_at: `2024-04-30`,
        portfolio_code: `PORTFOLIO 1`,
        portfolio_name: `Portfolio 1`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `4`,
        portfolio_average_amount: `1125.14`,
        portfolio_chargeable_amount: `13`,
        management_amount: `0.46`,
        storage_location: ``,
        path: ``,
      },
    ],
  },
};

export const myDividend = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    total: `30`,
    current_page: `1`,
    last_page: `2`,
    showing_from: `1`,
    showing_to: `20`,
    list: [
      {
        credited_at: `2024-04-30`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        etf_abbreviation: `SPTM`,
        currency: `USD`,
        distributed_dividend_amount: `133.71`,
        withholding_tax: `40.11`,
        payable_dividend_amount: `93.60`,
      },
      {
        credited_at: `2024-04-30`,
        portfolio_name: `Portfolio 3`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `3`,
        etf_abbreviation: `SPTM`,
        currency: `USD`,
        distributed_dividend_amount: `50.62`,
        withholding_tax: `15.19`,
        payable_dividend_amount: `35.43`,
      },
      {
        credited_at: `2024-04-30`,
        portfolio_name: `Portfolio 2`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `5`,
        etf_abbreviation: `SPTM`,
        currency: `USD`,
        distributed_dividend_amount: `6.24`,
        withholding_tax: `1.87`,
        payable_dividend_amount: `4.37`,
      },
      {
        credited_at: `2024-04-30`,
        portfolio_name: `Portfolio 1`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `4`,
        etf_abbreviation: `SPTM`,
        currency: `USD`,
        distributed_dividend_amount: `9.25`,
        withholding_tax: `2.78`,
        payable_dividend_amount: `6.47`,
      },
      {
        credited_at: `2024-04-18`,
        portfolio_name: `Portfolio 4`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `1`,
        etf_abbreviation: `ABF`,
        currency: `MYR`,
        distributed_dividend_amount: `26.1`,
        withholding_tax: `7.83`,
        payable_dividend_amount: `18.27`,
      },
      {
        credited_at: `2024-04-18`,
        portfolio_name: `Portfolio 3`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `3`,
        etf_abbreviation: `ABF`,
        currency: `MYR`,
        distributed_dividend_amount: `10.23`,
        withholding_tax: `3.10`,
        payable_dividend_amount: `7.13`,
      },
      {
        credited_at: `2024-04-18`,
        portfolio_name: `Portfolio 1`,
        portfolio_group_title: `Starter`,
        portfolio_risk_level: `4`,
        etf_abbreviation: `ABF`,
        currency: `MYR`,
        distributed_dividend_amount: `9.52`,
        withholding_tax: `2.86`,
        payable_dividend_amount: `6.66`,
      },
    ],
  },
};

export const transactionFundOptions = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      { label: `SPTM`, value: `SPTM` },
      { label: `ABF`, value: `ABF` },
      { label: `VGK`, value: `VGK` },
      { label: `VPL`, value: `VPL` },
      { label: `SPEM`, value: `SPEM` },
      { label: `BWX`, value: `BWX` },
    ],
  },
};

export const myProjectedReturnCalculator = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    gross_return_rate: `6`,
    management_fee: `0.5`,
    exchange_fee: `0.08`,
    etf_expense_ratio: `0.2`,
  },
};

export const occupations = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Accountant`,
        sequence: 1,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Actor/Actress`,
        sequence: 2,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Architect`,
        sequence: 3,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Artist`,
        sequence: 4,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Attorney/Lawyer`,
        sequence: 5,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Banker`,
        sequence: 6,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Barista`,
        sequence: 7,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Carpenter`,
        sequence: 8,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Chef/Cook`,
        sequence: 9,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Civil Servant`,
        sequence: 10,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Cleaner`,
        sequence: 11,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Consultant`,
        sequence: 12,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Dentist`,
        sequence: 13,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Doctor`,
        sequence: 14,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Electrician`,
        sequence: 15,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Engineer`,
        sequence: 16,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Farmer`,
        sequence: 17,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Financial Advisor`,
        sequence: 18,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Firefighter`,
        sequence: 19,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Flight Attendant`,
        sequence: 20,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Graphic Designer`,
        sequence: 21,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Hairdresser`,
        sequence: 22,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Journalist`,
        sequence: 23,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Lecturer/Professor`,
        sequence: 24,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Librarian`,
        sequence: 25,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Mechanic`,
        sequence: 26,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Musician`,
        sequence: 27,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Nurse`,
        sequence: 28,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Paramedic`,
        sequence: 29,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Pharmacist`,
        sequence: 30,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Photographer`,
        sequence: 31,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Pilot`,
        sequence: 32,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Plumber`,
        sequence: 33,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Police Officer`,
        sequence: 34,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Receptionist`,
        sequence: 35,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Salesperson`,
        sequence: 36,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Software Developer`,
        sequence: 37,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Teacher`,
        sequence: 38,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Technician`,
        sequence: 39,
      },
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Waiter/Waitress`,
        sequence: 40,
      },
    ],
  },
};

export const notification = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        date: `2024-05-14 15:05`,
        type: `APPROVED`,
        description: `Subscription: Maybank Malaysia Growth Fund (RM51,000.00) done processing @ unit cost RM1.0000`,
        comment: ``,
      },
      {
        date: `2024-05-14 11:02`,
        type: `APPROVED`,
        description: `Redemption: Maybank Global Sustainable Technology Fund - MYR (23,562 units) done processing @ unit price Rm0.9568`,
        comment: ``,
      },
      {
        date: `2024-05-14 10:40`,
        type: `REJECTED`,
        description: `Switching: Maybank Global Sustainable Technology Fund - MYR to Maybank Malaysia Growth Fund (2,005.2536 units) is rejected`,
        comment: ``,
      },
      {
        date: `2024-05-13 17:08`,
        type: `PENDING`,
        description: `Subscription: Maybank Malaysia Growth Fund (RM51,000.00)  request received`,
        comment: ``,
      },
      {
        date: `2024-05-03 15:13`,
        type: `PENDING`,
        description: `Redemption: Maybank Global Sustainable Technology Fund - MYR (23,562 units) request received`,
        comment: ``,
      },
      {
        date: `2024-05-01 13:15`,
        type: `APPROVED`,
        description: `Your risk profile is successfully updated! The new risk profile will valid until 01 May 2025`,
        comment: ``,
      },
      {
        date: `2024-05-01 00:00`,
        type: `INFO`,
        description: `May’25 market outlook is up! Click here to start reading`,
        comment: ``,
      },
    ],
  },
};

export const portfolioRisks = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        id: `6b66b63f-c171-42e1-b7bb-cd4dfa99dc1d`,
        title: `Very Conservative`,
        description: `You prioritize the preservation of capital over potential returns, seeking minimal risk exposure even if it means lower growth opportunities.`,
        level: `1`,
        sequence: 0,
      },
      {
        id: `6b697e8c-9fe7-43eb-b574-2205687e3de8`,
        title: `Conservative`,
        description: `You aim for steady growth with a balanced approach, willing to accept some risk in pursuit of moderate returns while still prioritizing capital preservation.`,
        level: `2`,
        sequence: 0,
      },
      {
        id: `3c88da25-9e92-414d-9148-901be0c7bee6`,
        title: `Moderate`,
        description: `You are comfortable with a balanced mix of risk and reward, seeking reasonable growth potential while being mindful of potential fluctuations in the market.`,
        level: `3`,
        sequence: 0,
      },
      {
        id: `38707fc2-2fc5-450c-b281-7260223b5b5f`,
        title: `Aggressive`,
        description: `You're willing to take on higher levels of risk in pursuit of potentially higher returns, understanding that this may lead to significant fluctuations in the value of your investments.`,
        level: `4`,
        sequence: 0,
      },
      {
        id: `d159e829-8d83-4dd8-8b75-0f8b38429614`,
        title: `Very Aggressive`,
        description: `You're fully committed to seeking maximum growth potential, even at the expense of enduring significant market volatility and the possibility of substantial losses.`,
        level: `5`,
        sequence: 0,
      },
    ],
  },
};

export const banks = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        bank_id: `578eef3a-70ef-468f-af95-2428265166c6`,
        bank_title: `AFFIN BANK BERHAD`,
        bank_swift_code: `PHBMMYKL`,
      },
      {
        bank_id: `4296e116-db25-4a11-a3ac-4e7d5bc2e431`,
        bank_title: `AFFIN HWANG INVESTMENT BANK BERHAD`,
        bank_swift_code: `HDSBMY2P`,
      },
    ],
  },
};

export const portfolioRiskLevels = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        risk_type: { label: `Very Conservative`, value: `veryConservative` },
        description: `You prioritize the preservation of capital over potential returns, seeking minimal risk exposure even if it means lower growth opportunities.`,
        value: 0,
      },
      {
        risk_type: { label: `Conservative`, value: `conservative` },
        description: `You aim for steady growth with a balanced approach, willing to accept some risk in pursuit of moderate returns while still prioritizing capital preservation.`,
        value: 20,
      },
      {
        risk_type: { label: `Moderate`, value: `moderate` },
        description: `You are comfortable with a balanced mix of risk and reward, seeking reasonable growth potential while being mindful of potential fluctuations in the market.`,
        value: 52.5,
      },
      {
        risk_type: { label: `Aggressive`, value: `aggressive` },
        description: `You're willing to take on higher levels of risk in pursuit of potentially higher returns, understanding that this may lead to significant fluctuations in the value of your investments.`,
        value: 70,
      },
      {
        risk_type: { label: `Very Aggressive`, value: `veryAggressive` },
        description: `You're fully committed to seeking maximum growth potential, even at the expense of enduring significant market volatility and the possibility of substantial losses.`,
        value: 99,
      },
    ],
  },
};

export const myAccountPersonalDetails = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    full_name: `Liew Xiao You`,
    id_type: { label: `MyKAD`, value: `mykad` },
    id_number: `951210-10-1010`,
    date_of_birth: `1995-12-10`,
    nationality: { label: `Malaysian`, value: `1` },
  },
};

export const myAccountContactDetails = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    address: `26, Jalan CDE, Taman Tun`,
    postcode: `41000`,
    city: `Petaling Jaya`,
    state: { value: `2`, label: `Selangor` },
    country: { value: `MY`, label: `Malaysia` },
    email: `abc@gmail.com`,
    mobile_code: { label: `+60`, value: `MY` },
    mobile_number: `161002010`,
    is_email_verification_completed: false,
  },
};

export const myAccountEmploymentDetails = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    employmentType: { label: `Private Employee`, value: `3` },
    employmentSector: {
      label: `Information Technology`,
      value: `8`,
    },
    occupation: {
      label: `Software Developer`,
      value: `37`,
    },
  },
};

export const myAccountFinancialDetails = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    monthly_income: `6000`,
    monthly_expenses: `1500`,
    assets: `2500`,
    liabilities: `0`,
    tax_residence_country: { label: `Malaysia`, value: `MY` },
    tin_number: `12345678912`,
    domestic_ringgit_borrowing: { label: `No`, value: `false` },
  },
};

export const myAccountRiskLevel = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    label: `Moderate`,
    value: `moderate`,
  },
};

export const myAccountDirectDebitBankAccounts = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        account_holder_name: `Lim Xiao Yu`,
        bank: { label: `Maybank`, value: `2` },
        bank_account_number: `256345987563`,
      },
      {
        account_holder_name: `ABC`,
        bank: { label: `RHB Bank`, value: `1` },
        bank_account_number: `256345987563`,
      },
    ],
  },
};

export const myAccountWithdrawalBankAccount = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    list: [
      {
        account_holder_name: `Lim Xiao Yu`,
        bank: { label: `Maybank`, value: `2` },
        bank_account_number: `256345987563`,
      },
      {
        account_holder_name: `ABC`,
        bank: { label: `RHB Bank`, value: `1` },
        bank_account_number: `256345987563`,
      },
    ],
  },
};

export const marketProducts = {
  status: 200,
  message: `OK`,
  data: {
    list: [
      {
        id: `d908eb03-eed7-4e06-8945-b6ed1f631c3d`,
        title: `Bonds`,
        sequence: 0,
      },
      {
        id: `fca5788f-39ca-43bc-a318-bc12f8f6bb9e`,
        title: `Stocks`,
        sequence: 0,
      },
      {
        id: `22c591f5-daa3-4d40-b91d-b4b1beb9553f`,
        title: `Commodities/Forex/Derivatives`,
        sequence: 0,
      },
      {
        id: `699db744-ab3d-4f1e-ab60-7b9c9d28c008`,
        title: `Mutual Funds`,
        sequence: 0,
      },
    ],
  },
};

export const questionaires = {
  status: 200,
  message: `OK`,
  data: {
    list: [
      {
        title: `What is your Investment Priorities?`,
        choices: [
          {
            title: `Minimising potential loss`,
            value: `min-loss`,
          },
          {
            title: `Equal emphasis on maximising gain and minimising loss`,
            value: `eq-gain-loss`,
          },
          {
            title: `Maximising potential gain`,
            value: `max-gain`,
          },
        ],
        sequence: 0,
      },
      {
        title: `What is your reaction to a market decline of 10%?`,
        choices: [
          {
            title: `I will sell all of my portfolio`,
            value: `sell-all`,
          },
          {
            title: `I will sell part of my portfolio`,
            value: `sell-part`,
          },
          {
            title: `I will do nothing`,
            value: `nothing`,
          },
          {
            title: `I will buy more`,
            value: `buy-more`,
          },
        ],
        sequence: 0,
      },
    ],
  },
};

export const taxResidenceCountries = {
  status: 200,
  message: `OK`,
  data: {
    list: [
      {
        id: `2f62f709-43eb-4385-9301-c0e781471299`,
        title: `Malaysia`,
        sequence: 0,
      },
      {
        id: `f7c4314e-8b57-4964-8960-8bc12ad38c87`,
        title: `Singapore`,
        sequence: 0,
      },
    ],
  },
};

export const phoneCodes = {
  status: 200,
  message: `OK`,
  data: {
    list: [
      {
        id: `ecfa096a-3450-423b-8f6c-fc9c7fd8f46a`,
        title: `+60`,
        sequence: 0,
      },
    ],
  },
};

export const portfolioGroups = {
  status: 200,
  message: `OK`,
  data: {
    list: [
      {
        code: `e66b70ea-fe88-443f-83d8-9264ff37a755`,
        title: `Starter`,
        description: ``,
        sequence: 0,
      },
    ],
  },
};

export const newClientAccountCreationSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};

export const newSignUpOtpSubmission = {
  status: 200,
  message: `OK`,
  data: {
    temporary_token: ``,
  },
};

export const newSignUpSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};

export const newSignUpDraftSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};

export const newSignUpDraft = {
  status: 200,
  message: `OK`,
  data: {
    value: {
      gender: ``,
      marital_status: ``,
      count_of_dependent: ``,
      total_annual_income: ``,
      is_malaysian: ``,
      is_resident_other_than_malaysia: ``,
      is_residing_in_malaysia: ``,
      is_us_green_card_or_citizen: ``,
      count_of_car_loan: ``,
      count_of_housing_loan: ``,
      assets_amount: ``,
      liabilities_amount: ``,
      current_investment_amount: ``,
      expected_initial_amount: ``,
      invested_products: ``,
      investment_priority: ``,
      reaction_to_market_decline: ``,
      investment_risk_level_preference: ``,
      product_code: ``,
      full_name: ``,
      id_type: ``,
      id_number: ``,
      date_of_birth: ``,
      nationality: ``,
      email: ``,
      address: ``,
      postcode: ``,
      country: ``,
      state: ``,
      city: ``,
      proof: { name: ``, path: `` },
      taxes: ``,
      employment_type: ``,
      employment_sector: ``,
      occupation: ``,
      source_of_funds: ``,
      monthly_income_amount: ``,
      monthly_expenses_amount: ``,
      identity_proof_1: {
        name: ``,
        path: ``,
        file: new File([], `default.txt`, {
          type: `text/plain`,
        }),
      },
      identity_proof_2: {
        name: ``,
        path: ``,
        file: new File([], `default.txt`, {
          type: `text/plain`,
        }),
      },
    },
  },
};

export const myCashAccountDetails = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    total: `173.35`,
    myr_account: {
      balance: `153.05`,
      interest_rate: `0.20`,
      returns: `10.24`,
      processing_withdrawal: `0`,
    },
    usd_account: {
      balance: `4.23`,
      interest_rate: `5.02`,
      returns: `0`,
      processing_withdrawal: `0`,
      opt_in_auto_sweep: true,
    },
  },
};

export const myTotalDeposit = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    total: `80000`,
  },
};

export const myTotalWithdrawal = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    total: `0`,
  },
};

export const myTotalFees = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    total: `46.58`,
  },
};

export const myGoals = {
  status: 200,
  current_date_time: `2024-04-01 23:59:59`,
  message: `OK`,
  data: {
    title: `Retirement`,
    target: `1000000`,
    target_date: `2050-12-26`,
    initial_deposit: `10000`,
    recurring_amount: `0`,
  },
};

export const lumpsumDepositUrl = {
  status: 200,
  message: `OK`,
  data: {
    url: ``,
  },
};

export const newPortfolioSubmission = {
  status: 200,
  message: `OK`,
  data: {
    portfolio_code: ``,
  },
};

export const portfolioRiskLevelSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};

export const accountTypes = {
  status: 200,
  message: `OK`,
  data: {
    list: [
      {
        key: `578eef3a-70ef-468f-af95-2428265166c6`,
        title: `Bank Account`,
      },
      {
        key: `578eef3a-70ef-468f-af95-2428265166c6`,
        title: `Cash Account`,
      },
    ],
  },
};

export const newWithdrawalBankAccountSubmission = {
  status: 200,
  message: `OK`,
  data: { bank_account_id: `` },
};

export const newPortfolioWithdrawalOtpSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};

export const withdrawalBankAccounts = {
  status: 200,
  message: `OK`,
  data: {
    list: [
      {
        bank_account_id: `2fe7bcd7-e164-4c19-9597-f1fcc6c57bec`,
        bank_id: `578eef3a-70ef-468f-af95-2428265166c6`,
        holder_name: `Loh`,
        number: `70129012901`,
      },
    ],
  },
};

export const newPortfolioWithdrawalSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};

export const myPersonalDetails = {
  status: 200,
  message: `OK`,
  data: {
    full_name: `Loh`,
    id_type: `dd1dbf99-890c-4a83-95e3-c7fcbe170c8b`,
    id_number: `901010101011`,
    date_of_birth: `1994-01-01`,
    nationality: `b7b247f0-f809-41f1-b4a1-28e2be26f97c`,
  },
};

export const myAddress = {
  status: 200,
  message: `OK`,
  data: {
    type: `MAIL`,
    address: `111, Jalan A, Lorong B`,
    postcode: `50000`,
    country: `b7b247f0-f809-41f1-b4a1-28e2be26f97c`,
    state: `eb58254b-9464-43dd-a0e6-12354156ea2c`,
    city: `Kuala Lumpur`,
    proof: `www.aaa.com/aaa.jpg`,
  },
};

export const myEmploymentDetails = {
  status: 200,
  message: `OK`,
  data: {
    employment_type: `28a35269-00cf-4919-b66e-b3791d423b16`,
    employment_sector: `28a35269-00cf-4919-b66e-b3791d423b16`,
    occupation: `28a35269-00cf-4919-b66e-b3791d423b16`,
  },
};

export const myProfile = {
  status: 200,
  message: `OK`,
  data: {
    identity_proof_1: `www.aaa.com/aaa.jpg`,
    identity_proof_2: `www.aaa.com/aaa1.jpg`,
    gender: `56bb5576-2fff-4d53-bc7a-556fffe138cc`,
    marital_status: `55d19d98-a63f-44e1-bd68-a3f820bbc87f`,
    count_of_dependent: 0,
    total_annual_income: `36000`,
    is_malaysian: true,
    is_resident_other_than_malaysia: false,
    is_residing_in_malaysia: true,
    is_us_green_card_or_citizen: false,
    count_of_car_loan: 1,
    count_of_housing_loan: 0,
    assets_amount: `0.00`,
    liabilities_amount: `0.00`,
    current_investment_amount: `0.00`,
    expected_initial_amount: `1000.00`,
    invested_products: [`f831dabd-3a91-4a1e-9f5f-263309def4ef`],
    investment_priority: `min-loss`,
    reaction_to_market_decline: `sell-all`,
    investment_risk_level_preference: `10a21c4f-fbc4-4b31-ac1c-79f5ed384ef5`,
  },
};

export const myCashFlowDetails = {
  status: 200,
  message: `OK`,
  data: {
    source_of_funds: [`2fc80531-9326-4e70-8b4e-e4a3a04a71fb`],
    monthly_income_amount: `3000.00`,
    monthly_expenses_amount: `2000.00`,
  },
};

export const myTaxDeclaration = {
  status: 200,
  message: `OK`,
  data: {
    list: [
      {
        country: `b7b247f0-f809-41f1-b4a1-28e2be26f97c`,
        tax_number: `123`,
      },
    ],
  },
};

export const newProfileUpdateOtpSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};

export const newAccountPasswordResetSubmission = {
  status: 200,
  message: `OK`,
  data: {
    mobile_code: `+60`,
    mobile_number: `123456789`,
  },
};

export const accountPasswordSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};

export const riskLevelSubmission = {
  status: 200,
  message: `OK`,
  data: {},
};
