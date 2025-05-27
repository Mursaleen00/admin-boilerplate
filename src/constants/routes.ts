const routes = {
  auth: {
    login: '/login',
    forgotPassword: '/forgot-password',
    verifyEmail: '/verify-email',
    changePassword: '/change-password',
  },
  page: {
    // ================= Dashboard =================
    dashboard: '/dashboard',
    // =============================================

    // =================== Users ===================
    users: '/users',
    usersEdit: '/users/edit',
    usersDetails: '/users/:id',
    // =============================================

    // =================== Products ================
    revenue: '/revenue',
    // =============================================

    // =================== Components ==============
    components: '/components',
    // =============================================
  },
};

export default routes;
