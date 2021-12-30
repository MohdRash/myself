import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'IPAS Oman',
    desc: 'Todo',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Loyalae',
    desc: 'Todo',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Mahalo India',
    desc: 'Todo',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Loha steels',
    desc: 'Todo',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Masjid ERP',
    desc: 'Todo',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Schedule Any',
    desc: 'Todo',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Astshelving',
    desc: 'Todo',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Layamr',
    desc: 'Todo',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Zeston India',
    desc: 'Todo',
    img: ProjectImg,
  },
];

export default projects;
