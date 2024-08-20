export const isTokenExpired = (token: string) => {
  const { exp } = JSON.parse(
    decodeURIComponent(escape(atob(token.split('.')[1])))
  );
  return exp * 1000 < new Date().getTime();
}