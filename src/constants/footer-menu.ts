import { FaCog } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface FooterMenu {
  uri: string;
  name: string;
  Icon: IconType;
}

export const footerMenu: FooterMenu[] = [
  {
    uri: '/settings',
    name: 'Configurações',
    Icon: FaCog,
  },
];
