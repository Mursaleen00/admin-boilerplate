// Axios Config
import axiosInstance from '@/config/axios.config';

// Cookie
import Cookies from 'js-cookie';

// ======================= GET =======================
export const GET = async (endPoint: string): Promise<unknown> => {
  const token = Cookies.get('token');
  if (!token) throw new Error('No token found');

  return new Promise((resolve, reject) => {
    axiosInstance
      .get(endPoint)
      .then(({ data }) => data && resolve(data))
      .catch((error: Error) => reject(error));
  });
};

// ======================= POST =======================
export const POST = async (
  endPoint: string,
  data: Array<unknown> | Record<string, never> | unknown = {},
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(endPoint, data)
      .then(({ data }) => data && resolve(data))
      .catch((error: Error) => reject(error));
  });
};

// ======================= PUT =======================
export const PUT = async (
  endPoint: string,
  data: Array<unknown> | Record<string, never> | unknown = {},
): Promise<unknown> =>
  new Promise((resolve, reject) => {
    axiosInstance
      .put(endPoint, data)
      .then(({ data }) => data && resolve(data))
      .catch((error: Error) => reject(error));
  });

// ======================= PATCH =======================
export const PATCH = async (
  endPoint: string,
  data: unknown,
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(endPoint, data)
      .then(({ data }) => data && resolve(data))
      .catch((error: Error) => reject(error));
  });
};

// ======================= DELETE =======================
export const DELETE = async (
  endPoint: string,
  data?: unknown,
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(endPoint, { data })
      .then(({ data }) => data && resolve(data))
      .catch((error: Error) => reject(error));
  });
};
