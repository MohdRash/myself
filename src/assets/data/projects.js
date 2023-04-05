import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

import loyalaeImg from '../images/projects/loyal-home.png';
import masjidImg from '../images/projects/masjiderp.png';
import scheduleImg from '../images/projects/schedule.png';
import layamrImg from '../images/projects/layamr.png';
import zestonImg from '../images/projects/zeston.png';
import zestonappImg from '../images/projects/zestonapp.png';
import careerproImg from '../images/projects/careerpro.png';
import infinitiImg from '../images/projects/infinit.png';
import gitImg from '../images/projects/gited.png';

const projects = [
  {
    id: uuidv4(),
    name: 'IPAS Oman',
    desc: 'Todo',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'IPAS Book',
    desc: 'Todo',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Loyalae',
    desc: 'Todo',
    img: loyalaeImg,
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
    img: masjidImg,
  },
  {
    id: uuidv4(),
    name: 'Schedule Any',
    desc: 'Todo',
    img: scheduleImg,
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
    img: layamrImg,
  },
  {
    id: uuidv4(),
    name: 'Zeston India',
    desc: 'Todo',
    img: zestonImg,
  },
  {
    id: uuidv4(),
    name: 'Zeston Manager',
    desc: 'Todo',
    img: zestonappImg,
  },
  {
    id: uuidv4(),
    name: 'Careerpro',
    desc: 'Todo',
    img: careerproImg,
  },
  {
    id: uuidv4(),
    name: 'Infiniti Healthstore',
    desc: 'Todo',
    img: infinitiImg,
  },
  {
    id: uuidv4(),
    name: 'Check My Repos!',
    desc: 'Some Amazing projects are in my repo, fork them for free!',
    img: gitImg,
  },
];

export default projects;
