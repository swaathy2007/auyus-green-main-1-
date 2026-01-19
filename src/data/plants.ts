import aloeVeraImg from "@/assets/plants/aloe-vera.jpg";
import ashwagandhaImg from "@/assets/plants/ashwagandha.jpg";
import tulsiImg from "@/assets/plants/tulsi.jpg";
import neemImg from "@/assets/plants/neem.jpg";
import turmericImg from "@/assets/plants/turmeric.jpg";
import gingerImg from "@/assets/plants/ginger.jpg";
import garlicImg from "@/assets/plants/garlic.jpg";
import amlaImg from "@/assets/plants/amla.jpg";
import giloyImg from "@/assets/plants/giloy.jpg";
import shatavariImg from "@/assets/plants/shatavari.jpg";
import brahmiImg from "@/assets/plants/brahmi.jpg";
import peppermintImg from "@/assets/plants/peppermint.jpg";
import lemongrassImg from "@/assets/plants/lemongrass.jpg";
import cinnamonImg from "@/assets/plants/cinnamon.jpg";
import cardamomImg from "@/assets/plants/cardamom.jpg";
import cloveImg from "@/assets/plants/clove.jpg";
import blackPepperImg from "@/assets/plants/black-pepper.jpg";
import fenugreekImg from "@/assets/plants/fenugreek.jpg";
import arjunaImg from "@/assets/plants/arjuna.jpg";
import baelImg from "@/assets/plants/bael.jpg";
import manjisthaImg from "@/assets/plants/manjistha.jpg";
import haritakiImg from "@/assets/plants/haritaki.jpg";
import licoriceImg from "@/assets/plants/licorice.jpg";
import indianSarsaparillaImg from "@/assets/plants/indian-sarsaparilla.jpg";
import jatamansiImg from "@/assets/plants/jatamansi.jpg";
import kutkiImg from "@/assets/plants/kutki.jpg";

export interface PlantVideo {
  id: string;
  title: string;
  type: "overview" | "medicinal" | "cultivation" | "preparation" | "cultural";
  url: string;
}

export interface Plant {
  id: string;
  commonName: string;
  botanicalName: string;
  family: string;
  habitat: string;
  description: string;
  medicinalUses: string[];
  partsUsed: string[];
  cultivation: string;
  precautions: string[];
  ayushSystem: ("Ayurveda" | "Yoga" | "Unani" | "Siddha" | "Homeopathy")[];
  category: string[];
  bodySystem: string[];
  region: string[];
  image: string;
  video: string;
  videos: PlantVideo[];
  model3d?: string;
  audio?: string;
}

export const plants: Plant[] = [
  {
    id: "aloe-vera",
    commonName: "Aloe Vera",
    botanicalName: "Aloe barbadensis Miller",
    family: "Asphodelaceae",
    habitat: "Native to the Arabian Peninsula; widely cultivated in tropical and subtropical regions",
    description: "A perennial succulent with thick, fleshy, lance-shaped leaves arranged in a rosette. Leaves contain a clear mucilaginous gel known for its healing properties.",
    medicinalUses: [
      "Heals burns, wounds, and skin infections",
      "Anti-inflammatory properties",
      "Improves digestion and immunity",
      "Used in cosmetics and beverages",
      "Treats acne and skin conditions"
    ],
    partsUsed: ["Leaves", "Gel", "Latex"],
    cultivation: "Grows best in sandy, well-drained soil; requires full sunlight; minimal watering; propagated by offsets (pups).",
    precautions: [
      "Oral consumption may cause digestive issues in some",
      "Pregnant women should avoid internal use",
      "May interact with diabetes medications"
    ],
    ayushSystem: ["Ayurveda", "Unani"],
    category: ["Skin Care", "Digestive Health", "Immunity Booster", "Anti-inflammatory"],
    bodySystem: ["Immune", "Integumentary"],
    region: ["Tropical", "Subtropical"],
    image: aloeVeraImg,
    video: "/videos/aloe-vera.mp4",
    videos: [],
    audio: "/audio/aloe-vera.wav"
  },
  {
    id: "ashwagandha",
    commonName: "Ashwagandha",
    botanicalName: "Withania somnifera",
    family: "Solanaceae",
    habitat: "Dry regions of India, Middle East, and Africa",
    description: "A small woody shrub with oval leaves and orange-red berries. One of the most important herbs in Ayurveda, known as 'Indian Ginseng'.",
    medicinalUses: [
      "Adaptogen for stress and anxiety relief",
      "Boosts stamina and energy levels",
      "Enhances immunity and vitality",
      "Improves brain function and memory",
      "Supports reproductive health"
    ],
    partsUsed: ["Roots", "Leaves", "Berries"],
    cultivation: "Sandy loam soil; full sun exposure; moderate irrigation; grown from seeds.",
    precautions: [
      "Avoid during pregnancy",
      "May cause drowsiness in high doses",
      "May interact with thyroid medications"
    ],
    ayushSystem: ["Ayurveda", "Unani"],
    category: ["Stress Relief", "Immunity Booster"],
    bodySystem: ["Nervous", "Immune", "Musculoskeletal"],
    region: ["Arid", "Semi-arid"],
    image: ashwagandhaImg,
    video: "/videos/ashwagandha.mp4",
    videos: [],
    audio: "/audio/ashwagandha.wav"
  },
  {
    id: "tulsi",
    commonName: "Holy Basil / Tulsi",
    botanicalName: "Ocimum sanctum",
    family: "Lamiaceae",
    habitat: "Native to India; grows well in warm tropical climates",
    description: "An aromatic perennial shrub with green or purple leaves and small flowers. Considered sacred in Hinduism and widely used in Ayurveda.",
    medicinalUses: [
      "Treats respiratory disorders and cough",
      "Reduces fever and common cold symptoms",
      "Relieves stress and anxiety",
      "Enhances immunity",
      "Supports cardiovascular health"
    ],
    partsUsed: ["Leaves", "Seeds", "Roots"],
    cultivation: "Well-drained soil; full sunlight; regular watering; grown from seeds or cuttings.",
    precautions: [
      "May slow blood clotting",
      "Avoid before surgery",
      "May lower blood sugar levels"
    ],
    ayushSystem: ["Ayurveda", "Siddha"],
    category: ["Respiratory Health", "Immunity Booster", "Stress Relief"],
    bodySystem: ["Respiratory", "Immune"],
    region: ["Tropical"],
    image: tulsiImg,
    video: "/videos/tulsi.mp4",
    videos: [],
    audio: "/audio/tulsi.wav"
  },
  {
    id: "neem",
    commonName: "Neem",
    botanicalName: "Azadirachta indica",
    family: "Meliaceae",
    habitat: "Indian subcontinent and tropical regions worldwide",
    description: "A large evergreen tree with pinnate leaves and white fragrant flowers. Known as the 'Village Pharmacy' for its numerous medicinal applications.",
    medicinalUses: [
      "Antibacterial and antifungal properties",
      "Treats skin diseases and infections",
      "Supports dental and oral health",
      "Helps manage diabetes",
      "Natural insect repellent"
    ],
    partsUsed: ["Leaves", "Bark", "Seeds", "Oil"],
    cultivation: "Drought-resistant; grows in most soils; propagated by seeds.",
    precautions: [
      "Not safe for children internally",
      "Avoid during pregnancy",
      "May affect fertility if used long-term"
    ],
    ayushSystem: ["Ayurveda", "Unani", "Siddha"],
    category: ["Skin Care"],
    bodySystem: ["Immune", "Integumentary"],
    region: ["Tropical", "Subtropical"],
    image: neemImg,
    video: "/videos/neem.mp4",
    videos: [],
    audio: "/audio/neem.wav"
  },
  {
    id: "turmeric",
    commonName: "Turmeric",
    botanicalName: "Curcuma longa",
    family: "Zingiberaceae",
    habitat: "Tropical South Asia, particularly India",
    description: "A herbaceous perennial with underground rhizomes and broad leaves. The golden rhizome is one of the most powerful healing spices in Ayurveda.",
    medicinalUses: [
      "Powerful anti-inflammatory properties",
      "Rich in antioxidants",
      "Improves digestion and liver function",
      "Boosts immunity",
      "Promotes healthy skin"
    ],
    partsUsed: ["Rhizomes", "Leaves"],
    cultivation: "Fertile, moist soil; partial shade; grown from rhizomes.",
    precautions: [
      "High doses may cause digestive issues",
      "May interact with blood thinners",
      "Avoid during gallbladder problems"
    ],
    ayushSystem: ["Ayurveda", "Siddha", "Unani"],
    category: ["Anti-inflammatory", "Digestive Health", "Immunity Booster", "Skin Care"],
    bodySystem: ["Immune", "Integumentary"],
    region: ["Tropical"],
    image: turmericImg,
    video: "/videos/turmeric.mp4",
    videos: [],
    audio: "/audio/turmeric.wav"
  },
  {
    id: "ginger",
    commonName: "Ginger",
    botanicalName: "Zingiber officinale",
    family: "Zingiberaceae",
    habitat: "Tropical and subtropical regions",
    description: "Perennial herb with aromatic rhizomes and leafy stems. Widely used as a spice and medicine across cultures.",
    medicinalUses: [
      "Treats nausea and motion sickness",
      "Relieves cold and cough symptoms",
      "Digestive stimulant",
      "Anti-inflammatory properties",
      "Helps with muscle pain and soreness"
    ],
    partsUsed: ["Rhizomes"],
    cultivation: "Loamy soil; partial shade; rhizome propagation.",
    precautions: [
      "May cause heartburn in some",
      "Avoid excessive use during pregnancy",
      "May interact with blood thinners"
    ],
    ayushSystem: ["Ayurveda", "Unani", "Siddha"],
    category: ["Digestive Health", "Respiratory Health"],
    bodySystem: ["Respiratory", "Digestive"],
    region: ["Tropical", "Subtropical"],
    image: gingerImg,
    video: "/videos/ginger.mp4",
    videos: [],
    audio: "/audio/ginger.wav"
  },
  {
    id: "garlic",
    commonName: "Garlic",
    botanicalName: "Allium sativum",
    family: "Amaryllidaceae",
    habitat: "Temperate and tropical regions",
    description: "Bulbous plant with flat leaves and white flowers. One of the oldest cultivated plants used for culinary and medicinal purposes.",
    medicinalUses: [
      "Lowers blood pressure",
      "Reduces cholesterol levels",
      "Antimicrobial properties",
      "Boosts immune function",
      "Supports heart health"
    ],
    partsUsed: ["Bulbs", "Cloves"],
    cultivation: "Well-drained soil; full sun; grown from cloves.",
    precautions: [
      "May cause digestive upset",
      "Can interact with blood thinners",
      "Raw garlic may cause breath odor"
    ],
    ayushSystem: ["Ayurveda", "Unani"],
    category: ["Heart Health", "Immunity Booster"],
    bodySystem: ["Respiratory", "Digestive"],
    region: ["Temperate", "Tropical"],
    image: garlicImg,
    video: "/videos/garlic.mp4",
    videos: [],
    audio: "/audio/garlic.wav"
  },
  {
    id: "amla",
    commonName: "Amla / Indian Gooseberry",
    botanicalName: "Phyllanthus emblica",
    family: "Phyllanthaceae",
    habitat: "Tropical and subtropical India",
    description: "Medium-sized deciduous tree with greenish-yellow fruits. One of the richest natural sources of Vitamin C.",
    medicinalUses: [
      "Rich in Vitamin C",
      "Boosts immunity and digestion",
      "Promotes hair health and growth",
      "Improves skin complexion",
      "Supports liver function"
    ],
    partsUsed: ["Fruits", "Seeds", "Leaves", "Bark"],
    cultivation: "Loamy soil; full sun; propagated by seeds or grafting.",
    precautions: [
      "May lower blood sugar",
      "Can cause acidity in some",
      "Avoid during cold and cough"
    ],
    ayushSystem: ["Ayurveda", "Siddha"],
    category: ["Immunity Booster", "Skin Care", "Digestive Health"],
    bodySystem: ["Immune", "Integumentary"],
    region: ["Tropical", "Subtropical"],
    image: amlaImg,
    video: "/videos/amla.mp4",
    videos: [],
    audio: "/audio/amla.wav"
  },
  {
    id: "giloy",
    commonName: "Giloy",
    botanicalName: "Tinospora cordifolia",
    family: "Menispermaceae",
    habitat: "Tropical forests of India",
    description: "Climbing shrub with heart-shaped leaves and succulent stem. Known as 'Amrita' or the root of immortality in Ayurveda.",
    medicinalUses: [
      "Powerful immunity booster",
      "Antipyretic (reduces fever)",
      "Liver tonic",
      "Helps manage diabetes",
      "Reduces stress and anxiety"
    ],
    partsUsed: ["Stem", "Roots", "Leaves"],
    cultivation: "Grows on trees or trellis; stem cuttings used for propagation.",
    precautions: [
      "May lower blood sugar excessively",
      "Avoid during pregnancy",
      "May cause constipation in some"
    ],
    ayushSystem: ["Ayurveda", "Siddha"],
    category: ["Immunity Booster"],
    bodySystem: ["Immune"],
    region: ["Tropical"],
    image: giloyImg,
    video: "/videos/giloy.mp4",
    videos: [],
    audio: "/audio/giloy.wav"
  },
  {
    id: "shatavari",
    commonName: "Shatavari",
    botanicalName: "Asparagus racemosus",
    family: "Asparagaceae",
    habitat: "Subtropical India",
    description: "Climbing plant with needle-like leaves and tuberous roots. Known as the 'Queen of Herbs' for women's health.",
    medicinalUses: [
      "Supports female reproductive health",
      "Digestive tonic",
      "Enhances lactation",
      "Anti-aging properties",
      "Boosts immunity"
    ],
    partsUsed: ["Roots", "Leaves"],
    cultivation: "Sandy loam soil; partial shade; root propagation.",
    precautions: [
      "Avoid if allergic to asparagus",
      "May cause weight gain",
      "Consult doctor during hormone-sensitive conditions"
    ],
    ayushSystem: ["Ayurveda"],
    category: ["Digestive Health"],
    bodySystem: ["Musculoskeletal"],
    region: ["Subtropical"],
    image: shatavariImg,
    video: "/videos/shatavari.mp4",
    videos: [],
    audio: "/audio/shatavari.wav"
  },
  {
    id: "brahmi",
    commonName: "Brahmi",
    botanicalName: "Bacopa monnieri",
    family: "Plantaginaceae",
    habitat: "Wetlands and marshy areas",
    description: "Creeping herb with succulent leaves and small white flowers. Renowned for its cognitive-enhancing properties.",
    medicinalUses: [
      "Memory enhancer",
      "Anti-anxiety effects",
      "Neuroprotective properties",
      "Improves concentration",
      "Reduces mental fatigue"
    ],
    partsUsed: ["Whole plant", "Leaves"],
    cultivation: "Moist soil; partial sunlight; stem cuttings.",
    precautions: [
      "May cause digestive upset",
      "Can cause drowsiness",
      "Avoid during pregnancy"
    ],
    ayushSystem: ["Ayurveda"],
    category: ["Stress Relief"],
    bodySystem: ["Nervous"],
    region: ["Wetlands", "Tropical"],
    image: brahmiImg,
    video: "/videos/brahmi.mp4",
    videos: [],
    audio: "/audio/brahmi.wav"
  },
  {
    id: "peppermint",
    commonName: "Peppermint",
    botanicalName: "Mentha piperita",
    family: "Lamiaceae",
    habitat: "Temperate regions",
    description: "Aromatic perennial herb with purple flowers. A hybrid mint known for its refreshing flavor and medicinal uses.",
    medicinalUses: [
      "Digestive aid",
      "Headache relief",
      "Cold and flu treatment",
      "Relieves muscle pain",
      "Freshens breath"
    ],
    partsUsed: ["Leaves", "Oil"],
    cultivation: "Moist soil; partial sun; spreads via runners.",
    precautions: [
      "May worsen acid reflux",
      "Avoid applying near face of infants",
      "May interact with certain medications"
    ],
    ayushSystem: ["Unani", "Homeopathy"],
    category: ["Digestive Health", "Respiratory Health"],
    bodySystem: ["Respiratory", "Digestive"],
    region: ["Temperate"],
    image: peppermintImg,
    video: "/videos/peppermint.mp4",
    videos: [],
    audio: "/audio/peppermint.wav"
  },
  {
    id: "lemongrass",
    commonName: "Lemon Grass",
    botanicalName: "Cymbopogon citratus",
    family: "Poaceae",
    habitat: "Tropical regions",
    description: "Tall grass with long aromatic leaves. Widely used in cooking and traditional medicine for its citrusy fragrance.",
    medicinalUses: [
      "Stress relief",
      "Aids digestion",
      "Antimicrobial properties",
      "Reduces fever",
      "Relieves pain and inflammation"
    ],
    partsUsed: ["Leaves", "Stalks", "Oil"],
    cultivation: "Full sun; well-drained soil; division method.",
    precautions: [
      "May cause allergic reactions",
      "Avoid during pregnancy",
      "May lower blood sugar"
    ],
    ayushSystem: ["Ayurveda", "Siddha"],
    category: ["Stress Relief", "Digestive Health"],
    bodySystem: ["Respiratory"],
    region: ["Tropical"],
    image: lemongrassImg,
    video: "/videos/lemongrass.mp4",
    videos: [],
    audio: "/audio/lemongrass.wav"
  },
  {
    id: "cinnamon",
    commonName: "Cinnamon",
    botanicalName: "Cinnamomum verum",
    family: "Lauraceae",
    habitat: "Tropical humid climates",
    description: "Evergreen tree with aromatic bark. One of the oldest and most valuable spices used in medicine and cooking.",
    medicinalUses: [
      "Controls blood sugar levels",
      "Digestive aid",
      "Anti-inflammatory properties",
      "Antimicrobial effects",
      "Supports heart health"
    ],
    partsUsed: ["Bark", "Oil", "Leaves"],
    cultivation: "Fertile soil; partial shade; seeds or cuttings.",
    precautions: [
      "High doses may damage liver",
      "May lower blood sugar excessively",
      "Avoid cassia cinnamon in large amounts"
    ],
    ayushSystem: ["Ayurveda", "Unani", "Siddha"],
    category: ["Digestive Health"],
    bodySystem: ["Immune", "Digestive"],
    region: ["Tropical"],
    image: cinnamonImg,
    video: "/videos/cinnamon.mp4",
    videos: [],
    audio: "/audio/cinnamon.wav"
  },
  {
    id: "cardamom",
    commonName: "Cardamom",
    botanicalName: "Elettaria cardamomum",
    family: "Zingiberaceae",
    habitat: "Western Ghats of India",
    description: "Perennial herb producing aromatic pods. Known as the 'Queen of Spices' for its distinctive flavor and medicinal properties.",
    medicinalUses: [
      "Improves digestion",
      "Supports oral health",
      "Freshens breath",
      "Anti-nausea properties",
      "Detoxifying effects"
    ],
    partsUsed: ["Pods", "Seeds"],
    cultivation: "Shade-loving; moist soil; propagated by rhizomes.",
    precautions: [
      "May cause allergic reactions in some",
      "Avoid in gallstone conditions",
      "Use in moderation during pregnancy"
    ],
    ayushSystem: ["Ayurveda", "Unani"],
    category: ["Digestive Health"],
    bodySystem: ["Digestive"],
    region: ["Tropical"],
    image: cardamomImg,
    video: "/videos/cardamom.mp4",
    videos: [],
    audio: "/audio/cardamom.wav"
  },
  {
    id: "clove",
    commonName: "Clove",
    botanicalName: "Syzygium aromaticum",
    family: "Myrtaceae",
    habitat: "Tropical coastal areas",
    description: "Evergreen tree with dried flower buds used as spice. Known for its strong aroma and powerful antiseptic properties.",
    medicinalUses: [
      "Toothache relief",
      "Antiseptic properties",
      "Digestive aid",
      "Respiratory relief",
      "Anti-inflammatory effects"
    ],
    partsUsed: ["Flower buds", "Oil"],
    cultivation: "Humid climate; fertile soil; propagated by seeds.",
    precautions: [
      "Clove oil may irritate skin",
      "Avoid in bleeding disorders",
      "Not recommended for children internally"
    ],
    ayushSystem: ["Ayurveda", "Unani", "Siddha"],
    category: ["Digestive Health"],
    bodySystem: ["Respiratory"],
    region: ["Tropical"],
    image: cloveImg,
    video: "/videos/clove.mp4",
    videos: [],
    audio: "/audio/clove.wav"
  },
  {
    id: "black-pepper",
    commonName: "Black Pepper",
    botanicalName: "Piper nigrum",
    family: "Piperaceae",
    habitat: "Tropical forests",
    description: "Climbing vine with round berries. Known as the 'King of Spices' and widely used in culinary and medicinal applications.",
    medicinalUses: [
      "Digestive stimulant",
      "Cold relief",
      "Enhances nutrient absorption",
      "Anti-inflammatory properties",
      "Respiratory benefits"
    ],
    partsUsed: ["Berries", "Oil"],
    cultivation: "Partial shade; support trees; propagated by cuttings.",
    precautions: [
      "May cause gastric irritation",
      "Avoid in ulcer conditions",
      "May interact with certain medications"
    ],
    ayushSystem: ["Ayurveda", "Unani", "Siddha"],
    category: ["Digestive Health", "Respiratory Health"],
    bodySystem: ["Respiratory"],
    region: ["Tropical"],
    image: blackPepperImg,
    video: "/videos/black-pepper.mp4",
    videos: [],
    audio: "/audio/black-pepper.wav"
  },
  {
    id: "fenugreek",
    commonName: "Fenugreek",
    botanicalName: "Trigonella foenum-graecum",
    family: "Fabaceae",
    habitat: "Semi-arid regions",
    description: "Annual herb with trifoliate leaves and aromatic seeds. Widely used in cooking and traditional medicine.",
    medicinalUses: [
      "Controls blood sugar",
      "Improves digestion",
      "Enhances lactation",
      "Reduces inflammation",
      "Supports weight management"
    ],
    partsUsed: ["Seeds", "Leaves"],
    cultivation: "Full sun; seeds; moderate watering.",
    precautions: [
      "May lower blood sugar excessively",
      "Avoid during pregnancy",
      "May cause digestive discomfort"
    ],
    ayushSystem: ["Ayurveda", "Unani"],
    category: ["Digestive Health"],
    bodySystem: ["Immune", "Digestive"],
    region: ["Semi-arid", "Temperate"],
    image: fenugreekImg,
    video: "/videos/fenugreek.mp4",
    videos: [],
    audio: "/audio/fenugreek.wav"
  },
  {
    id: "arjuna",
    commonName: "Arjuna",
    botanicalName: "Terminalia arjuna",
    family: "Combretaceae",
    habitat: "Riverbanks in India",
    description: "Large deciduous tree with smooth pale bark. One of the most important herbs for cardiovascular health in Ayurveda.",
    medicinalUses: [
      "Cardiac tonic",
      "Antioxidant properties",
      "Supports heart health",
      "Blood pressure regulation",
      "Strengthens heart muscles"
    ],
    partsUsed: ["Bark"],
    cultivation: "Moist soil; seed propagation; prefers riverine areas.",
    precautions: [
      "May interact with heart medications",
      "Consult doctor before use",
      "Avoid during pregnancy"
    ],
    ayushSystem: ["Ayurveda"],
    category: ["Heart Health"],
    bodySystem: ["Musculoskeletal"],
    region: ["Tropical", "Subtropical"],
    image: arjunaImg,
    video: "/videos/arjuna.mp4",
    videos: [],
    audio: "/audio/arjuna.wav"
  },
  {
    id: "bael",
    commonName: "Bael",
    botanicalName: "Aegle marmelos",
    family: "Rutaceae",
    habitat: "Dry forests of India",
    description: "Medium tree with hard fruits. Sacred in Hindu tradition and valued for its digestive and gut health benefits.",
    medicinalUses: [
      "Treats digestive disorders",
      "Supports gut health",
      "Anti-diarrheal properties",
      "Cooling effect on body",
      "Immune support"
    ],
    partsUsed: ["Fruits", "Leaves", "Roots", "Bark"],
    cultivation: "Drought-resistant; propagated by seeds.",
    precautions: [
      "Unripe fruit may cause constipation",
      "Avoid excessive consumption",
      "May interact with diabetes medications"
    ],
    ayushSystem: ["Ayurveda", "Siddha"],
    category: ["Digestive Health"],
    bodySystem: ["Digestive"],
    region: ["Tropical", "Subtropical"],
    image: baelImg,
    video: "/videos/bael.mp4",
    videos: [],
    audio: "/audio/bael.wav"
  },
  {
    id: "manjistha",
    commonName: "Manjistha",
    botanicalName: "Rubia cordifolia",
    family: "Rubiaceae",
    habitat: "Himalayan foothills",
    description: "Climbing herb with red roots. One of the best blood-purifying herbs in Ayurveda, known for skin health benefits.",
    medicinalUses: [
      "Blood purifier",
      "Skin health",
      "Lymphatic cleansing",
      "Anti-inflammatory",
      "Wound healing"
    ],
    partsUsed: ["Roots", "Stems"],
    cultivation: "Well-drained soil; propagated by cuttings.",
    precautions: [
      "May cause red discoloration of urine",
      "Avoid during pregnancy",
      "May interact with blood thinners"
    ],
    ayushSystem: ["Ayurveda"],
    category: ["Skin Care"],
    bodySystem: ["Integumentary"],
    region: ["Himalayan", "Subtropical"],
    image: manjisthaImg,
    video: "/videos/manjistha.mp4",
    videos: [],
    audio: "/audio/manjistha.wav"
  },
  {
    id: "haritaki",
    commonName: "Haritaki",
    botanicalName: "Terminalia chebula",
    family: "Combretaceae",
    habitat: "Indian forests",
    description: "Large deciduous tree with yellowish fruits. Known as the 'King of Medicines' in Tibet and a key ingredient in Triphala.",
    medicinalUses: [
      "Digestive tonic",
      "Detoxification",
      "Constipation relief",
      "Anti-aging properties",
      "Supports eye health"
    ],
    partsUsed: ["Fruits"],
    cultivation: "Seed propagation; requires adequate sunlight.",
    precautions: [
      "May cause dehydration",
      "Avoid during pregnancy",
      "Not recommended for underweight individuals"
    ],
    ayushSystem: ["Ayurveda", "Siddha"],
    category: ["Digestive Health"],
    bodySystem: ["Digestive"],
    region: ["Tropical", "Subtropical"],
    image: haritakiImg,
    video: "/videos/haritaki.mp4",
    videos: [],
    audio: "/audio/haritaki.wav"
  },
  {
    id: "licorice",
    commonName: "Licorice",
    botanicalName: "Glycyrrhiza glabra",
    family: "Fabaceae",
    habitat: "Dry regions",
    description: "Perennial herb with sweet roots. One of the most widely used herbs in traditional medicine systems worldwide.",
    medicinalUses: [
      "Treats coughs and sore throat",
      "Ulcer healing",
      "Anti-inflammatory",
      "Adrenal support",
      "Skin soothing"
    ],
    partsUsed: ["Roots"],
    cultivation: "Sandy soil; propagated by root cuttings.",
    precautions: [
      "May raise blood pressure",
      "Avoid in hypertension",
      "Long-term use may cause potassium loss"
    ],
    ayushSystem: ["Ayurveda", "Unani"],
    category: ["Respiratory Health", "Anti-inflammatory"],
    bodySystem: ["Respiratory"],
    region: ["Temperate", "Semi-arid"],
    image: licoriceImg,
    video: "/videos/licorice.mp4",
    videos: [],
    audio: "/audio/licorice.wav"
  },
  {
    id: "indian-sarsaparilla",
    commonName: "Indian Sarsaparilla",
    botanicalName: "Hemidesmus indicus",
    family: "Apocynaceae",
    habitat: "Tropical forests",
    description: "Slender climbing shrub with aromatic roots. Known for its blood-purifying and cooling properties in Ayurveda.",
    medicinalUses: [
      "Blood purifier",
      "Cooling agent",
      "Skin disorders",
      "Digestive support",
      "Urinary health"
    ],
    partsUsed: ["Roots"],
    cultivation: "Partial shade; propagated by root cuttings.",
    precautions: [
      "Generally safe when used appropriately",
      "Avoid excessive consumption",
      "Consult doctor during pregnancy"
    ],
    ayushSystem: ["Ayurveda", "Siddha"],
    category: ["Skin Care"],
    bodySystem: ["Integumentary"],
    region: ["Tropical"],
    image: indianSarsaparillaImg,
    video: "/videos/indian-sarsaparilla.mp4",
    videos: [],
    audio: "/audio/indian-sarsaparilla.wav"
  },
  {
    id: "jatamansi",
    commonName: "Jatamansi",
    botanicalName: "Nardostachys jatamansi",
    family: "Caprifoliaceae",
    habitat: "Alpine regions of Himalayas",
    description: "Himalayan herb with aromatic rhizomes. Known for its calming and sedative properties in traditional medicine.",
    medicinalUses: [
      "Treats insomnia",
      "Nervous disorder relief",
      "Memory enhancement",
      "Stress reduction",
      "Hair health"
    ],
    partsUsed: ["Rhizomes", "Roots"],
    cultivation: "Cold climate; propagated by rhizomes.",
    precautions: [
      "May cause drowsiness",
      "Avoid before driving",
      "Not recommended during pregnancy"
    ],
    ayushSystem: ["Ayurveda"],
    category: ["Stress Relief"],
    bodySystem: ["Nervous"],
    region: ["Alpine", "Himalayan"],
    image: jatamansiImg,
    video: "/videos/jatamansi.mp4",
    videos: [],
    audio: "/audio/jatamansi.wav"
  },
  {
    id: "kutki",
    commonName: "Kutki",
    botanicalName: "Picrorhiza kurroa",
    family: "Plantaginaceae",
    habitat: "Himalayan slopes",
    description: "Small perennial alpine herb. One of the most important herbs for liver health and digestion in Ayurveda.",
    medicinalUses: [
      "Liver disorders",
      "Digestive support",
      "Immune modulation",
      "Fever reduction",
      "Respiratory health"
    ],
    partsUsed: ["Rhizomes", "Roots"],
    cultivation: "Well-drained rocky soil; propagated by rhizomes.",
    precautions: [
      "May cause diarrhea in high doses",
      "Avoid in intestinal obstruction",
      "Consult doctor before use"
    ],
    ayushSystem: ["Ayurveda"],
    category: ["Digestive Health"],
    bodySystem: ["Digestive"],
    region: ["Alpine", "Himalayan"],
    image: kutkiImg,
    video: "/videos/kutki.mp4",
    videos: [],
    audio: "/audio/kutki.wav"
  }
];

export const tours = [
  {
    id: "immunity-boosting",
    title: "Immunity Boosting Plants",
    description: "Explore plants that strengthen your immune system naturally",
    icon: "Shield",
    plantIds: ["tulsi", "ashwagandha", "turmeric", "amla", "giloy"],
    color: "primary"
  },
  {
    id: "digestive-health",
    title: "Digestive Health Plants",
    description: "Discover plants that promote healthy digestion",
    icon: "Leaf",
    plantIds: ["aloe-vera", "turmeric", "ginger", "peppermint", "cinnamon", "cardamom", "fenugreek", "bael", "haritaki", "kutki"],
    color: "accent"
  },
  {
    id: "skin-care",
    title: "Skin & Hair Care Plants",
    description: "Natural plants for radiant skin and healthy hair",
    icon: "Sparkles",
    plantIds: ["aloe-vera", "neem", "turmeric", "amla", "manjistha"],
    color: "secondary"
  },
  {
    id: "respiratory-care",
    title: "Respiratory Care Plants",
    description: "Plants that support respiratory health and breathing",
    icon: "Wind",
    plantIds: ["tulsi", "ginger", "peppermint", "black-pepper", "licorice"],
    color: "primary"
  },
  {
    id: "stress-relief",
    title: "Stress Relief Plants",
    description: "Plants that help calm the mind and reduce anxiety",
    icon: "Heart",
    plantIds: ["ashwagandha", "tulsi", "brahmi", "lemongrass", "jatamansi"],
    color: "accent"
  }
];

export const getPlantById = (id: string): Plant | undefined => {
  return plants.find(plant => plant.id === id);
};

export const searchPlants = (query: string): Plant[] => {
  const lowerQuery = query.toLowerCase();
  return plants.filter(plant =>
    plant.commonName.toLowerCase().includes(lowerQuery) ||
    plant.botanicalName.toLowerCase().includes(lowerQuery) ||
    plant.medicinalUses.some(use => use.toLowerCase().includes(lowerQuery)) ||
    plant.ayushSystem.some(system => system.toLowerCase().includes(lowerQuery))
  );
};
