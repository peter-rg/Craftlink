import { IProductInput, Data, IUserInput, IWebPageInput } from '../types'
import { toSlug } from './utils'
import bcrypt from 'bcryptjs'
const users: IUserInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: 'John Doe',
      street: '111 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jane Harris',
      street: '222 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1002',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jack Ryan',
      street: '333 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1003',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sarah Smith',
      street: '444 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1005',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'John Alexander',
      street: '555 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1006',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Emily Johnson',
      street: '666 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Alice Cooper',
      street: '777 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10007',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Tom Hanks',
      street: '888 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10008',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Linda',
    email: 'linda@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Linda Holmes',
      street: '999 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10009',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'George',
    email: 'george@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'George Smith',
      street: '101 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10010',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jessica',
    email: 'jessica@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jessica Brown',
      street: '102 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10011',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Chris',
    email: 'chris@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Chris Evans',
      street: '103 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10012',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Samantha',
    email: 'samantha@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Samantha Wilson',
      street: '104 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10013',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'David',
    email: 'david@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'David Lee',
      street: '105 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10014',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Anna',
    email: 'anna@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Anna Smith',
      street: '106 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10015',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
]

const products: IProductInput[] = [
  //Tshirt
  {
    name: 'Hanes Mens Long Sleeve Beefy Henley Shirt',
    slug: toSlug('Hanes Mens Long Sleeve Beefy Henley Shirt'),
    category: 'T-Shirts',
    brand: 'Jerzees',
    images: ['/images/p16-1.jpg', '/images/p16-2.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 25.3,
    listPrice: 32.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 16,
    numSales: 56,
    description:
      'Heavyweight cotton (Heathers are 60% cotton/40% polyester; Pebblestone is 75% cotton/25% polyester)',
    sizes: ['XL', 'XXL'],
    colors: ['Grey', 'White'],

    reviews: [],
  },
  // Jeans
  {
    name: 'Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans',
    slug: toSlug('Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans'),
    category: 'Jeans',
    brand: 'Silver Jeans Co',
    images: ['/images/p21-1.jpg', '/images/p21-2.jpg'],
    tags: ['new-arrival', "featured"],
    isPublished: true,
    price: 95.34,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 54,
    numSales: 21,
    description:
      'Silver Jeans Co. Jace Slim Fit Bootcut Jeans - Consider Jace a modern cowboy jean. It sits below the waist and features a slim fit through the hip and thigh. Finished with an 18” bootcut leg opening that complements the slimmer silhouette while still fitting over boots',
    sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    colors: ['Blue', 'Grey'],

    reviews: [],
  },
  // Watches
  {
    name: "Seiko Men's Analogue Watch with Black Dial",
    slug: toSlug("Seiko Men's Analogue Watch with Black Dial"),
    category: 'Wrist Watches',
    brand: 'Seiko',
    images: ['/images/p31-1.jpg', '/images/p31-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 530.0,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 31,
    numSales: 48,
    description:
      'Casing: Case made of stainless steel Case shape: round Case colour: silver Glass: Hardlex Clasp type: Fold over clasp with safety',
    sizes: [],
    colors: [],

    reviews: [],
  },
  // Sneakers
  {
    name: 'adidas Mens Grand Court 2.0 Training Shoes Training Shoes',
    slug: toSlug(
      'adidas Mens Grand Court 2.0 Training Shoes Training Shoes'
    ),
    category: 'Shoes',
    brand: 'adidas',
    images: ['/images/p41-1.jpg', '/images/p41-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 81.99,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 41,
    numSales: 48,
    description:
      'Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh',
    sizes: ['8', '9', '10'],
    colors: ['White', 'Black', 'Grey'],

    reviews: [],
  },
  // Jewlry
  {
    "name": "Handmade Silver Leaf Necklace and Earings",
    "slug": "handmade-silver-leaf-necklace",
    "category": "Jewelry & Accessories",
    "brand": "Artisan Jewelry Co.",
    "images": ["/img/leaf2.webp", "/img/leaf3.webp", "/img/leaf31.webp"],
    "tags": ["new-arrival", "featured"],
    "isPublished": true,
    "price": 1500,
    "listPrice": 1800,
    "avgRating": 4.8,
    "numReviews": 12,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 1 },
      { "rating": 3, "count": 1 },
      { "rating": 4, "count": 4 },
      { "rating": 5, "count": 6 }
    ],
    "countInStock": 20,
    "numSales": 15,
    "description": "A beautifully handcrafted silver leaf necklace with intricate detailing, perfect for everyday wear.",
    "sizes": ["One Size"],
    "colors": ["Silver", "Gold"],
    "reviews": []
  },
  {
    "name": "Elvish Leaf Pendant 925 Silver Necklace | Botanical Inspiration Jewelry | Handcrafted Nature Charm",
    "slug": toSlug("Elvish Leaf Pendant 925 Silver Necklace | Botanical Inspiration Jewelry | Handcrafted Nature Charm"),
    "category": "Jewelry & Accessories",
    "brand": "Artisan Jewelry Co.",
    "images": ["/img/elvis.webp", "/img/elvis2.webp", "/img/elvis3.avif" ],
    "tags": ["new-arrival"],
    "isPublished": true,
    "price": 1500,
    "listPrice": 1800,
    "avgRating": 4.8,
    "numReviews": 12,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 1 },
      { "rating": 3, "count": 1 },
      { "rating": 4, "count": 4 },
      { "rating": 5, "count": 6 }
    ],
    "countInStock": 20,
    "numSales": 15,
    "description": "Meticulously designed with intricate leaf veins and an elegant, organic silhouette, the pendant features a delicate silver wire frame that adds depth and dimension to the piece",
    "sizes": ["16inch", "17-30inch"],
    "colors": ["Silver", "Gold"],
    "reviews": [
      // {
      // 5: "Absolutely stunning piece! I bought it for myself as a sobriety reward and reminder. The shop was fantastic in helping with my inscription. I’ll be wearing this every day!! "
      // }
    ]
  },
  {
    "name": "Beaded Boho Bracelet Set",
    "slug": "beaded-boho-bracelet-set",
    "category": "Jewelry & Accessories",
    "brand": "Handmade Treasures",
    "images": ["/img/boho.avif", "/img/boho2.avif",],
    "tags": ["best-seller"],
    "isPublished": true,
    "price": 1200,
    "listPrice": 1500,
    "avgRating": 4.5,
    "numReviews": 8,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 3 }
    ],
    "countInStock": 30,
    "numSales": 22,
    "description": "A set of colorful, beaded boho bracelets perfect for stacking and styling.",
    "sizes": ["Adjustable"],
    "colors": ["Multicolor"],
    "reviews": []
  },
  {
    "name": "Coconut Beach Bracelet",
    "slug": toSlug("Coconut Beach Bracelet"),
    "category": "Jewelry & Accessories",
    "brand": "Handmade Treasures",
    "images": ["/img/beach.webp", "/img/beach1.webp", "/img/beach2.avif"],
    "tags": ["best-seller"],
    "isPublished": true,
    "price": 800,
    "listPrice": 1200,
    "avgRating": 4.5,
    "numReviews": 8,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 3 }
    ],
    "countInStock": 30,
    "numSales": 22,
    "description": "Green Black Set of bracelets of three bracelets. It's have elastic bands.",
    "sizes": ["6.5inches","7.0 inches","7.5 inches", "8-8.5 inhes"],
    "colors": ["Brown", "Beige", "White"],
    "reviews": []
  },
  {
    "name": "Bracelets Man Set Malachite Coconut ",
    "slug": toSlug("Bracelets Man Set Malachite Coconut"),
    "category": "Jewelry & Accessories",
    "brand": "Handmade Treasures",
    "images": ["/img/malachite.webp", "/img/malachite2.avif",],
    "tags": ["featured","best-seller"],
    "isPublished": true,
    "price": 1200,
    "listPrice": 1500,
    "avgRating": 4.5,
    "numReviews": 8,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 3 }
    ],
    "countInStock": 30,
    "numSales": 22,
    "description": "Green Black Set of bracelets of three bracelets. It's have elastic bands.",
    "sizes": ["20cm-7.8inches", "18cm-7inches"],
    "colors": ["Multicolor"],
    "reviews": []
  },
  {
    "name": "Mens Gemstone Bead And Leather Bracelet Set",
    "slug": toSlug("Mens Gemstone Bead And Leather Bracelet Set"),
    "category": "Jewelry & Accessories",
    "brand": "Handmade Treasures",
    "images": ["/img/mens1.webp", "/img/mens2.webp",],
    "tags": ["best-seller"],
    "isPublished": true,
    "price": 1200,
    "listPrice": 1500,
    "avgRating": 4.5,
    "numReviews": 8,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 3 }
    ],
    "countInStock": 30,
    "numSales": 22,
    "description": "Unique design layered bracelet made of double leather layers and African Turquoise Jasper gemstones with stainless steel and coconut beads. The three strands are kept together with an aesthetic stainless steel D-Ring Anchor Shackle Clasp",
    "sizes": ["Adjustable"],
    "colors": ["Multicolor"],
    "reviews": [
    //   {5: "Item was as described thx"},
    // {5 : "Great piece of jewellery. Communication and costumer service was great"}
    ]
  },
  {
    "name": "Fashion And Style Van Cleef Earrings",
    "slug": toSlug("Fashion And Style Van Cleef Earrings"),
    "category": "Jewelry & Accessories",
    "brand": "Earings",
    "images": ["/img/7.jpg","/img/71.jpg", "/img/72.jpg",],
    "tags": ["best-seller"],
    "isPublished": true,
    "price": 600,
    "listPrice": 900,
    "avgRating": 4.5,
    "numReviews": 8,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 3 }
    ],
    "countInStock": 30,
    "numSales": 22,
    "description": "Fashion Small Hoop Earrings Set For Women Girls Butterfly",
    "sizes": ["OneSize"],
    "colors": ["Red", "Black", "Gold"],
    "reviews": []
  },
  // Accesories
  {
    "name": "Leather Wrap Belt",
    "slug": "leather-wrap-belt",
    "category": "Jewelry & Accessories",
    "brand": "Rustic Creations",
    "images": ["/img/belt.webp", "/img/belt1.webp","/img/belt11.webp"],
    "tags": ["eco-friendly"],
    "isPublished": true,
    "price": 2500,
    "listPrice": 3000,
    "avgRating": 4.7,
    "numReviews": 10,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 5 }
    ],
    "countInStock": 15,
    "numSales": 12,
    "description": "A handmade genuine leather wrap belt that complements any outfit with an artisan touch.",
    "sizes": ["S", "M", "L"],
    "colors": ["Brown", "Black", "Blue"],
    "reviews": []
  },
  {
    "name": "Leather Wrap Obi belt brown Women's Waist wrap belt",
    "slug": toSlug("Leather Wrap Obi belt brown Women's Waist wrap belt"),
    "category": "Jewelry & Accessories",
    "brand": "Rustic Creations",
    "images": ["/img/belt2.webp", "/img/belt21.jpg","/img/belt23.jpg"],
    "tags": ["eco-friendly"],
    "isPublished": true,
    "price": 3500,
    "listPrice": 4000,
    "avgRating": 4.7,
    "numReviews": 10,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 5 }
    ],
    "countInStock": 15,
    "numSales": 12,
    "description": "Made of premium quality leather. 100% handmade. Unique and simple design. Quality craftsmanship.The material is soft and comfortable to wear. Pure leather, with natural shadings and scars.",
    "sizes": ["S", "M", "L", "XS"],
    "colors": ["Brown", "Black", "Blue"],
    "reviews": []
  },
  {
    "name": "Handcrafted 70s Sturdy Leather Saddle Bag",
    "slug": toSlug("Handcrafted 70s Sturdy Leather Saddle Bag"),
    "category": "Jewelry & Accessories",
    "brand": "Classic Leatherworks",
    "images": ["/img/sturdy1.jpg"],
    "tags": ["handmade"],
    "isPublished": true,
    "price": 3000,
    "listPrice": 3900,
    "avgRating": 4.9,
    "numReviews": 15,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 1 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 11 }
    ],
    "countInStock": 10,
    "numSales": 18,
    "description": "It is crafted from robust antique brown leather, skillfully stitched with durable leather lacing. The secure flap closure, adorned with a leather loop and wooden bead fastener, ensures your belongings remain safe. ",
    "sizes": ["One Size"],
    "colors": ["Brown"],
    "reviews": [
      // {5: "Bought this for my husband for Christmas and he loves it. Uses it every day for work. "},
      // {4: "It looks great! Can't wait to give it a a gift! "},
      // {4: "I really like this bag! It's very comfortable and stylish."}
    ]
  },
  {
    "name": "Vintage Leather Satchel",
    "slug": "vintage-leather-satchel",
    "category": "Jewelry & Accessories",
    "brand": "Classic Leatherworks",
    "images": ["/img/satchel.webp",],
    "tags": ["handmade"],
    "isPublished": true,
    "price": 5000,
    "listPrice": 6000,
    "avgRating": 4.9,
    "numReviews": 15,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 1 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 11 }
    ],
    "countInStock": 10,
    "numSales": 18,
    "description": "This Sitchic beautiful hand-made Leather Messenger Bag is made with genuine leather.",
    "sizes": ["One Size"],
    "colors": ["Brown"],
    "reviews": [
      // {5: "Bought this for my husband for Christmas and he loves it. Uses it every day for work. "},
      // {4: "It looks great! Can't wait to give it a a gift! "},
      // {4: "I really like this bag! It's very comfortable and stylish."}
    ]
  },
  {
    "name": " Lovely Vintage Leather Satchel",
    "slug": toSlug(" Lovely Vintage Leather Satchel "),
    "category": "Jewelry & Accessories",
    "brand": "Classic Leatherworks",
    "images": ["/img/vintage1.avif", "/img/vintage.avif"],
    "tags": ["handmade"],
    "isPublished": true,
    "price": 35000,
    "listPrice": 42000,
    "avgRating": 4.9,
    "numReviews": 15,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 1 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 11 }
    ],
    "countInStock": 10,
    "numSales": 18,
    "description": "You are viewing a lovely vintage 100% leather satchel. It measures approximately 16 inches x 11 inches. The handle does have some damage to the leather which can be seen in the photos. Other than the handle it is in overall nice condition. Please view my other items. ",
    "sizes": ["One Size"],
    "colors": ["Brown"],
    "reviews": [
      // {5: "Bought this for my husband for Christmas and he loves it. Uses it every day for work. "},
      // {4: "It looks great! Can't wait to give it a a gift! "},
      // {4: "I really like this bag! It's very comfortable and stylish."}
    ]
  },
  {
    "name": "Handwoven Scarf",
    "slug": "handwoven-scarf",
    "category": "Jewelry & Accessories",
    "brand": "Artisan Weaves",
    "images": ["/img/scarf2.webp", "/img/scarf22.webp", "/img/scarf23.webp"],
    "tags": ["organic"],
    "isPublished": true,
    "price": 2000,
    "listPrice": 2500,
    "avgRating": 4.6,
    "numReviews": 9,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 1 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 2 },
      { "rating": 5, "count": 4 }
    ],
    "countInStock": 25,
    "numSales": 14,
      "description": "A beautiful warm, light and lofty handwoven scarf in 100% lambswool.",
      "sizes": ["One Size"],
      "colors": ["Blue", "Grey"],
      "reviews": [
      // {5: 'Exquisite!!! Luxurious feel/hand. Beautiful drape. Love the colors. Immaculate handiwork.'},
      // {5: 'Absolutely beautiful scarf. Just as pictured.'}
      ]
  },
  {
    "name": "Cotton Blend Handwoven Scarf ",
    "slug": toSlug("Cotton Blend Handwoven Scarf "),
    "category": "Jewelry & Accessories",
    "brand": "Artisan Weaves",
    "images": ["/img/scarf.avif", "/img/scarf1.avif" ,"/img/scarf11.webp"],
    "tags": ["organic"],
    "isPublished": true,
    "price": 1500,
    "listPrice": 2500,
    "avgRating": 4.6,
    "numReviews": 9,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 1 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 2 },
      { "rating": 5, "count": 4 }
    ],
    "countInStock": 25,
    "numSales": 14,
    "description": " It features an interspersed butterfly stitch pattern throughout the length of the scarf. Weighing only 5 oz, this makes a perfect scarf to throw on to keep the early morning or late evening chill from your neck",
    "sizes": ["One Size"],
    "colors": ["Blue", "Grey"],
    "reviews": [
    // {5: 'Exquisite!!! Luxurious feel/hand. Beautiful drape. Love the colors. Immaculate handiwork.'},
    // {5: 'Absolutely beautiful scarf. Just as pictured.'}
    ]
  },
  {
    "name": "Vintage Messenger Bag Green Military Army Canvas Bag Soviet Unused USSR Cold War Collectible supply Leather Army Bag Crossbody Bag ohtteam ",
      "slug": toSlug("Vintage Messenger Bag Green Military Army Canvas Bag Soviet Unused USSR Cold War Collectible supply Leather Army Bag Crossbody Bag ohtteam "),
      "category": "Jewelry & Accessories",
      "brand": "Classic Leatherworks",
      "images": ["/img/mess.webp", "/img/mess1.webp"],
      "tags": ["handmade"],
      "isPublished": true,
      "price": 1500,
      "listPrice": 1700,
      "avgRating": 4.9,
      "numReviews": 15,
      "ratingDistribution": [
        { "rating": 1, "count": 0 },
        { "rating": 2, "count": 0 },
        { "rating": 3, "count": 1 },
        { "rating": 4, "count": 3 },
        { "rating": 5, "count": 11 }
      ],
      "countInStock": 10,
      "numSales": 18,
      "description": "This Sitchic beautiful hand-made Leather Messenger Bag is made with genuine leather.",
      "sizes": ["One Size"],
      "colors": ["Brown"],
      "reviews": [
        // {5: "Bought this for my husband for Christmas and he loves it. Uses it every day for work. "},{4: "It looks great! Can't wait to give it a a gift! "},{4: "I really like this bag! It's very comfortable and stylish."}
      ]
  },  
  //Portery
  {
    "name": "Baby Weaning Feeding Bowl Hot Pot With Food Warmer Slot",
    "slug": toSlug("Baby Weaning Feeding Bowl Hot Pot With Food Warmer Slot"),
    "category": "Pottery & Ceramics",
    "brand": "Tea Time Ceramics",
    "images": ["/img/b1.jpg", "/img/b11.jpg", "/img/b12.jpg"],
    "tags": ["artisan-made"],
    "isPublished": true,
    "price": 1200,
    "listPrice": 1500,
    "avgRating": 4.7,
    "numReviews": 13,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 4 },
      { "rating": 5, "count": 7 }
    ],
    "countInStock": 50,
    "numSales": 30,
    "description": "A glazed ceramic Baby Feeding Dish Bowl with a Slot for warm water to warm the food. This is an amazing Time saving Baby Bowl that ensures the baby's food is always warm. This avoids the use of microwave which may not be a safe and electricity saving optiontea pot with an elegant design, perfect for brewing your favorite tea.",
    "sizes": ["Standard"],
    "colors": ["Pink", "Blue", "Green"],
    "reviews": []
  },
  {
    "name": "Imitation Plastic Balcony Square Pots Flower Bonsai Bowl Nursery Basin",
    "slug": toSlug("Imitation Plastic Balcony Square Pots Flower Bonsai Bowl Nursery Basin"),
    "category": "Pottery & Ceramics",
    "brand": "Tea Time Ceramics",
    "images": ["/img/b2.jpg"],
    "tags": ["artisan-made"],
    "isPublished": true,
    "price": 3290,
    "listPrice": 5672,
    "avgRating": 4.9,
    "numReviews": 15,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 4 },
      { "rating": 5, "count": 7 }
    ],
    "countInStock": 110,
    "numSales": 80,
    "description": "Features: Made of plastic material, the flowerpot is damp-proof and mold proof, broken-resistant and durable. Purple sand surface imitation design, vintage style, very suitable for Nordic-style home decoration. Durable and reusable for years. Great for starting seeds, cutting or raising transplants. Use them to grow healthy herbs at farmers markets, like tomatoes, roses, pepper, etc",
    "sizes": ["Square-S: 12*12*6cm / 4.7*4.7*2.4 inch ","Square-L: 17*17*8cm / 6.7*6.7*3.1 inch", "Rectangle-S: 12*16.5*6cm / 4.7*6.5*2.4 inch", "Rectangle-L: 17*23*8cm / 6.7*9.1*3.1 inch "],
    "colors": ["Pink", "Blue", "Green"],
    "reviews": []
  },
  // WoodCraft
  {
    "name": "Boho Chain Link Art Craft Wooden Hand Carved ",
    "slug": toSlug("Boho Chain Link Art Craft Wooden Hand Carved "),
    "category": "Woodcraft",
    "brand": "Timber Creations",
    "images": ["/img/w3.jpg", "/img/w31.jpg", "/img/w32.jpg"],
    "tags": ["eco-friendly"],
    "isPublished": true,
    "price": 2198,
    "listPrice": 2961,
    "avgRating": 3.5,
    "numReviews": 10,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 5 }
    ],
    "countInStock": 25,
    "numSales": 17,
    "description": "5-Link Chain Decor Ornament For Home Bedroom Rustic Table Farmhouse",
    "sizes": ["variant 17", "decorative18106"],
    "colors": ["Natural Wood"],
    "reviews": []
  },
  {
    "name": "Wooden Bird Ornaments Nordic Style Wood Hand Carving Bird Ar",
    "slug": toSlug("Wooden Bird Ornaments Nordic Style Wood Hand Carving Bird Ar"),
    "category": "Woodcraft",
    "brand": "Timber Creations",
    "images": ["/img/w5.jpg", "/img/w51.jpg", "/img/w52.jpg"],
    "tags": ["eco-friendly"],
    "isPublished": true,
    "price": 1350,
    "listPrice": 2200,
    "avgRating": 4.2,
    "numReviews": 9,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 0 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 3 },
      { "rating": 5, "count": 5 }
    ],
    "countInStock": 9,
    "numSales": 12,
    "description": `1. The wood-carved bird ornaments are carved from natural basswood and by master craftsmen. Features natural wood grain and hand-carved goodps.
    2. The bright colors on the body are hand-painted with environmentally friendly acrylic paint. It not only carefully matches the color but also retains the good wood texture, which is environmentally friendly and safe. Use:
    1. Small works of art can be displayed in , trays, coffee tables, dining tables, display racks, etc. for people to watch.
    2. The funny and cute shape is loved by children and can be given to them as a gift.Of course, it is not limited to children, it can be given to any friends who like wooden hand-carved ornament.
    Note:Due to hand-made engraving and coloring, there may be differences from the pictures. The actual product shall prevail and does not affect use.`,
    "sizes": ["8x4x4cm"],
    "colors": ["Multicolor"],
    "reviews": [
      // {5: "Beautiful work... brilliant and well crafted! "},
      // {5 : "Super nice bowl well made "}
    ]
  },
  {
    "name": "Animal Eyeglass Frame Animal-Shaped Hand-Carved Wooden Eyegl",
    "slug": toSlug("Animal Eyeglass Frame Animal-Shaped Hand-Carved Wooden Eyegl"),
    "category": "Woodcratf",
    "brand": "Eco woodworks",
    "images": ["/img/w1.jpg", "/img/w2.jpg"],
    "tags": ["eco-friendly"],
    "isPublished": true,
    "price": 1100,
    "listPrice": 1780,
    "avgRating": 4.3,
    "numReviews": 8,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 1 },
      { "rating": 3, "count": 3 },
      { "rating": 4, "count": 4 },
      { "rating": 5, "count": 6 }
    ],
    "countInStock": 48,
    "numSales": 20,
    "description": "Material and craftsmanship: 100% hand-carved and painted, natural solid wood is used, and exquisite woodcarving craftsmanship is used. The perfect organizer and protector: a new solution that keeps your glasses and sunglasses organized and prevents scratches or loss.Multi-purpose: The wooden bracket can not only store glasses and sunglasses, but also a novel decoration in the living room, bedroom or office.Great gift: This hand-carved wooden spectacle frame has a lovely and vivid 3D elk shape, suitable as a gift and collectible for your lover, friend, child, colleague, father, mother or yourself",

    "sizes": ["7 x 13CM", "7 x 17CM"],
    "colors": ["Multicolor"],
    "reviews": []
  },
  {
    "name": "Hand Carved Wood Serving Bowl",
    "slug": toSlug("Hand Carved Wood Serving Bowl"),
    "category": "Woodcraft",
    "brand": "Handcrafted bowl",
    "images": ["/img/w6.jpg", "/img/w61.jpg", "/img/w62.jpg"],
    "tags": ["handmade"],
    "isPublished": true,
    "price": 1800,
    "listPrice": 2200,
    "avgRating": 4.6,
    "numReviews": 9,
    "ratingDistribution": [
      { "rating": 1, "count": 0 },
      { "rating": 2, "count": 1 },
      { "rating": 3, "count": 2 },
      { "rating": 4, "count": 2 },
      { "rating": 5, "count": 4 }
    ],
    "countInStock": 25,
    "numSales": 14,
    "description": "Hand Carved Wood Serving Bowl For Fruits Or Salad Natural Solid Wavy Rim Wooden Bowl",
    "sizes": ["5x7", "8x10"],
    "colors": ["Brown", "Dark Oak"],
    "reviews": []
  },
]
const reviews = [
  {
    rating: 1,
    title: 'Poor quality',
    comment:
      'Very disappointed. The item broke after just a few uses. Not worth the money.',
  },
  {
    rating: 2,
    title: 'Disappointed',
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: 'Needs improvement',
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: 'not bad',
    comment:
      'This product is decent, the quality is good but it could use some improvements in the details.',
  },
  {
    rating: 3,
    title: 'Okay, not great',
    comment:
      'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
  },
  {
    rating: 3,
    title: 'Good product',
    comment:
      'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
  },
  {
    rating: 4,
    title: 'Pretty good',
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: 'Very satisfied',
    comment:
      'Good product! High quality and worth the price. Would consider buying again.',
  },
  {
    rating: 4,
    title: 'Absolutely love it!',
    comment:
      'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
  },
  {
    rating: 4,
    title: 'Exceeded expectations!',
    comment:
      'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
  },
  {
    rating: 5,
    title: 'Perfect purchase!',
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: 'Highly recommend',
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: 'Just what I needed',
    comment:
      'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
  },
  {
    rating: 5,
    title: 'Excellent choice!',
    comment:
      'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
  },
]
const webPages: IWebPageInput[] = [
  {
    title: 'About Us',
    slug: 'about-us',
    content: `Welcome to [Your Store Name], your trusted destination for quality products and exceptional service. Our journey began with a mission to bring you the best shopping experience by offering a wide range of products at competitive prices, all in one convenient platform.

At [Your Store Name], we prioritize customer satisfaction and innovation. Our team works tirelessly to curate a diverse selection of items, from everyday essentials to exclusive deals, ensuring there's something for everyone. We also strive to make your shopping experience seamless with fast shipping, secure payments, and excellent customer support.

As we continue to grow, our commitment to quality and service remains unwavering. Thank you for choosing [Your Store Name]—we look forward to being a part of your journey and delivering value every step of the way.`,
    isPublished: true,
  },
  {
    title: 'Contact Us',
    slug: 'contact-us',
    content: `We’re here to help! If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. Our team is ready to assist you and ensure you have the best shopping experience.

**Customer Support**
For inquiries about orders, products, or account-related issues, contact our customer support team:
- **Email:** support@example.com
- **Phone:** +1 (123) 456-7890
- **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).

**Head Office**
For corporate or business-related inquiries, reach out to our headquarters:
- **Address:** 1234 E-Commerce St, Suite 567, Business City, BC 12345
- **Phone:** +1 (987) 654-3210

We look forward to assisting you! Your satisfaction is our priority.
`,
    isPublished: true,
  },
  {
    title: 'Help',
    slug: 'help',
    content: `Welcome to our Help Center! We're here to assist you with any questions or concerns you may have while shopping with us. Whether you need help with orders, account management, or product inquiries, this page provides all the information you need to navigate our platform with ease.

**Placing and Managing Orders**
Placing an order is simple and secure. Browse our product categories, add items to your cart, and proceed to checkout. Once your order is placed, you can track its status through your account under the "My Orders" section. If you need to modify or cancel your order, please contact us as soon as possible for assistance.

**Shipping and Returns**
We offer a variety of shipping options to suit your needs, including standard and express delivery. For detailed shipping costs and delivery timelines, visit our Shipping Policy page. If you're not satisfied with your purchase, our hassle-free return process allows you to initiate a return within the specified timeframe. Check our Returns Policy for more details.

**Account and Support**
Managing your account is easy. Log in to update your personal information, payment methods, and saved addresses. If you encounter any issues or need further assistance, our customer support team is available via email, live chat, or phone. Visit our Contact Us page for support hours and contact details.`,
    isPublished: true,
  },
  {
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    content: `We value your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and share your data when you interact with our services. By using our platform, you consent to the practices described herein.

We collect data such as your name, email address, and payment details to provide you with tailored services and improve your experience. This information may also be used for marketing purposes, but only with your consent. Additionally, we may share your data with trusted third-party providers to facilitate transactions or deliver products.

Your data is safeguarded through robust security measures to prevent unauthorized access. However, you have the right to access, correct, or delete your personal information at any time. For inquiries or concerns regarding your privacy, please contact our support team.`,
    isPublished: true,
  },
  {
    title: 'Conditions of Use',
    slug: 'conditions-of-use',
    content: `Welcome to [Ecommerce Website Name]. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our platform, including browsing, purchasing products, and interacting with any content or services provided. You must be at least 18 years old or have the consent of a parent or guardian to use this website. Any breach of these terms may result in the termination of your access to our platform.

We strive to ensure all product descriptions, pricing, and availability information on our website are accurate. However, errors may occur, and we reserve the right to correct them without prior notice. All purchases are subject to our return and refund policy. By using our site, you acknowledge that your personal information will be processed according to our privacy policy, ensuring your data is handled securely and responsibly. Please review these terms carefully before proceeding with any transactions.
`,
    isPublished: true,
  },
  {
    title: 'Customer Service',
    slug: 'customer-service',
    content: `At [Your Store Name], our customer service team is here to ensure you have the best shopping experience. Whether you need assistance with orders, product details, or returns, we are committed to providing prompt and helpful support.

If you have questions or concerns, please reach out to us through our multiple contact options:
- **Email:** support@example.com
- **Phone:** +1 (123) 456-7890
- **Live Chat:** Available on our website for instant assistance

We also provide helpful resources such as order tracking, product guides, and FAQs to assist you with common inquiries. Your satisfaction is our priority, and we’re here to resolve any issues quickly and efficiently. Thank you for choosing us!`,
    isPublished: true,
  },
  {
    title: 'Returns Policy',
    slug: 'returns-policy',
    content: 'Returns Policy Content',
    isPublished: true,
  },
  {
    title: 'Careers',
    slug: 'careers',
    content: 'careers Content',
    isPublished: true,
  },
  {
    title: 'Blog',
    slug: 'blog',
    content: 'Blog Content',
    isPublished: true,
  },
  {
    title: 'Sell Products',
    slug: 'sell',
    content: `Sell Products Content`,
    isPublished: true,
  },
  {
    title: 'Become Affiliate',
    slug: 'become-affiliate',
    content: 'Become Affiliate Content',
    isPublished: true,
  },
  {
    title: 'Advertise Your Products',
    slug: 'advertise',
    content: 'Advertise Your Products',
    isPublished: true,
  },
  {
    title: 'Shipping Rates & Policies',
    slug: 'shipping',
    content: 'Shipping Rates & Policies',
    isPublished: true,
  },
]
const data:Data = {
    headerMenus: [
      {
        name: "Today's Deal",
        href: '/search?tag=todays-deal',
      },
      {
        name: 'New Arrivals',
        href: '/search?tag=new-arrival',
      },
      {
        name: 'Featured Products',
        href: '/search?tag=featured',
      },
      {
        name: 'Best Sellers',
        href: '/search?tag=best-seller',
      },
      {
        name: 'Browsing History',
        href: '/#browsing-history',
      },
      {
        name: 'Customer Service',
        href: '/page/customer-service',
      },
      {
        name: 'About Us',
        href: '/page/about-us',
      },
      {
        name: 'Help',
        href: '/page/help',
      },
    ],
    carousels: [
      {
        title: 'Most Popular Shoes For Sale',
        buttonCaption: 'Shop Now',
        image: '/images/banner3.jpg',
        url: '/search?category=Shoes',
        isPublished: true,
      },
      {
        title: 'Best Sellers in T-Shirts',
        buttonCaption: 'Shop Now',
        image: '/images/banner1.jpg',
        url: '/search?category=T-Shirts',
        isPublished: true,
      },
      {
        title: 'Best Deals on Wrist Watches',
        buttonCaption: 'See More',
        image: '/images/banner2.jpg',
        url: '/search?category=Wrist Watches',
        isPublished: true,
      },
    ],
  products,
  users,
  reviews,
  webPages
}
  export default data