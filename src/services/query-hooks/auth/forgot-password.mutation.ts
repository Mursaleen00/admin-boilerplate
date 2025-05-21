// React Query Imports
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// API & Service Imports
import URLS from '@/services/api-urls';
import { POST } from '@/services/axios-request-handler';

// Types Imports
import { CustomAxiosErrorType } from '@/types/custom-axios-error.type';
import { ForgotPasswordPayloadT } from '@/types/payloads/forgot-password-payload.type';
import { ForgotPasswordResT } from '@/types/res/forgot-password-res.type';

// Toast Import
import toast from 'react-hot-toast';

export const useForgotPasswordMutation = (): UseMutationResult<
  ForgotPasswordResT,
  Error,
  ForgotPasswordPayloadT
> => {
  const ForgotPasswordFn = async (
    payload: ForgotPasswordPayloadT,
  ): Promise<ForgotPasswordResT> => {
    const response = await POST(URLS.FORGOT_PASSWORD, payload);
    return response as ForgotPasswordResT;
  };

  return useMutation({
    mutationFn: ForgotPasswordFn,
    onSuccess: (message, variables, context) => {
      toast.success('ForgotPassword Successfully');
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      toast.error(error?.response?.data?.message ?? 'ForgotPassword Failed');
      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
// ForgotPassword
