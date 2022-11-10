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

export const dashboardBaseUrl = "https://selfservice-tapmaster.engame.tech";

export const loginEndpoint = `${dashboardBaseUrl}/BackEnd/Vendor/login.php`;
export const forgotPasswordEndpoint = `${dashboardBaseUrl}/BackEnd/Vendor/forgotpassword.php`;
export const signupEndpoint = `${dashboardBaseUrl}/BackEnd/Vendor/signup.php`;
export const enquiryEndpoint = "https://engame.tech/web_backend/enquiry.php";

export const headers = {
  // Accept: "application/json",
  // "Content-Type": "application/json",
};

export interface BlogType {
  avatar: string;
  author: string;
  datetime: string;
  image: string;
  image_lg: string;
  title: string;
  desc: string;
  content: string;
}
export const blogs: BlogType[] = [
  {
    avatar: "/assets/images/icon.png",
    author: "Engame",
    datetime: "2022-07-13 10:48",
    image_lg: "/assets/images/09 blog/engame_can_games_boost_sales.gif",
    image: "/assets/images/09 blog/engame_can_games_boost_sales.gif",
    title: "Can Games Boost Sales?",
    desc: "Replace the “games” in the title with anything, say “advertisements”, “social media”, “gurus”, “wind & water”...",
    content: `
      <div>
        <p>
        Replace the “games” in the title with anything, say “advertisements”, “social media”, “gurus”, “wind & water”, “cats” or anything you could think of, might be the most asked question by majority of the business owners and you, if you are reading this.
        </p>
        <br />
        <p>
        Obviously, we won&apos;t be talking about cats and water here, that&apos;s not why we are here, but how games can benefit your sales and not dumping money into the sea, terms and conditions applied, puns not intended, more on this later.
        </p>
        <br />
        <p>
        So, let us define the term “gamification” as a start to clear the air up for us, it is the strategic attempt to enhance systems, services, organizations, and activities by creating similar experiences to those experienced when playing games in order to motivate and engage users. This is what has been defined in Wikipedia, sounds great isn&apos;t it?
        </p>
        <br />
        <p>
        Now, let&apos;s get to the “terms and conditions applied” earlier, gamification can indeed benefit not just sales, but brand image, value and customers&apos; experience greatly, only if it&apos;s being done properly as in many technologies around, it is only as good as the technology, team and deployment behind it. Sadly, this isn&apos;t the case with many, many deployments out there, even multibillion dollar high tech company from Korea failed in their gamification attempt. That is why generally public often has a negative opinion in regards of gamification.
        </p>
        <br />
        <p>
        One of the main reasons is the “game” part is missing from the “gamification”; simply adding “point collection system”, “fancy dashboard” or even a “scratch & win system” IS NOT gamification; the element of interactive gameplay, stimulating experience, triggering emotions, and game player connection are not present in most gamification deployment out there; they are just a point collection system where you might be able to redeem something that isn&apos;t remotely useful for you, like a “digital badge”.
        </p>
        <br />
        <p>
        So now you might ask, are there any good and successful gamification examples? And how do they do it? Let us take “Shopee” as an example, almost everybody knows them and they have one of the most successful gamification deployments in e-commerce arena; currently they are having a simplified “Word Puzzle” game called “Shopee Words” as of writing, which rewards the player 3 Shopee coins (Less than USD 0.01 worth of discount) after completing 15 levels of the game; why is this a good deployment?
        </p>
        <br />
        <p>
        First, we are going to look at their ultimate objective, which is to get their users or visitors to buy and spend more in their platform, based on this let us go through a list of things they got it right.
        <br />
        1. It targets a wide range of users, as the game itself is a casual game which anyone that understands English can play.
        <br />
        2. It is mildly entertaining and engaging, as users are required to solve simple words puzzle to proceed; plus, they might get someone to help them and this widen its brand presence to not just the user but the people around the user too.
        <br />
        3. It rewards users at the end of the game, although the reward seemed minute (Less than USD 0.01) but it got around 20% of the users that started the game (Around 30% of the users have tried those games at least once) to finish the game; and most of them will be more likely to purchase something in the next few days.
        </p>
        <br />
        <p>
        If you&apos;re asking for a bad example of gamification I mentioned earlier? Please refer to the link down below as we don&apos;t want to get into any trouble with a tech behemoth at this moment *laughs in sweat*.
        </p>
        <br />
        <p>
        So yes, gamification WORKS, when it&apos;s done properly; gamification can be one of the most powerful marketing tools to boost sales in whatever industry that you are in.
        </p>
        <br />
        <p>
        Refer to the link below for further reading on gamification
        <br />
        https://dx.doi.org/10.1108/JSM-01-2015-0045
        </p>
      </div>
    `,
  },
  {
    avatar: "/assets/images/icon.png",
    author: "Engame",
    datetime: "2022-04-02 19:33",
    image: "/assets/images/09 blog/engame_maxis_top_startup.jpg",
    image_lg: "/assets/images/09 blog/engame_maxis_top_startup.jpg",
    title: "Maxis Market Access Day Top 100 Startups",
    desc: "Shortly after we were awarded the Commercial Ready Game winner, we were informed by Maxis that we were selected to be...",
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
    author: "Engame",
    datetime: "2022-03-11 14:31",
    image: "/assets/images/09 blog/engame_mdec_dice_winner.jpg",
    image_lg: "/assets/images/09 blog/engame_mdec_dice_winner.jpg",
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
