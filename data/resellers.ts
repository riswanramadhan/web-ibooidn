import { createWhatsappUrl } from "@/lib/constants";

export type Reseller = {
  location: string;
  name: string;
  url: string;
};

const resellerOrderMessage =
  "Halo Kak, saya dapat info dari website DekatLokal Iboo.idn. Saya ingin bertanya tentang pemesanan wellness shot.";

export const resellers: Reseller[] = [
  {
    location: "Rappocini",
    name: "Iboo Rappocini",
    url: createWhatsappUrl("6289644616600", resellerOrderMessage),
  },
  {
    location: "Tamalanrea",
    name: "Iboo Tamalanrea 1",
    url: createWhatsappUrl("6285256822011", resellerOrderMessage),
  },
  {
    location: "Tamalanrea",
    name: "Iboo.Tamalanrea 2",
    url: createWhatsappUrl("62811460899", resellerOrderMessage),
  },
  {
    location: "Sombaopu",
    name: "Iboo.Sombaopu",
    url: createWhatsappUrl("6285299707702", resellerOrderMessage),
  },
  {
    location: "Ujung Bulu",
    name: "Iboo.Ujung Bulu",
    url: createWhatsappUrl("6281387295777", resellerOrderMessage),
  },
  {
    location: "Sidrap",
    name: "Iboo.Sidrap",
    url: createWhatsappUrl("6285255222120", resellerOrderMessage),
  },
  {
    location: "Jeneponto",
    name: "Iboo.Jeneponto",
    url: createWhatsappUrl("6285225507375", resellerOrderMessage),
  },
  {
    location: "Labakkang",
    name: "Iboo.Labakkang",
    url: createWhatsappUrl("6285340838468", resellerOrderMessage),
  },
  {
    location: "Toraja",
    name: "Iboo.Toraja",
    url: createWhatsappUrl("6289670478077", resellerOrderMessage),
  },
];
