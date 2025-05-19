// React Query Imports
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// API & Service Imports
import URLS from '@/services/api-urls';
import { POST } from '@/services/axios-request-handler';

// Types Imports
import { CustomAxiosErrorType } from '@/types/custom-axios-error.type';
import { LoginPayloadT } from '@/types/payloads/login-payload.type';

// Toast Import
import { LoginResT } from '@/types/res/login-res.type';
import toast from 'react-hot-toast';

export const useLoginMutation = (): UseMutationResult<
  LoginResT,
  Error,
  LoginPayloadT
> => {
  const LoginFn = async (payload: LoginPayloadT): Promise<LoginResT> => {
    const response = await POST(URLS.LOGIN, payload);
    return response as LoginResT;
  };

  return useMutation({
    mutationFn: LoginFn,
    onSuccess: (message, variables, context) => {
      toast.success('Login Successfully');
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      toast.error(error?.response?.data?.message ?? 'Login Failed');

      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
