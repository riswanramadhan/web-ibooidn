export type Partner = {
  name: string;
  image: string;
  alt: string;
  cardClassName: string;
  imageClassName: string;
  width: number;
  height: number;
};

export const partners: Partner[] = [
  {
    name: "DekatLokal",
    image: "/images/dekat-lokal (1).png",
    alt: "Logo DekatLokal partner digital Iboo.idn",
    cardClassName: "",
    imageClassName: "w-56 h-24 object-contain",
    width: 224,
    height: 96,
  },
  {
    name: "Rumah BUMN Makassar",
    image: "/images/rumah-bumn (1).png",
    alt: "Logo Rumah BUMN Makassar pendukung Iboo.idn",
    cardClassName: "",
    imageClassName: "w-56 h-24 object-contain",
    width: 224,
    height: 96,
  },
  {
    name: "Bank BRI",
    image: "/images/bank-bri (2).png",
    alt: "Logo Bank BRI pendukung Iboo.idn",
    cardClassName: "",
    imageClassName: "w-56 h-24 object-contain",
    width: 224,
    height: 96,
  },
];
