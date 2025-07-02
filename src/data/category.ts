import card from "../assets/images/services/base2.png";
import banner from "../assets/images/services/base1.png";
import sign from "../assets/images/services/base3.png";
import stand from "../assets/images/services/base5.png";
import suvenir from "../assets/images/services/base6.png";

type Category = {
  name: string;
  url: string;
  subcategories: { name: string; url: string }[];
  image: any;
};

export const categorySearchData: { categories: Category[] } = {
  categories: [
    {
      name: "Широкоформатная печать",
      url: "/services/wide-format-printing",
      subcategories: [
        { name: "Баннеры", url: "/pechat-bannerov" },
        { name: "Пленка", url: "/services/wide-format-printing/film" },
      ],
      image: banner,
    },
    {
      name: "Полиграфия",
      url: "/services/polygraphy",
      subcategories: [
        { name: "Визитки", url: "/services/polygraphy/business-cards" },
        { name: "Листовки", url: "/services/polygraphy/flyers" },
        { name: "Буклеты", url: "/services/polygraphy/booklets" },
        { name: "Календари", url: "/services/polygraphy/calendars" },
        { name: "Брошюры", url: "/services/polygraphy/brochures" },
        { name: "Наклейки", url: "/services/polygraphy/stickers" },
        { name: "Флаеры", url: "/services/polygraphy/leaflets" },
        { name: "Газеты", url: "/services/polygraphy/newspapers" },
        { name: "Плакаты", url: "/services/polygraphy/posters" },
      ],
      image: card,
    },
    {
      name: "Вывески",
      url: "/services/signage",
      subcategories: [
        { name: "Световые короба", url: "/services/signage/light-boxes" },
        { name: "Вывески", url: "/services/signage/signs" },
        { name: "Объемные буквы", url: "/services/signage/3d-letters" },
        { name: "Штендеры", url: "/services/signage/pavement-signs" },
      ],
      image: sign,
    },
    {
      name: "Таблички и стенды",
      url: "/services/plaques-and-stands",
      subcategories: [
        { name: "Таблички", url: "/services/plaques-and-stands/plaques" },
        { name: "Стенды", url: "/services/plaques-and-stands/stands" },
        { name: "Режим работы", url: "/services/plaques-and-stands/hours" },
        { name: "Ростовые фигуры", url: "/services/plaques-and-stands/life-size-figures" },
        { name: "Адресные таблички", url: "/services/plaques-and-stands/address-plaques" },
        { name: "Таблички со шрифтом Брайля", url: "/services/plaques-and-stands/braille-plaques" },
      ],
      image: stand,
    },
    {
      name: "Сувенирная продукция",
      url: "/services/souvenirs",
      subcategories: [
        { name: "Кружки", url: "/services/souvenirs/mugs" },
        { name: "Футболки", url: "/services/souvenirs/t-shirts" },
        { name: "Ручки", url: "/services/souvenirs/pens" },
        { name: "Брелоки", url: "/services/souvenirs/keychains" },
        { name: "Магниты", url: "/services/souvenirs/magnets" },
        { name: "Значки", url: "/services/souvenirs/badges" },
        { name: "Пакеты с логотипом", url: "/services/souvenirs/branded-bags" },
      ],
      image: suvenir,
    },
  ],
};