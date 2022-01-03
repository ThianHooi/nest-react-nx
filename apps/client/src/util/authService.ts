import Cookie from 'js-cookie';

// save the token and user into the cookies and expired in 7 days
export const setUserSession = (token: string, user: any) => {
  Cookie.set('token', JSON.stringify(token), { expires: 7 });
  Cookie.set('user', JSON.stringify(user), { expires: 7 });
};

// return the user data from the cookies
export const getUser = () => {
  const userStr = Cookie.get('user');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

// return the token from the cookies
export const getToken = () => Cookie.get('token') || null;

// remove the token and user from the cookies
export const removeUserSession = () => {
  Cookie.remove('token');
  Cookie.remove('user');
};
