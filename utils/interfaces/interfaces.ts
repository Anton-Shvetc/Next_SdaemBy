export interface IHeaderNavData {
  id: number
  item: string,
  path: string,
  isIcon?: boolean,
}
export interface IContacts {
  address: string;
  tel: string;
  mail: string;
  href: string;
  workTime: string;
  employer: string;
  ip: string;
}

export interface IFormFields {
  name: string;
  email: string;
  message: string;
  login: string;
  password: string;
  confirmPassword: string;
}

export interface INews {
  id: number;
  title: string;
  previewText: string;
  fullText: string;
  image: string;
  date: string;
}

export interface INews {
  id: number;
  title: string;
  previewText: string;
  fullText: string;
  image: string;
  date: string;
}

export interface IOwnerContacts {
  avatar: string;
  title: string;
  name: string;
  tel: string;
  viber: string;
  whatsapp: string;
  ownerEmail: string;
  mail: string;
}

export interface IResponseData {
  id: number;
  city: string;
  address: string;
  area: string;
  metro: string;
  room: string;
  image: string;
  square: string;
  price: string;
  capacity: string;
  label: string;
  type: string;
  description: string;
  ownerContacts: IOwnerContacts;
}

export interface ISelectOption {
  value: string;
  label: string;
  key?: string;
}

export interface IStateData {
  id: number | null;
  city: string;
  area: string;
  metro: string;
  type?: string;
  room: string;
  priceMin: string;
  priceMax: string;
  capacity: string;
}

export interface IPropsLogo {
  isText?: boolean;
}

export interface IListDropdown {
  title: string;
  isIcon?: boolean;
  list: {
    id: number;
    value: string;
    label: string;
    city: string;
    path: string;
  }[];
}
export interface IPropsDropdown {
  menu: IListDropdown;
}