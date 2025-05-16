// ============== Icons ==============
import DashboardIcon from '@/../public/sidebar-icons/dashboard.svg';
import RevenueIcon from '@/../public/sidebar-icons/revenue.svg';
import UsersIcon from '@/../public/sidebar-icons/users.svg';
// import ProjectIcon from '@/../public/sidebar-icons/project-icon.svg';

// ============== Colored Icons ==============
import DashboardColoredIcon from '@/../public/sidebar-icons/dashboard-colored.svg';
import RevenueColoredIcon from '@/../public/sidebar-icons/revenue-colored.svg';
import UsersColoredIcon from '@/../public/sidebar-icons/users-colored.svg';
// import ProjectColoredIcon from '@/../public/sidebar-icons/project-icon-colored.svg';

// ============== Routes ==============
import routes from './routes';

const {
  page: { dashboard, users, revenue },
} = routes;

// ============== Nav Items ==============
const sidebarTabs = [
  {
    name: 'Dashboard',
    link: dashboard,
    icon: DashboardIcon,
    coloredIcon: DashboardColoredIcon,
  },
  {
    name: 'Users',
    link: users,
    icon: UsersIcon,
    coloredIcon: UsersColoredIcon,
  },
  {
    name: 'Revenue',
    link: revenue,
    icon: RevenueIcon,
    coloredIcon: RevenueColoredIcon,
  },
  // {
  //   name: 'Projects',
  //   link: projects,
  //   icon: ProjectIcon,
  //   coloredIcon: ProjectColoredIcon,
  // },
  // {
  //   name: 'Report',
  //   link: report,
  //   icon: StandupIcon,
  //   coloredIcon: StandupColoredIcon,
  // },
];

export default sidebarTabs;
