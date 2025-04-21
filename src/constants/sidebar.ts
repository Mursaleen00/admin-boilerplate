// ============== Icons ==============
import CalenderIcon from './../../public/icons/calendar.svg';
import DashboardIcon from './../../public/icons/dashboard.svg';
import StandupIcon from './../../public/icons/document.svg';
import ProjectIcon from './../../public/icons/project-icon.svg';

// ============== Colored Icons ==============
import CalenderColoredIcon from './../../public/icons/calendar-colored.svg';
import DashboardColoredIcon from './../../public/icons/dashboard-colored.svg';
import StandupColoredIcon from './../../public/icons/document-colored.svg';
import ProjectColoredIcon from './../../public/icons/project-icon-colored.svg';

// ============== Routes ==============
import routes from './routes';

// ============== Nav Items ==============
const sidebarTabs = [
  {
    name: 'Dashboard',
    link: routes.page.leaves,
    icon: CalenderIcon,
    coloredIcon: CalenderColoredIcon,
  },
  {
    name: 'Stand Ups',
    link: routes.page.allStandUps,
    icon: StandupIcon,
    coloredIcon: StandupColoredIcon,
  },
  {
    name: 'Check In',
    link: routes.page.checkIn,
    icon: DashboardIcon,
    coloredIcon: DashboardColoredIcon,
  },
  {
    name: 'Projects',
    link: routes.page.projects,
    icon: ProjectIcon,
    coloredIcon: ProjectColoredIcon,
  },
  {
    name: 'Report',
    link: routes.page.report,
    icon: StandupIcon,
    coloredIcon: StandupColoredIcon,
  },
];

export default sidebarTabs;
