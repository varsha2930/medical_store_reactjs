import productImg01 from "../Images/product1.jpg.webp";
import productImg02 from "../Images/product6.webp";
import productImg03 from "../Images/product11.webp";
import productImg04 from "../Images/product13.webp";
import productImg05 from "../Images/product14.webp";
import productImg06 from "../Images/product15.webp";
import productImg007 from "../Images/product21.webp";
import productImg07 from "../Images/product16.webp";
import productImg08 from "../Images/product7.webp";
import productImg09 from "../Images/product8.webp";
import phone01 from "../Images/product12.webp";
import phone02 from "../Images/product17.webp";
import phone03 from "../Images/product9.webp";
import phone04 from "../Images/product10.webp";
import phone05 from "../Images/product18.webp";
import phone06 from "../Images/product19.webp";
import slide4 from "../Images/women_care_banner_web.jpg.webp";
import watch01 from "../Images/product20.webp";
import slide3 from "../Images/banner3.jpeg";
import Slide1 from "../Images/banner1.jpeg";
import Slide2 from "../Images/banner2.png";

export const SliderData = [
  {
      id: 1,
      title: "50% Off On Your First Order",
      desc: "Grab the offer now",
      cover: Slide1,
  },
  {
      id: 2,
      title: "50% Off For On First Order",
      desc: "Grab the offer now",
      cover: slide4,
  },
  {
      id: 3,
      title: "50% Off For Your First Order",
      desc: "Grab the offer now ",
      cover: slide3,
  },
  {
      id: 4,
      title: "50% Off For Your First Order",
      desc: " Grab the offer now",
      cover: Slide2,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
     bg: "#fdefe6",
    
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe payment",
     bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "24/7 Service",
   bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: " Product Guarantee",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Ecosprin 75mg Strip Of 14 Tablets",
    imgUrl: productImg01,
    category: "medicine",
    price:35,
    discount:5,
    shortDesc:
      "  ",
    description:
      "Ecosprin 75 tablet is an antiplatelet medicine. It is used to prevent the risk of heart attacks, stroke and angina. It is also used in patients who have had angioplasty. Blood clots can limit or block the passage of blood to essential organs, resulting in a heart attack or stroke.",
    reviews: [
      {
        rating: 4.7,
        text: "Good medicine...I gives great relief.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: " Evion 400mg Strip Of 10 Capsules",
    imgUrl: productImg02,
    category: "medicine",
    price: 150,
    discount:8,
    shortDesc:
      "",
    description:
      "",
    reviews: [
      {
        rating: 4.8,
        text: "",
      },
      {
        rating: 4.8,
        text: "",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Jointace C2 Strip Of 10 Tablets",
    imgUrl: productImg08,
    category: "medicine",
    price: 230,
    discount:10,
    shortDesc:
      "",
    description:
      "",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Shelcal 500mg Strip Of 15 Tablets    ",
    imgUrl: productImg09,
    category: "medicine",
    price:250,
    discount:15,
    shortDesc:
      "",
    description:
      "",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "I Site Af Strip Of 10 Capsules",
    imgUrl: phone03,
    category: "medicine",
    price: 299,
    discount:10,
    shortDesc:
      "",
    description:
      "",
    reviews: [
      {
        rating: 4.8,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Neurobion Plus Strip Of 10 Tablets",
    imgUrl: phone04,
    category: "medicine",
    price: 389,
    discount:20,
    shortDesc:
      "",
    description:
      "",
    reviews: [
      {
        rating: 4.8,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },

]

export const products = [
  {
    id: "01",
    productName: "Ecosprin 75mg Strip Of 14 Tablets ",
    imgUrl: productImg01,
    category: "medicine",
    price: 35,
    shortDesc:
      " Ecosprin 75 tablet is an antiplatelet medicine. ",
    description:
      "Ecosprin 75 tablet is an antiplatelet medicine. It is used to prevent the risk of heart attacks, stroke and angina. It is also used in patients who have had angioplasty. Blood clots can limit or block the passage of blood to essential organs, resulting in a heart attack or stroke.",
    reviews: [
      {
        rating: 4.7,
        text: "Good medicine...It gives great relief",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Evion 400mg Strip Of 10 Capsules ",
    imgUrl: productImg02,
    category: "medicine",
    price: 150,
    shortDesc:
      "Vitamin E capsules",
    description:
      "vion 400 capsule is a vitamin supplement. Evion 400 capsule contains vitamin E (also known as tocopherol) as its active ingredient. Vitamin E is a fat-soluble vitamin. It works as an antioxidant and protects body cells from oxidative damage.",
    reviews: [
      {
        rating: 4.8,
        text: "Good supplement.",
      },
      {
        rating: 4.8,
        text: "I use it regularly and my hair and skin has become better.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: " Digital Thermometer",
    imgUrl: productImg03,
    category: "healthcare",
    price: 468,
    shortDesc:
      "Digital thermometers measure body temperature over a small temperature range centered around 37°C.",
    description:
      "Digital thermometers measure body temperature over a small temperature range centered around 37°C. Digital thermometers provide faster, more convenient measurements and also eliminate the environmental hazard of mercury in legacy thermometers. Probe and ear digital thermometers are the two most common types.",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "  Lumbar Sacro Support Belt- Back Pain Relief And Sacral Support    ",
    imgUrl: phone01,
    category: "healthcare",
    price: 630,
    shortDesc:
      "Support Belt has been designed specifically for people with lower back or other back disorders.",
    description:
      "Lumbar Sacro Support Belt has been designed specifically for people with lower back or other back disorders. Back pain, which is quite common, can severely disrupt your lifestyle. It can happen due to simple reasons like improper posture, sudden jerk movements of the spine, or lifting something heavy to more serious reasons like a back injury associated with an accident or a degenerative disc disorder.",
    reviews: [
      {
        rating: 4.8,
        text: "",
      },
      {
        rating: 4.8,
        text: "good product.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Dr. Morepen Bp-02 Blood Pressure Monitor",
    imgUrl: productImg04,
    category: "healthcare",
    price: 1500,
    shortDesc:
      "A Bp Monitor is a medical device used for monitoring blood pressure.",
    description:
      "A Bp Monitor is a medical device used for monitoring blood pressure. It can be easily used at home and gives precise results. This device detects accurate systolic and diastolic pressure for individuals as well as their heart rate frequencies. It is manufactured by the trusted brand of Dr Morepen and is preferred for clinical use. It is available widely in the market and the Dr Morepen Bp Monitor price is reasonable too.",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Pharmeasy Pulse Oximeter",
    imgUrl: productImg05,
    category: "healthcare",
    price: 550,
    shortDesc:
      " ",
    description:
      "",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Pan 40mg Strip Of 15 Tablets    ",
    imgUrl: productImg06,
    category: "medicine",
    price: 163,
    shortDesc:
      "Pan 40 tablet is a medication that reduces the stomach's acid level.",
    description:
      "Pan 40 tablet is a medication that reduces the stomach's acid level. It is used to treat stomach ulcers, gastroesophageal reflux disease (GERD), and other conditions related to acidity. GERD is a condition that occurs when acid reflux happens frequently, causing a burning pain or discomfort in the chest. The active ingredient in Pan 40 tablets is pantoprazole, which helps reduce stomach acid production. For the best results, taking this tablet on an empty stomach is recommended.",
    reviews: [
      {
        rating: 4.6,
        text: "works well.",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Cipcal 500mg Strip Of 15 Tablets",
    imgUrl: productImg07,
    category: "medicine",
    price: 240,
    shortDesc:
      "Cipcal 500 tablet contains a combination of calcium and vitamin D3 ",
    description:
      "Cipcal 500 tablet contains a combination of calcium and vitamin D3 (also known as cholecalciferol/cholecalciferol). It is used to treat vitamin D and calcium deficiency and as an adjuvant to other medicines in bone-related disorders such as osteoporosis. It is also used as a general supplement to help maintain healthy bones and teeth.",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Dolo 650mg Strip Of 15 Tablets",
    imgUrl: productImg007,
    category: "medicine",
    price: 25,
    shortDesc:
      "which works by blocking the formation of certain chemicals that cause pain and fever in the body.",
    description:
      "Dolo 650 tablet contains an active ingredient called paracetamol, which works by blocking the formation of certain chemicals that cause pain and fever in the body. This medicine can be used to treat various conditions such as headache, backache, migraine, toothache, body pain, and even fever associated with diseases like typhoid or the common cold.      ",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Jointace C2 Strip Of 10 Tablets",
    imgUrl: productImg08,
    category: "medicine",
    price: 230,
    shortDesc:
      "Jointace C2 is combination of Glucosamine sulphate, Collagen and Vitamin D3.",
    description:
      "Jointace C2 is combination of Glucosamine sulphate, Collagen and Vitamin D3. It helps provide collagen to the joints, delays the cartilage degenerative changes and also help firm the joints. Jointace C2 has an added advantage of Vitamin D3 that helps in the management of Osteoarthritis.",
    reviews: [
      {
        rating: 4.6,
        text: "using this medcine for my knee pain.",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Shelcal 500mg Strip Of 15 Tablets",
    imgUrl: productImg09,
    category: "medicine",
    price: 250,
    shortDesc:
      "Shelcal 500 helps treat osteoporosis and other bone-related problems.",
    description:
      "Calcium and Vitamin D3 are two crucial components for maintaining healthy bones and joints. The deficiency of these two nutrients can lead to bone and joint-related disorders. Thus Shelcal 500 helps treat osteoporosis and other bone-related problems.",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 4.9,
        text: ".",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Bausch & Lomb Renu Fresh Multi Purpose Solution Bottle Of 500 Ml",
    imgUrl: phone02,
    category: "healthcare",
    price: 1600,
    shortDesc:
      "solution for contact lenses.",
    description:
      "Bausch & Lomb Renu fresh is a multi-purpose solution that rejuvenates your contact lenses and keeps them fresh due to which it feels like you're putting on a new pair every day. Renu fresh provides a cushion of comfort for your contact lenses. It is called multi-purpose because it can be used for cleaning, rinsing, disinfecting and storing your soft and delicate contact lenses.",
    reviews: [
      {
        rating: 4.8,
        text: "very nice product better than other solutions.",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },
 
  {
    id: "11",
    productName: "3 Ply Mask Packet Of 100",
    imgUrl: phone05,
    category: "healthcare",
    price: 500,
    shortDesc:
      "mask to protect from dust,bacteria,virus.",
    description:
      "As the pandemic takes a toll on our lifestyle, 3 ply masks have become an everyday essential. There are several types of masks available in the market but these are the most effective and offer you three-layered protection. These are designed in a 3-dimensional structure, seamless crimping and with fine, breathable material. These are used by medical professionals and are multipurpose.",
    reviews: [
      {
        rating: 4.8,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "I Site Af Strip Of 10 Capsules",
    imgUrl: phone03,
    category: "medicine",
    price: 299,
    shortDesc:
      " prevents eye diseases, such as ARMD (age-related macular degeneration), high ocular pressure, and cataracts.",
    description:
      "I-Site AF Capsule is used to prevent eye diseases, such as ARMD (age-related macular degeneration), high ocular pressure, and cataracts. When the ocular lens is exposed to oxygen, dust and light rays, it forms free radicals that affect the vision.",
    reviews: [
      {
        rating: 4.8,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "Neurobion Plus Strip Of 10 Tablet",
    imgUrl: phone04,
    category: "medicine",
    price: 389,
    shortDesc:
      "Neurobion Plus tablet is a dietary supplement. ",
    description:
      "Neurobion Plus tablet is a dietary supplement. Neurobion Plus consist of multivitamins such as mecobalamin (a form of vitamin B12), pyridoxine (vitamin B6) and nicotinic acid (a form of vitamin B3) as active components. It is used to treat & prevent vitamins B3, B6 and B12 deficiencies.",
    reviews: [
      {
        rating: 4.8,
        text: "Good supplement.",
      },
      {
        rating: 3.6,
        text: "Gives rashes.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Liveasy Ortho Care Cotton Crepe Bandage - Reduces Strain Sprain & Swelling - 6 Cms X 4 Meters",
    imgUrl: phone06,
    category: "healthcare",
    price: 257,
    shortDesc:
      "LivEasy Ortho Care Cotton Crepe Bandage is useful in strain, sprain and reduces swelling.",
    description:
      "LivEasy Ortho Care Cotton Crepe Bandage is useful in strain, sprain and reduces swelling. It is made from ultra-soft breathable cotton that keeps the skin comfortable and sweat-free and eliminates any discomfort or itching. It can easily be wrapped around any injured joint such as ankle, elbow, foot, hand, or knee. When wrapped, LivEasy Ortho Care Cotton Crepe Bandage applies compression to the injured area and minimizes movement. This lets the injured site heal properly and also helps to manage pain.      ",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Accu-Chek Active Glucometer Kit (With Free 10 Strips)",
    imgUrl: watch01,
    category: "healthcare",
    price: 2700,
    shortDesc:
      "The Accu-Chek Active Glucometer kit is a machine that is used together with Accu-Chek Active strips to measure the glucose content in the blood.",
    description:
      "The Accu-Chek Active Glucometer kit is a machine that is used together with Accu-Chek Active strips to measure the glucose content in the blood. Blood sugar content has many effects on the body, it plays a role in high blood pressure, diabetes and other conditions. Hence, easy access to accurate and fast glucose levels in the blood is essential for both safety and convenience. The Accu-Chek Active fulfils these needs by providing a convenient tool for your blood sugar self-testing needs at home, results of your tests are provided usually within 4-5 seconds. ",
    reviews: [
      {
        rating: 4.8,
        text: "",
      },
      {
        rating: 4.9,
        text: "Yes. It is functioning well so far. It is very versatile instrument and gives quick and proper readings for blood sugar monitoring effectively.Value for money.",
      },
    ],
    avgRating: 4.8,
  },

 
];
