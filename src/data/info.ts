// Типы
export interface ContactItem {
    icon: string;
    label: string;
    href: string;
    isEmail?: boolean;
    isPhone?: boolean;
}

export interface SimpleLink {
    label: string;
    href: string;
}

export interface HeaderProps {
    address: ContactItem;
    telegram: ContactItem;
    topLinks: ContactItem[];
    bottomLinks: SimpleLink[];
}

// Отдельные контакты
export const address: ContactItem = {
    icon: "map",
    label: "Архангельск, пр-кт Троицкий 37",
    href: "https://yandex.ru/maps/-/CHgwqXou",
};

export const telegram: ContactItem = {
    icon: "tg",
    label: "Telegram",
    href: "https://t.me/+79657333889",
};

export const vk: ContactItem = {
    icon: "vk",
    label: "VK",
    href: "https://vk.com/afishi29",
};

export const whatsapp: ContactItem = {
    icon: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/+79657333889",
};

export const mail: ContactItem = {
    icon: "mail",
    label: "af423889@gmail.com",
    href: "mailto:af423889@gmail.com",
    isEmail: true,
};

export const phone: ContactItem = {
    icon: "phone",
    label: "8 965 733-38-89",
    href: "tel:+79657333889",
    isPhone: true,
};

// Основной экспорт
export const headerData: HeaderProps = {
    address,
    telegram,
    topLinks: [telegram, vk, whatsapp, mail, phone],
    bottomLinks: [
        { label: "Главная", href: "/" },
        { label: "Услуги", href: "/services" },
        { label: "Наши работы", href: "/works" },
        { label: "Контакты", href: "/contacts" },
    ],
};