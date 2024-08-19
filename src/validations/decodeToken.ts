type Token = {
  id: string;
  name: string;
  surname: string;
  country: string;
  role: 'admin' | 'user';
  exp: number;
  iat: number;
};

export const decodeToken = (token: string): Token => {
  return JSON.parse(
    decodeURIComponent(escape(atob(token.split('.')[1])))
  )
};
