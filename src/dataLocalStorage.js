/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
// import { FaRegCheckCircle, FaPlusCircle } from 'react-icons/fa';
import men from './images/aside-info/men.png';
import plane from './images/aside-info/plane.png';
import eye from './images/aside-info/eye.png';
// import MessButtonBlock from './messButtonBlock';
// import MessAdmin from './messAdminMes';
import robert from './images/main-section/robert.png';
import victoria from './images/main-section/victoria.png';
import joseph from './images/main-section/joseph.png';
// import MemberRowRows from './memberRowRows';
import gravityPsd from './images/main-section/IMG1.jpg';
import psdFoil from './images/main-section/IMG2.jpg';
import woodLogo from './images/main-section/IMG3.jpg';

const data = {
    profile: {
        name: ' Mysak Maksym',
        position: 'Admin Manager',
    },
    socPart: [
        {
            foto: men,
            firstRow: '26k+',
            secondRow: '+14',
        },
        {
            foto: plane,
            firstRow: '1095',
            secondRow: '+56',
        },
        {
            foto: eye,
            firstRow: '428',
            secondRow: '+38',
        },
    ],
    dashboardInfoToday: [
        {
            textCircle: '16k',
            strokeDasharray: '130',
            strokeDashoffset: '1',
            title: 'Total balance',
            percent: '+43%',
        },
        {
            textCircle: '194',
            strokeDasharray: '65%',
            strokeDashoffset: '50%',
            title: 'New members',
            percent: '+65%',
        },
        {
            textCircle: '76',
            strokeDasharray: '25%',
            strokeDashoffset: '50%',
            title: 'New orders',
            percent: '+25%',
        },
    ],
    dashboardInfoYesterday: [
        {
            textCircle: '22k',
            strokeDasharray: '160',
            strokeDashoffset: '1',
            title: 'Total balance',
            percent: '+67%',
        },
        {
            textCircle: '144',
            strokeDasharray: '60',
            strokeDashoffset: '50%',
            title: 'New members',
            percent: '+60%',
        },
        {
            textCircle: '60',
            strokeDasharray: '25%',
            strokeDashoffset: '50%',
            title: 'New orders',
            percent: '+55%',
        },
    ],
    smallSvgInPieChartBlock: [
        {
            color: 'rgba(0, 171, 255, 1)',
            percent: '43%',
            text: 'Members',
        },
        {
            color: 'rgba(81, 238, 7, 1)',
            percent: '36%',
            text: 'Aderss',
        },
        {
            color: 'rgba(241, 5, 5, 1)',
            percent: '21%',
            text: 'Guests',
        },
    ],
    users: [
        {
            id: 0,
            photo: victoria,
            name: 'Victoria Campel',
            time: 'twitter / 6 hours ago',
            messTxt: 'elit. A ab ipsam repellendus vero! Accusantium animi architecto at dicta, doloribus, expedita illum itaque iusto laboriosam obcaecati, placeat qui rem soluta tempore!',
            messbutt: true,
            adminMess: false,
            location: ' Manhathan, United State',
            memberRows: true,
            email: 'VictoriaCampel@contact.com',
            site: 'www.companyname.com',
            company: 'CompanyName',
            plan: 'Premium',
            messages: '16',
        },
        {
            id: 1,
            photo: joseph,
            name: 'Jozef Lewis',
            time: 'twitter / 2 day ago',
            messTxt:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam fuga ex dolorum neque eligendi ducimus enim sunt ipsam architecto molestiae!',
            location: 'London, United Kingdom',
            // memberIcon: <FaPlusCircle size="24px" />,
            messbutt: false,
            adminMess: false,
            memberRows: false,
            email: 'JozefLevis@contact.com',
            site: 'www.companyname.com',
            company: 'CompanyName',
            plan: 'Classic',
            messages: '4',
        },
        {
            id: 2,
            photo: robert,
            name: 'Robert Smith',
            time: 'twitter / 2 days ago',
            messTxt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam fuga ex dolorum neque eligendi ducimus enim sunt ipsam architecto molestiae!',
            adminMess: true,
            location: ' Manhathan, United State',
            messbutt: false,
            memberRows: false,
            email: 'RobertSmith@contact.com',
            site: 'www.companyname.com',
            company: 'CompanyName',
            plan: 'Premium',
            messages: '67',
        },
    ],
    dataInMediaTableBlock: [
        {
            imgSrc: gravityPsd,
            descriptinTitle: 'Gravity PSD B-Cards',
            descriptionText: 'The classic apeach...',
            dateYear: '26 Feb,2014',
            dateTime: '15:20',
        },
        {
            imgSrc: psdFoil,
            descriptionTitle: 'PSD Foll Sticker',
            descriptionText: 'Lorem ipsum dolor sit amet....',
            dateYear: '20 Feb,2014',
            dateTime: '11:03',
        },
        {
            imgSrc: woodLogo,
            descriptionTitle: 'Wood Burning Logo',
            descriptionText: 'A fresh looking wood...',
            dateYear: '26 Feb,2014',
            dateTime: '15:20',
        },
    ],

};
const dataJSON = JSON.stringify(data);

localStorage.setItem('data', dataJSON);
