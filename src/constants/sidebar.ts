// ============== Icons ==============
import ComponentsIcon from '@/assets/sidebar-icons/components.svg';
import DashboardIcon from '@/assets/sidebar-icons/dashboard.svg';
import RevenueIcon from '@/assets/sidebar-icons/revenue.svg';
import UsersIcon from '@/assets/sidebar-icons/users.svg';

// ============== Colored Icons ==============
import ComponentsColoredIcon from '@/assets/sidebar-icons/components-colored.svg';
import DashboardColoredIcon from '@/assets/sidebar-icons/dashboard-colored.svg';
import RevenueColoredIcon from '@/assets/sidebar-icons/revenue-colored.svg';
import UsersColoredIcon from '@/assets/sidebar-icons/users-colored.svg';

// ============== Routes ==============
import routes from './routes';

const {
  page: { dashboard, users, revenue, components },
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
  {
    name: 'Components',
    link: components,
    icon: ComponentsIcon,
    coloredIcon: ComponentsColoredIcon,
  },
];

export default sidebarTabs;
