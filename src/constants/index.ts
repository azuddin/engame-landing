export const states: string[] = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Perak",
  "Perlis",
  "Pulau Pinang",
  "Sarawak",
  "Selangor",
  "Terengganu",
  "Kuala Lumpur",
  "Labuan",
  "Sabah",
  "Putrajaya",
];

export const countries: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Deps",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Rep",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo {Democratic Rep}",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "St Kitts & Nevis",
  "St Lucia",
  "Saint Vincent & the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const carouselResponsive = {
  xxl: {
    breakpoint: { max: 3000, min: 1536 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  xl: {
    breakpoint: { max: 1535, min: 1280 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  lg: {
    breakpoint: { max: 1279, min: 1024 },
    items: 2,
    partialVisibilityGutter: 60,
  },
  md: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  sm: {
    breakpoint: { max: 639, min: 465 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

export const dashboardBaseUrl = "https://uat.selfservice-tapmaster.engame.tech";

export const loginEndpoint = `${dashboardBaseUrl}/BackEnd/Vendor/login.php`;
export const forgotPasswordEndpoint = `${dashboardBaseUrl}/BackEnd/Vendor/forgotpassword.php`;
export const signupEndpoint = `${dashboardBaseUrl}/BackEnd/Vendor/signup.php`;
export const enquiryEndpoint =
  "https://uat.engame.tech/web_backend/enquiry.php";

export const headers = {
  // Accept: "application/json",
  // "Content-Type": "application/json",
};

export const blogs = [
  {
    avatar: "/assets/images/icon.png",
    author: "Engame.tech",
    datetime: "13 Apr 21  •  9:00AM",
    image: "/assets/images/engame_mdec_dice_winner.jpg",
    title: "MDEC DiCE 2019 Commercial Ready Game Winner",
    desc: "In year 2017 when we first got ourselves into the then called IPCC (Intellectual Property Creators' Challenge)...",
    content: `
      <div>
        <p>
          In year 2017 when we first got ourselves into the then called IPCC
          (Intellectual Property Creators&apos; Challenge), we squeezed
          ourselves into the finalist but falls short in the final round;
          it&apos;s clear that our game with commercial elements wasn&apos;t
          ready and we stuffed the idea into the deep freeze.
        </p>
        <br />
        <p>
          Fast forward to late 2019, where we just pivoted to B2B games platform
          for enterprise, DiCE (Digital Content Creation Challenge) came up and
          we submitted in a blink of an eye; coupled with several improvements
          on gameplay, commercial elements and market positioning, we&apos;re
          able to win this time, and this signifies that our game as a service
          platform is ready to roll.
        </p>
      </div>
    `,
  },
  {
    avatar: "/assets/images/icon.png",
    author: "Engame.tech",
    datetime: "13 Apr 21  •  9:00AM",
    image: "/assets/images/engame_maxis_top_startup.jpg",
    title: "MDEC DiCE 2019 Commercial Ready Game Winner",
    desc: "In year 2017 when we first got ourselves into the then called IPCC (Intellectual Property Creators' Challenge)...",
    content: `
      <div>
        <p>
          In year 2017 when we first got ourselves into the then called IPCC
          (Intellectual Property Creators&apos; Challenge), we squeezed
          ourselves into the finalist but falls short in the final round;
          it&apos;s clear that our game with commercial elements wasn&apos;t
          ready and we stuffed the idea into the deep freeze.
        </p>
        <br />
        <p>
          Fast forward to late 2019, where we just pivoted to B2B games platform
          for enterprise, DiCE (Digital Content Creation Challenge) came up and
          we submitted in a blink of an eye; coupled with several improvements
          on gameplay, commercial elements and market positioning, we&apos;re
          able to win this time, and this signifies that our game as a service
          platform is ready to roll.
        </p>
      </div>
    `,
  },
];
