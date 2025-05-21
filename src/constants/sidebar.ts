// ============== Icons ==============
import DashboardIcon from '@/assets/sidebar-icons/dashboard.svg';
import RevenueIcon from '@/assets/sidebar-icons/revenue.svg';
import UsersIcon from '@/assets/sidebar-icons/users.svg';

// ============== Colored Icons ==============
import DashboardColoredIcon from '@/assets/sidebar-icons/dashboard-colored.svg';
import RevenueColoredIcon from '@/assets/sidebar-icons/revenue-colored.svg';
import UsersColoredIcon from '@/assets/sidebar-icons/users-colored.svg';

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
    name: 'Revenue',
    link: revenue,
    icon: RevenueIcon,
    coloredIcon: RevenueColoredIcon,
  },
  {
    name: 'Users',
    link: users,
    icon: UsersIcon,
    coloredIcon: UsersColoredIcon,
  },
];

export default sidebarTabs;
