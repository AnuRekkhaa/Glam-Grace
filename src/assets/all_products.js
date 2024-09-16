import make1 from './m1.png'
import make2 from './m2.png'
import make3 from './m3.png'
import make4 from './m15.jpg'
import make5 from './m12.png'
import make6 from './m5.png'
import make7 from './m7.png'
import make8 from './m8.png'
import make9 from './m13.png'
import make10 from './m14.png'
import skin1 from './s1.jpeg'
import skin2 from './s2.jfif'
import skin3 from './s3.jfif'
import skin4 from './s4.jfif'
import skin5 from './s5.jfif'
import skin6 from './s6.jfif'
import skin7 from './s7.jfif'
import skin8 from './s8.jfif'
import skin9 from './s9.jfif'
import skin10 from './s10.jfif'
import body1 from './b1.jfif'
import body2 from './b2.jfif'
import body3 from './b3.jfif'
import body4 from './b4.jfif'
import body5 from './b5.jfif'
import body6 from './b6.jfif'
import body7 from './b7.jfif'
import body8 from './b8.jfif'
import body9 from './b9.jfif'
import body10 from './b10.jpg'
import hair1 from './h1.jfif'
import hair2 from './h2.jfif'
import hair3 from './h3.jfif'
import hair4 from './h4.jfif'
import hair5 from './h5.jfif'
import hair6 from './h6.jfif'
import hair7 from './h7.jfif'
import hair8 from './h8.jfif'
import hair9 from './h9.jfif'
import hair10 from './h10.jfif'
import frag1 from './f1.jfif'
import frag2 from './f2.jfif'
import frag3 from './f3.jfif'
import frag4 from './f4.png'
import frag5 from './f5.jfif'
import frag6 from './f6.jfif'
import frag7 from './f7.jfif'
import frag8 from './f8.jfif'
import frag9 from './f9.jfif'
import frag10 from './f10.jfif'
import off1 from './o1.jfif'
import off2 from './o2.jfif'
import off3 from './o3.jfif'
import off4 from './o4.jfif'
import off5 from './o5.jfif'
import off6 from './o6.jpg'
import off7 from './o7.jfif'
import off8 from './o8.jpg'
import off9 from './o9.jfif'
import off10 from './o10.jfif'

let all_products = [
  {
    id: 1,
    name: 'Primer',
    image: make1,
    category: 'Makeup',
    new_price: 700,
    old_price: 900,
  },
  {
    id: 2,
    name: 'Foundation',
    image: make2,
    category: 'Makeup',
    new_price: 800,
    old_price: 1000,
  },
  {
    id: 3,
    name: 'Concealer',
    image: make3,
    category: 'Makeup',
    new_price: 800,
    old_price: 900,
  },
  {
    id: 4,
    name: 'Compact Powder',
    image: make4,
    category: 'Makeup',
    new_price: 1000,
    old_price: 1200,
  },
  {
    id: 5,
    name: 'Kajal',
    image: make5,
    category: 'Makeup',
    new_price: 200,
    old_price: 300,
  },
  {
    id: 6,
    name: 'Mascara',
    image: make6,
    category: 'Makeup',
    new_price: 250,
    old_price: 400,
  },
  {
    id: 7,
    name: 'Blush',
    image: make7,
    category: 'Makeup',
    new_price: 650,
    old_price: 900,
  },
  {
    id: 8,
    name: 'Highlighter',
    image: make8,
    category: 'Makeup',
    new_price: 1000,
    old_price: 1200,
  },
  {
    id: 9,
    name: ' Branded Lipstick',
    image: make9,
    category: 'Makeup',
    new_price: 100,
    old_price: 200,
  },
  {
    id: 10,
    name: ' Makeup Brush set',
    image: make10,
    category: 'Makeup',
    new_price: 1400,
    old_price: 1500,
  },
  {
    id: 11,
    name: ' Cleanser',
    image: skin1,
    category: 'Skin',
    new_price: 400,
    old_price: 500,
  },
  {
    id: 12,
    name: ' Face Wash',
    image: skin2,
    category: 'Skin',
    new_price: 250,
    old_price: 300,
  },
  {
    id: 13,
    name: 'Day Cream',
    image: skin3,
    category: 'Skin',
    new_price: 400,
    old_price: 450,
  },
  {
    id: 14,
    name: ' Moisturizer',
    image: skin4,
    category: 'Skin',
    new_price: 400,
    old_price: 500,
  },
  {
    id: 15,
    name: ' Sunscreen',
    image: skin5,
    category: 'Skin',
    new_price: 350,
    old_price: 400,
  },
  {
    id: 16,
    name: ' Night cream',
    image: skin6,
    category: 'Skin',
    new_price: 450,
    old_price: 600,
  },
  {
    id: 17,
    name: 'Face Pack',
    image: skin7,
    category: 'Skin',
    new_price: 500,
    old_price: 600,
  },
  {
    id: 18,
    name: ' Face Scrub',
    image: skin8,
    category: 'Skin',
    new_price: 400,
    old_price: 500,
  },
  {
    id: 19,
    name: 'Mens Face Wash',
    image: skin9,
    category: 'Skin',
    new_price: 200,
    old_price: 300,
  },
  {
    id: 20,
    name: 'Mens Face Cream',
    image: skin10,
    category: 'Skin',
    new_price: 400,
    old_price: 550,
  },
  {
    id: 21,
    name: 'Baby Body Lotion',
    image: body1,
    category: 'Body',
    new_price: 400,
    old_price: 600,
  },
  {
    id: 22,
    name: 'Womens Body Lotion',
    image: body2,
    category: 'Body',
    new_price: 450,
    old_price: 600,
  },
  {
    id: 23,
    name: 'Mens Body Lotion',
    image: body3,
    category: 'Body',
    new_price: 400,
    old_price: 500,
  },
  {
    id: 24,
    name: 'Baby Body Wash',
    image: body4,
    category: 'Body',
    new_price: 300,
    old_price: 400,
  },
  {
    id: 25,
    name: 'Womens Body Wash',
    image: body5,
    category: 'Body',
    new_price: 400,
    old_price: 500,
  },
  {
    id: 26,
    name: 'Mens Body Wash',
    image: body6,
    category: 'Body',
    new_price: 350,
    old_price: 400,
  },
  {
    id: 27,
    name: 'Baby Soap',
    image: body7,
    category: 'Body',
    new_price: 100,
    old_price: 150,
  },
  {
    id: 28,
    name: 'Beauty Soap',
    image: body8,
    category: 'Body',
    new_price: 100,
    old_price: 150,
  },
  {
    id: 29,
    name: 'Skin Protective Soap',
    image: body9,
    category: 'Body',
    new_price: 90,
    old_price: 150,
  },
  {
    id: 30,
    name: 'Body Serum',
    image: body10,
    category: 'Body',
    new_price: 600,
    old_price: 700,
  },
  {
    id: 31,
    name: 'Baby Shampoo',
    image: hair1,
    category: 'Hair',
    new_price: 400,
    old_price: 500,
  },
  {
    id: 32,
    name: 'Womens Shampoo',
    image: hair2,
    category: 'Hair',
    new_price: 400,
    old_price: 600,
  },
  {
    id: 33,
    name: 'Mens Shampoo',
    image: hair3,
    category: 'Hair',
    new_price: 350,
    old_price: 500,
  },
  {
    id: 34,
    name: 'Hair Conditioner',
    image: hair4,
    category: 'Hair',
    new_price: 300,
    old_price: 400,
  },
  {
    id: 35,
    name: 'Hair Serum',
    image: hair5,
    category: 'Hair',
    new_price: 450,
    old_price: 500,
  },
  {
    id: 36,
    name: 'Hair Growth Oil',
    image: hair6,
    category: 'Hair',
    new_price: 700,
    old_price: 800,
  },
  {
    id: 37,
    name: 'Mens Styling Gel',
    image: hair7,
    category: 'Hair',
    new_price: 200,
    old_price: 300,
  },
  {
    id: 38,
    name: 'Hair Setting Spray',
    image: hair8,
    category: 'Hair',
    new_price: 700,
    old_price: 800,
  },
  {
    id: 39,
    name: 'Hair Cream',
    image: hair9,
    category: 'Hair',
    new_price: 350,
    old_price: 500,
  },
  {
    id: 40,
    name: 'Anti-dandruff Oil',
    image: hair10,
    category: 'Hair',
    new_price: 300,
    old_price: 400,
  },
  {
    id: 41,
    name: 'Linterdit',
    image: frag1,
    category: 'Fragrance',
    new_price: 300,
    old_price: 400,
  },
  {
    id: 42,
    name: 'Mon Paris',
    image: frag2,
    category: 'Fragrance',
    new_price: 400,
    old_price: 500,
  },
  {
    id: 43,
    name: 'Sauvage',
    image: frag3,
    category: 'Fragrance',
    new_price: 350,
    old_price: 400,
  },
  {
    id: 44,
    name: 'Mojave Ghost',
    image: frag4,
    category: 'Fragrance',
    new_price: 300,
    old_price: 350,
  },
  {
    id: 45,
    name: 'Jadore',
    image: frag5,
    category: 'Fragrance',
    new_price: 300,
    old_price: 400,
  },
  {
    id: 46,
    name: 'Denver',
    image: frag6,
    category: 'Fragrance',
    new_price: 200,
    old_price: 300,
  },
  {
    id: 47,
    name: 'Gucci',
    image: frag7,
    category: 'Fragrance',
    new_price: 300,
    old_price: 400,
  },
  {
    id: 48,
    name: 'Villain',
    image: frag8,
    category: 'Fragrance',
    new_price: 250,
    old_price: 300,
  },
  {
    id: 49,
    name: 'De-Blue',
    image: frag9,
    category: 'Fragrance',
    new_price: 350,
    old_price: 400,
  },
  {
    id: 50,
    name: 'French Essenc3',
    image: frag10,
    category: 'Fragrance',
    new_price: 500,
    old_price: 550,
  },
  {
    id: 51,
    name: 'Buy any makeup product @50% Off',
    image: off1,
    category: 'Offers',
    new_price: 750,
    old_price: 1500,
  },
  {
    id: 52,
    name: 'Branded products @20% Off',
    image: off2,
    category: 'Offers',
    new_price: 800,
    old_price: 1000,
  },
  {
    id: 53,
    name: 'Limited time offers on Skin care @30% Off',
    image: off3,
    category: 'Offers',
    new_price: 700,
    old_price: 1000,
  },
  {
    id: 54,
    name: 'Pick any skin products in Combo Offer',
    image: off4,
    category: 'Offers',
    new_price: 1550,
    old_price: 4000,
  },
  {
    id: 55,
    name: 'Body lotion@ Combo',
    image: off5,
    category: 'Offers',
    new_price: 700,
    old_price: 900,
  },
  {
    id: 56,
    name: 'Body wash@20% off',
    image: off6,
    category: 'Offers',
    new_price: 800,
    old_price: 1000,
  },
  {
    id: 57,
    name: 'Hair care products@30% Off',
    image: off7,
    category: 'Offers',
    new_price: 630,
    old_price: 900,
  },
  {
    id: 58,
    name: 'Buy 3 Hair care products @50% Off',
    image: off8,
    category: 'Offers',
    new_price: 570,
    old_price: 1140,
  },
  {
    id: 59,
    name: 'Branded perfumes @15% Off',
    image: off9,
    category: 'Offers',
    new_price: 350,
    old_price: 500,
  },
  {
    id: 60,
    name: 'Buy 3 perfumes @600',
    image: off10,
    category: 'Offers',
    new_price: 600,
    old_price: 1000,
  },
];

export default all_products;