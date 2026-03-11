import thangkaSample from "@/assets/thangka-sample.png";
import thangkaManjushri from "@/assets/thangka-manjushri.jpg";
import thangkaAmitabha from "@/assets/thangka-amitabha.jpg";
import thangkaVairocana from "@/assets/thangka-vairocana.jpg";
import thangkaAcala from "@/assets/thangka-acala.jpg";
import thangkaWearable from "@/assets/thangka-wearable-1.jpg";

export interface Thangka {
  id: string;
  name: string;
  nameCn: string;
  deity: string;
  deityCn: string;
  type: "wearable" | "large";
  typeCn: string;
  size: string;
  year: string;
  image: string;
  description: string;
  deityInfo: {
    introduction: string;
    symbolism: string;
    mantra: string;
  };
}

export interface Deity {
  id: string;
  name: string;
  nameCn: string;
  description: string;
}

export const thangkas: Thangka[] = [
  {
    id: "manjushri-1",
    name: "Manjushri Bodhisattva",
    nameCn: "文殊菩萨",
    deity: "Manjushri",
    deityCn: "文殊菩萨",
    type: "large",
    typeCn: "大型唐卡",
    size: "90cm × 120cm",
    year: "2023",
    image: thangkaManjushri,
    description: "This exquisite thangka depicts Manjushri, the Bodhisattva of Wisdom, rendered in traditional Tibetan painting techniques with mineral pigments and gold leaf. The intricate details reflect months of devoted craftsmanship.",
    deityInfo: {
      introduction: "Manjushri is the embodiment of prajna (transcendent wisdom) of all the Buddhas. He is often depicted wielding a flaming sword that cuts through ignorance.",
      symbolism: "Manjushri represents the perfection of wisdom, discernment, and enlightened intelligence. His sword symbolizes the ability to cut through delusion.",
      mantra: "Om A Ra Pa Ca Na Dhih (嗡 阿 若 巴 佳 那 地)",
    },
  },
  {
    id: "amitabha-1",
    name: "Amitabha Buddha",
    nameCn: "阿弥陀佛",
    deity: "Amitabha",
    deityCn: "阿弥陀佛",
    type: "large",
    typeCn: "大型唐卡",
    size: "80cm × 110cm",
    year: "2022",
    image: thangkaAmitabha,
    description: "A magnificent depiction of Amitabha Buddha in deep meditation, painted with traditional mineral pigments on cotton canvas. The warm red and gold tones evoke the Pure Land of Sukhavati.",
    deityInfo: {
      introduction: "Amitabha is the Buddha of Infinite Light, presiding over the Western Pure Land (Sukhavati). He is one of the Five Dhyani Buddhas.",
      symbolism: "Amitabha represents infinite compassion and the promise of rebirth in the Pure Land for those who call upon his name with sincere devotion.",
      mantra: "Namo Amitabha Buddha (南无阿弥陀佛)",
    },
  },
  {
    id: "vairocana-1",
    name: "Vairocana Buddha",
    nameCn: "大日如来",
    deity: "Vairocana",
    deityCn: "大日如来",
    type: "large",
    typeCn: "大型唐卡",
    size: "100cm × 140cm",
    year: "2023",
    image: thangkaVairocana,
    description: "The supreme Vairocana Buddha depicted in the cosmic mudra of meditation, surrounded by an elaborate mandala. This large-format thangka represents the cosmic Buddha at the center of the Buddhist universe.",
    deityInfo: {
      introduction: "Vairocana is the cosmic or primordial Buddha, representing the dharma body (dharmakaya) of the historical Buddha.",
      symbolism: "Vairocana embodies the wisdom of the dharmadhatu — the wisdom of universal law. He represents the all-encompassing void and unity of all things.",
      mantra: "Om Vairocana Hum (嗡 毗卢遮那 吽)",
    },
  },
  {
    id: "acala-1",
    name: "Acala Vidyaraja",
    nameCn: "不动明王",
    deity: "Acala",
    deityCn: "不动明王",
    type: "large",
    typeCn: "大型唐卡",
    size: "70cm × 100cm",
    year: "2024",
    image: thangkaAcala,
    description: "A powerful depiction of Acala, the Immovable Wisdom King, wreathed in flames of purification. The dynamic composition captures the fierce compassion of this wrathful deity.",
    deityInfo: {
      introduction: "Acala (Fudō Myōō) is a wrathful deity who serves as a protector and remover of obstacles on the path to enlightenment.",
      symbolism: "His fierce appearance represents unwavering determination to destroy evil and protect the dharma. The flames symbolize purification of all defilements.",
      mantra: "Namah Samantavajranam Chanda Maharoshana (南无三满多 伐折罗 赧 含)",
    },
  },
  {
    id: "mandala-1",
    name: "Eight Auspicious Symbols Mandala",
    nameCn: "八吉祥曼荼罗",
    deity: "Multiple Deities",
    deityCn: "诸佛菩萨",
    type: "large",
    typeCn: "大型唐卡",
    size: "85cm × 85cm",
    year: "2024",
    image: thangkaSample,
    description: "A stunning mandala featuring the Eight Auspicious Symbols of Tibetan Buddhism, with guardian deities in each corner. This ceremonial thangka is painted with pure gold and mineral pigments.",
    deityInfo: {
      introduction: "This mandala contains the eight auspicious symbols (Ashtamangala) which represent the offerings made by celestial beings to Shakyamuni Buddha upon his enlightenment.",
      symbolism: "The eight symbols — parasol, golden fishes, treasure vase, lotus, conch shell, endless knot, victory banner, and dharma wheel — each represent aspects of the Buddhist teachings.",
      mantra: "Om Mani Padme Hum (嗡嘛呢叭咪吽)",
    },
  },
  {
    id: "wearable-avalokitesvara",
    name: "Wearable Avalokitesvara",
    nameCn: "佩戴观音菩萨",
    deity: "Avalokitesvara",
    deityCn: "观世音菩萨",
    type: "wearable",
    typeCn: "佩戴唐卡",
    size: "4cm × 5cm",
    year: "2024",
    image: thangkaWearable,
    description: "A miniature thangka pendant depicting Avalokitesvara (Guanyin), crafted with extraordinary precision. Designed to be worn as a sacred amulet, offering the protection and compassion of the Bodhisattva.",
    deityInfo: {
      introduction: "Avalokitesvara is the Bodhisattva of Compassion, known as Guanyin in Chinese Buddhism. They embody the compassion of all Buddhas.",
      symbolism: "Avalokitesvara represents infinite compassion and the willingness to help all sentient beings. The name means 'Lord who looks down' on the world with compassion.",
      mantra: "Om Mani Padme Hum (嗡嘛呢叭咪吽)",
    },
  },
];

export const deities: Deity[] = [
  { id: "manjushri", name: "Manjushri", nameCn: "文殊菩萨", description: "Bodhisattva of Wisdom" },
  { id: "amitabha", name: "Amitabha", nameCn: "阿弥陀佛", description: "Buddha of Infinite Light" },
  { id: "vairocana", name: "Vairocana", nameCn: "大日如来", description: "The Cosmic Buddha" },
  { id: "acala", name: "Acala", nameCn: "不动明王", description: "Immovable Wisdom King" },
  { id: "avalokitesvara", name: "Avalokitesvara", nameCn: "观世音菩萨", description: "Bodhisattva of Compassion" },
  { id: "samantabhadra", name: "Samantabhadra", nameCn: "普贤菩萨", description: "Bodhisattva of Universal Virtue" },
  { id: "akashagarbha", name: "Akashagarbha", nameCn: "虚空藏菩萨", description: "Bodhisattva of Boundless Space" },
  { id: "mahasthamaprapta", name: "Mahasthamaprapta", nameCn: "大势至菩萨", description: "Bodhisattva of Great Strength" },
];

export const zodiacBuddhaMap: Record<string, { buddha: string; buddhaCn: string; deityId: string }> = {
  "Rat": { buddha: "Avalokitesvara (Thousand-Armed)", buddhaCn: "千手观音菩萨", deityId: "avalokitesvara" },
  "Ox": { buddha: "Akashagarbha Bodhisattva", buddhaCn: "虚空藏菩萨", deityId: "akashagarbha" },
  "Tiger": { buddha: "Akashagarbha Bodhisattva", buddhaCn: "虚空藏菩萨", deityId: "akashagarbha" },
  "Rabbit": { buddha: "Manjushri Bodhisattva", buddhaCn: "文殊菩萨", deityId: "manjushri" },
  "Dragon": { buddha: "Samantabhadra Bodhisattva", buddhaCn: "普贤菩萨", deityId: "samantabhadra" },
  "Snake": { buddha: "Samantabhadra Bodhisattva", buddhaCn: "普贤菩萨", deityId: "samantabhadra" },
  "Horse": { buddha: "Mahasthamaprapta Bodhisattva", buddhaCn: "大势至菩萨", deityId: "mahasthamaprapta" },
  "Goat": { buddha: "Vairocana Buddha", buddhaCn: "大日如来", deityId: "vairocana" },
  "Monkey": { buddha: "Vairocana Buddha", buddhaCn: "大日如来", deityId: "vairocana" },
  "Rooster": { buddha: "Acala Vidyaraja", buddhaCn: "不动明王", deityId: "acala" },
  "Dog": { buddha: "Amitabha Buddha", buddhaCn: "阿弥陀佛", deityId: "amitabha" },
  "Pig": { buddha: "Amitabha Buddha", buddhaCn: "阿弥陀佛", deityId: "amitabha" },
};
