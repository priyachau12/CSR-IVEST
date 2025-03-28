const ngos_list = [
  {
    id: 1,
    name: "Asha Foundation",
    address:
      "D248, DDA flats, Pkt-3 Bindapur, near sector 2 dwarka, power house, New Delhi, Delhi 110059",
    googleMaps: "https://g.co/kgs/y2uJonp",
    fundingAmount: 100000,
    googleForm: "https://ashafdn.org.in/",
  },
  {
    id: 2,
    name: "Hamari Pahchan NGO",
    address:
      "1st floor, H.no. 1121, Mahipalpur Bypass, opposite Arjun Camp, Mahipalpur Extension, Mahipalpur, New Delhi, Delhi 110037",
    googleMaps: "https://g.co/kgs/QDhXdrz",
    fundingAmount: 100000,
    googleForm: "https://hamaripahchan.org/",
  },
  {
    id: 3,
    name: "Helping Hut",
    address:
      "D- block, Plot no :-147 and 147 A, Gali Number 5, Bharat Vihar, Kakrola, Dwarka, Delhi, 110078",
    googleMaps: "https://g.co/kgs/QHpsdkp",
    fundingAmount: 100000,
    googleForm: "https://helpinghutngo.in/",
  },
  {
    id: 4,
    name: "Stand N Stride",
    address:
      "441 Plot no.14, Surya Apartment, Sector 6 Dwarka, Dwarka, New Delhi, Delhi, 110075",
    googleMaps: "https://g.co/kgs/zxihE4G",
    fundingAmount: 100000,
    googleForm: "https://standnstride.org/",
  },
  {
    id: 5,
    name: "True Dream NGO-Best Ngo in Delhi",
    address:
      "Gate No.2, 3/15, near Metro Station, Block B, Model Town Phase I, Model Town, Delhi, 110009",
    googleMaps: "https://g.co/kgs/Npkcvey",
    fundingAmount: 100000,
    googleForm: "-",
  },
  {
    id: 6,
    name: "CHETNA NGO for Street Children",
    address: "40/22, Manohar Kunj, Gautam Nagar, New Delhi, Delhi 110049",
    googleMaps: "https://g.co/kgs/ctcvx8r",
    fundingAmount: 100000,
    googleForm: "https://chetnango.org/",
  },
  {
    id: 7,
    name: "Badlav Foundation",
    address:
      "metro pillar no 789, Badlav Foundation, 153, First Floor, Nearby MyMart Mall, New Delhi, Delhi 110059",
    googleMaps: "https://g.co/kgs/WNLn98W",
    fundingAmount: 100000,
    googleForm: "http://badlav.in/",
  },
  {
    id: 8,
    name: "Mera India Mera Adhikar, (MIMANGO)",
    address:
      "S 285 kanak durga colony, Sector 12, Rama Krishna Puram, New Delhi, Delhi 110022",
    googleMaps: "https://g.co/kgs/iRpsJag",
    fundingAmount: 100000,
    googleForm: "https://mima.org.in/",
  },
  {
    id: 9,
    name: "RAWAT NGO (Rural Association for Women's Alligatory Tribute)",
    address:
      "RAWAT NGO, B Block, RZ-24, Street No. 6, Block B,Patel Block, Raghu Nagar, Dabri, New Delhi, Delhi, 110045",
    googleMaps: "https://g.co/kgs/JwicuYZ",
    fundingAmount: 100000,
    googleForm: "-",
  },
  {
    id: 10,
    name: "Ananya Foundation",
    address: "Gg-1 Rd, 36-C, Block GG1, Vikaspuri, New Delhi, Delhi, 110018",
    googleMaps: "https://g.co/kgs/Z1hdnko",
    fundingAmount: 100000,
    googleForm: "-",
  },
  {
    id: 11,
    name: "SK Children Foundation",
    address: null,
    googleMaps: "https://g.co/kgs/4cMxeBF",
    fundingAmount: 100000,
    googleForm: "https://www.skchildrenfoundation.org/",
  },
  {
    id: 12,
    name: "Niswarth - The Selfless",
    address:
      "P. No. 29 A, G.F. Store, Matiala Extension, New Delhi, Delhi 110059",
    googleMaps: "https://g.co/kgs/c4Rxcco",
    fundingAmount: 100000,
    googleForm: "https://theselfless.org/",
  },
  {
    id: 13,
    name: "Sahyog care for you",
    address:
      "22 Basement, Bhera Enclave, Paschim Vihar, New Delhi PIN - 110087",
    googleMaps: "https://g.co/kgs/fSx2ABu",
    fundingAmount: 100000,
    googleForm: "https://www.sahyogcare4u.org/",
  },
  {
    id: 14,
    name: "Smile Foundation",
    address:
      "Gulmohar Commercial Complex, 161 B/4, 3rd Floor Community Centre, Yusuf Sarai, New Delhi, Delhi 110049",
    googleMaps: "https://g.co/kgs/NBDVYsq",
    fundingAmount: 100000,
    googleForm: "https://www.smilefoundationindia.org/",
  },
  {
    id: 15,
    name: "SHUDDHI NGO",
    address:
      "5th Floor, Indra Prakash Building, SHUDDHI NGO, 512A, 21, Barakhamba Rd, Connaught Place, New Delhi, Delhi 110001",
    googleMaps: "https://g.co/kgs/qkBQGp3",
    fundingAmount: 100000,
    googleForm: "https://www.shuddhi.org/index.html",
  },
  {
    id: 16,
    name: "Bal Sahyog",
    address: null,
    googleMaps: "https://g.co/kgs/xs9np7A",
    fundingAmount: 100000,
    googleForm: "https://www.balsahyog.org.in/",
  },
  {
    id: 17,
    name: "Sewa Bharati",
    address: null,
    googleMaps: "https://g.co/kgs/a7MJiES",
    fundingAmount: 100000,
    googleForm: "https://www.sewabhartidelhi.org/",
  },
  {
    id: 18,
    name: "MILESTONE",
    address:
      "MILESTONE NGO Office, Kali Bari Marg, Haig Square, Gole Market, Delhi, New Delhi, Delhi 110001",
    googleMaps: "https://g.co/kgs/XSXqYN9",
    fundingAmount: 100000,
    googleForm: "https://milestonedelhi.org/",
  },
  {
    id: 19,
    name: "League Organization",
    address:
      "5159, Street, Bal Krishan, Basant Rd, Railway Colony, Paharganj, New Delhi, Delhi 110055",
    googleMaps: "https://g.co/kgs/Ab4Q7Gk",
    fundingAmount: 100000,
    googleForm: "https://www.league.org.in/",
  },
  {
    id: 20,
    name: "Chetanalaya",
    address: "Chetanalaya, 9-10, Bhai Vir Singh Marg, New Delhi 110001, INDIA",
    googleMaps: "https://g.co/kgs/gmLzBRM",
    fundingAmount: 100000,
    googleForm: "https://www.chetanalaya.org/#",
  },
];

export default ngos_list;
