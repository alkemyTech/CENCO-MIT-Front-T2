const baseUrl = import.meta.env.VITE_BACKEND_URL;
const login = import.meta.env.VITE_LOGIN_URL;
const users = import.meta.env.VITE_USERS_URL;

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const apiRequest = async (
  url: string,
  method: Method,
  body?: BodyInit,
  token?: string
) => {
  const headers: HeadersInit = {
    'Content-type': 'application/json; charset=UTF-8',
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  return fetch(url, {
    method,
    body,
    headers,
  });
};

export const userServices = {
  getAll: async (token: string, search?: string) => {
    const url = search
      ? `${baseUrl}/${users}search=${encodeURIComponent(search)}`
      : `${baseUrl}/${users}`;
    return apiRequest(url, 'GET', undefined, token);
  },
  getById: (token: string, id: string) => {
    const url = `${baseUrl}/${users}/${id}`;
    return apiRequest(url, 'GET', undefined, token);
  },
  getInfo: (token: string, id: string) => {
    const url = `${baseUrl}/${users}/${id}/info`;
    return apiRequest(url, 'GET', undefined, token);
  },
  create: (token: string, body: string) => {
    const url = `${baseUrl}/${users}`;
    return apiRequest(url, 'POST', body, token);
  },
  update: (token: string, id: string, body: string) => {
    const url = `${baseUrl}/${users}/${id}`;
    return apiRequest(url, 'PATCH', body, token);
  },
  updatePassword: (token: string, id: string, body: string) => {
    const url = `${baseUrl}/${users}/me/${id}`;
    return apiRequest(url, 'PATCH', body, token);
  },
  delete: (token: string, id: string) => {
    const url = `${baseUrl}/${users}/${id}`;
    return apiRequest(url, 'DELETE', undefined, token);
  },
};

export const authServices = {
  login: (body: string) => {
    const url = `${baseUrl}/${login}`;
    return apiRequest(url, 'POST', body);
  }
};
