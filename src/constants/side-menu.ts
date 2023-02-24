import { FaNewspaper, FaDownload, FaUser, FaCog, FaTrophy } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SideMenu {
  uri: string;
  name: string;
  Icon: IconType;
}

export const sideMenu: SideMenu[] = [
  {
    uri: '/sign-in',
    name: 'Entrar',
    Icon: FaUser,
  },
  {
    uri: '/',
    name: 'Início',
    Icon: FaNewspaper,
  },
  {
    uri: '/downloads',
    name: 'Downloads',
    Icon: FaDownload,
  },
  {
    uri: '/ranking',
    name: 'Ranking',
    Icon: FaTrophy,
  },
];
