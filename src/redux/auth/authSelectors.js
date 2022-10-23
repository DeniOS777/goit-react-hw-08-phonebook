export const selectorLoggedIn = state => state.auth.isLoggedIn;

export const selectorUserName = state => state.auth.user.name;

export const selectorRefreshUser = state => state.auth.isRefreshing;
