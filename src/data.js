import { ChartIcon, Element, Home, Post } from "./assets/index";

export const menu = [
  {
    id: 1,

    listItems: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: Home,
      },
    ],
  },
  {
    id: 2,
    listItems: [
      {
        id: 2,
        title: "Cryptocurrencies",
        url: "/cryptocurrencies",
        icon: ChartIcon,
      },
      {
        id: 3,
        title: "Exchanges",
        url: "/exchanges",
        icon: Element,
      },
      {
        id: 4,
        title: "News",
        url: "/news",
        icon: Post,
      },
    ],
  },
];
