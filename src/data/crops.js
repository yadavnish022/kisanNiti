export const CROPS = [
  //  Cereals
  { id: 1, name: "Paddy (धान / चावल)", api: "Paddy" },
  { id: 2, name: "Wheat (गेहूं)", api: "Wheat" },
  { id: 3, name: "Maize (मक्का)", api: "Maize" },
  { id: 4, name: "Bajra (बाजरा)", api: "Bajra" },
  { id: 5, name: "Jowar (ज्वार)", api: "Jowar" },
  { id: 6, name: "Barley (जौ)", api: "Barley" },

  //  Pulses
  { id: 7, name: "Gram / Chana (चना)", api: "Gram" },
  { id: 8, name: "Arhar / Tur (अरहर)", api: "Arhar" },
  { id: 9, name: "Moong (मूंग)", api: "Moong" },
  { id: 10, name: "Urad (उड़द)", api: "Urad" },
  { id: 11, name: "Masur (मसूर)", api: "Masur" },
  { id: 12, name: "Peas (मटर)", api: "Peas" },

  //  Oilseeds
  { id: 13, name: "Mustard (सरसों)", api: "Mustard" },
  { id: 14, name: "Groundnut (मूंगफली)", api: "Groundnut" },
  { id: 15, name: "Soyabean (सोयाबीन)", api: "Soyabean" },
  { id: 16, name: "Sunflower (सूरजमुखी)", api: "Sunflower" },
  { id: 17, name: "Sesamum / Til (तिल)", api: "Sesamum" },
  { id: 18, name: "Castor Seed (अरंडी)", api: "Castor" },

  //  Vegetables
  { id: 19, name: "Tomato (टमाटर)", api: "Tomato" },
  { id: 20, name: "Onion (प्याज)", api: "Onion" },
  { id: 21, name: "Potato (आलू)", api: "Potato" },
  { id: 22, name: "Cauliflower (फूलगोभी)", api: "Cauliflower" },
  { id: 23, name: "Cabbage (पत्तागोभी)", api: "Cabbage" },
  { id: 24, name: "Brinjal (बैंगन)", api: "Brinjal" },
  { id: 25, name: "Okra / Bhindi (भिंडी)", api: "Okra" },
  { id: 26, name: "Garlic (लहसुन)", api: "Garlic" },
  { id: 27, name: "Ginger (अदरक)", api: "Ginger" },

  //  Commercial Crops
  { id: 28, name: "Sugarcane (गन्ना)", api: "Sugarcane" },
  { id: 29, name: "Cotton (कपास)", api: "Cotton" },
  { id: 30, name: "Jute (जूट)", api: "Jute" },
  { id: 31, name: "Tobacco (तंबाकू)", api: "Tobacco" },

  //  Spices
  { id: 32, name: "Cumin (जीरा)", api: "Cumin" },
  { id: 33, name: "Coriander (धनिया)", api: "Coriander" },
  { id: 34, name: "Turmeric (हल्दी)", api: "Turmeric" },
  { id: 35, name: "Black Pepper (काली मिर्च)", api: "BlackPepper" },

  //  Fruits
  { id: 36, name: "Apple (सेब)", api: "Apple" },
  { id: 37, name: "Banana (केला)", api: "Banana" },
  { id: 38, name: "Mango (आम)", api: "Mango" },
  { id: 39, name: "Orange (संतरा)", api: "Orange" },
  { id: 40, name: "Grapes (अंगूर)", api: "Grapes" },
  { id: 41, name: "Pomegranate (अनार)", api: "Pomegranate" },
  { id: 42, name: "Papaya (पपीता)", api: "Papaya" },
  { id: 43, name: "Guava (अमरूद)", api: "Guava" },
  { id: 44, name: "Watermelon (तरबूज)", api: "Watermelon" },
  { id: 45, name: "Lemon (नींबू)", api: "Lemon" },
  { id: 46, name: "Pineapple (अनानास)", api: "Pineapple" },
  { id: 47, name: "Coconut (नारियल)", api: "Coconut" },
  { id: 48, name: "Jackfruit (कटहल)", api: "Jackfruit" },
  { id: 49, name: "Sapota (चीकू)", api: "Sapota" },
  { id: 50, name: "Muskmelon (खरबूजा)", api: "Muskmelon" },
  { id: 51, name: "Pear (नाशपाती)", api: "Pear" },
  { id: 52, name: "Plum (आलू बुखारा)", api: "Plum" },
  { id: 53, name: "Peach (आड़ू)", api: "Peach" },
  { id: 54, name: "Litchi (लीची)", api: "Litchi" },
  { id: 55, name: "Custard Apple (शरीफा)", api: "CustardApple" },

  //  More Vegetables & Greens
  { id: 56, name: "Spinach (पालक)", api: "Spinach" },
  { id: 57, name: "Bitter Gourd (करेला)", api: "BitterGourd" },
  { id: 58, name: "Bottle Gourd (लौकी)", api: "BottleGourd" },
  { id: 59, name: "Ridge Gourd (तोरई)", api: "RidgeGourd" },
  { id: 60, name: "Radish (मूली)", api: "Radish" },
  { id: 61, name: "Carrot (गाजर)", api: "Carrot" },
  { id: 62, name: "Beetroot (चुकंदर)", api: "Beetroot" },
  { id: 63, name: "Capsicum (शिमला मिर्च)", api: "Capsicum" },
  { id: 64, name: "Broccoli (ब्रोकोली)", api: "Broccoli" },
  { id: 65, name: "Mushroom (मशरूम)", api: "Mushroom" },
  { id: 66, name: "Sweet Potato (शकरकंद)", api: "SweetPotato" },
  { id: 67, name: "Ash Gourd (पेठा)", api: "AshGourd" },
  { id: 68, name: "Pumpkin (कद्दू)", api: "Pumpkin" },
  { id: 69, name: "Drumstick (सहजन)", api: "Drumstick" },
  { id: 70, name: "Colocasia (अरबी)", api: "Colocasia" },
  { id: 71, name: "Cucumber (खीरा)", api: "Cucumber" },
  { id: 72, name: "Fenugreek Leaves (मेथी पत्ता)", api: "FenugreekLeaves" },
  { id: 73, name: "Coriander Leaves (धनिया पत्ता)", api: "CorianderLeaves" },
  { id: 74, name: "Cluster Beans (गवार फली)", api: "ClusterBeans" },
  { id: 75, name: "French Beans (फ्रांसीसी बीन्स)", api: "FrenchBeans" },

  //  Dry Fruits & Nuts
  { id: 76, name: "Almond (बादाम)", api: "Almond" },
  { id: 77, name: "Walnut (अखरोट)", api: "Walnut" },
  { id: 78, name: "Cashew (काजू)", api: "Cashew" },
  { id: 79, name: "Pistachio (पिस्ता)", api: "Pistachio" },
  { id: 80, name: "Arecanut (सुपारी)", api: "Arecanut" },

  //  Plantation & Beverage
  { id: 81, name: "Coffee (कॉफी)", api: "Coffee" },
  { id: 82, name: "Tea (चाय)", api: "Tea" },
  { id: 83, name: "Rubber (रबर)", api: "Rubber" },
  { id: 84, name: "Cocoa (कोको)", api: "Cocoa" },

  //  Spices & Condiments (Extended)
  { id: 85, name: "Cardamom (इलायची)", api: "Cardamom" },
  { id: 86, name: "Clove (लौंग)", api: "Clove" },
  { id: 87, name: "Cinnamon (दालचीनी)", api: "Cinnamon" },
  { id: 88, name: "Fennel (सौंफ)", api: "Fennel" },
  { id: 89, name: "Fenugreek Seed (मेथी दाना)", api: "FenugreekSeed" },
  { id: 90, name: "Asafoetida (हींग)", api: "Asafoetida" },
  { id: 91, name: "Bay Leaf (तेजपत्ता)", api: "BayLeaf" },
  { id: 92, name: "Star Anise (चक्र फूल)", api: "StarAnise" },
  { id: 93, name: "Nutmeg (जायफल)", api: "Nutmeg" },
  { id: 94, name: "Ajwain (अजवायन)", api: "Ajwain" },
  { id: 95, name: "Tamarind (इमली)", api: "Tamarind" },

  //  Medicinal & Aromatic
  { id: 96, name: "Aloe Vera (एलोवेरा)", api: "AloeVera" },
  { id: 97, name: "Ashwagandha (अश्वगंधा)", api: "Ashwagandha" },
  { id: 98, name: "Mentha / Peppermint (पुदीना)", api: "Mentha" },
  { id: 99, name: "Tulsi (तुलसी)", api: "Tulsi" },
  { id: 100, name: "Stevia (स्टीविया)", api: "Stevia" },
  { id: 101, name: "Lemongrass (लेमनग्रास)", api: "Lemongrass" },
  { id: 102, name: "Sandalwood (चंदन)", api: "Sandalwood" },
  { id: 103, name: "Opium (अफीम)", api: "Opium" },

  //  Other Grains & Millets
  { id: 104, name: "Sorghum (सफेद ज्वार)", api: "Sorghum" },
  { id: 105, name: "Finger Millet (रागी)", api: "Ragi" },
  { id: 106, name: "Foxtail Millet (कंगनी)", api: "FoxtailMillet" },
  { id: 107, name: "Kodo Millet (कोदो)", api: "KodoMillet" },
  { id: 108, name: "Buckwheat (कुट्टू)", api: "Buckwheat" },
  { id: 109, name: "Quinoa (क्विनोआ)", api: "Quinoa" },

  //  Flowers (Floriculture)
  { id: 110, name: "Rose (गुलाब)", api: "Rose" },
  { id: 111, name: "Marigold (गेंदा)", api: "Marigold" },
  { id: 112, name: "Jasmine (चमेली)", api: "Jasmine" },
  { id: 113, name: "Lotus (कमल)", api: "Lotus" },
  { id: 114, name: "Sunflower (Oil-Seed)", api: "SunflowerSeed" },

  //  Forestry & Others
  { id: 115, name: "Bamboo (बांस)", api: "Bamboo" },
  { id: 116, name: "Honey (शहद)", api: "Honey" },
  { id: 117, name: "Betel Leaves (पान का पत्ता)", api: "BetelLeaf" },
  { id: 118, name: "Saffron (केसर)", api: "Saffron" },
  { id: 119, name: "Makhana (मखाना)", api: "Makhana" },
  { id: 120, name: "Poppy Seed (खसखस)", api: "PoppySeed" },

  //  Exotic/Modern Crops
  { id: 121, name: "Dragon Fruit (ड्रैगन फ्रूट)", api: "DragonFruit" },
  { id: 122, name: "Kiwi (कीवी)", api: "Kiwi" },
  { id: 123, name: "Avocado (एवोकाडो)", api: "Avocado" },
  { id: 124, name: "Cherry (चेरी)", api: "Cherry" },
  { id: 125, name: "Strawberry (स्ट्रॉबेरी)", api: "Strawberry" },
  { id: 126, name: "Mulberry (शहतूत)", api: "Mulberry" },
  { id: 127, name: "Water Spinach (कलमी साग)", api: "WaterSpinach" },
  { id: 128, name: "Snake Gourd (चिचिंडा)", api: "SnakeGourd" },
  { id: 129, name: "Pointed Gourd (परवल)", api: "PointedGourd" },
  { id: 130, name: "Ivy Gourd (कुंदरू)", api: "IvyGourd" },
  { id: 131, name: "Cowpea (लोबिया)", api: "Cowpea" },
  { id: 132, name: "Broad Bean (बाकला)", api: "BroadBean" },
  { id: 133, name: "Soya Chunk (सोया बड़ी)", api: "SoyaChunk" },
  { id: 134, name: "Tapioca (कसावा)", api: "Tapioca" },
  { id: 135, name: "Yam (जिमीकंद)", api: "Yam" }
  
];
