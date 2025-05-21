// React Query Imports
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// API & Service Imports
import URLS from '@/services/api-urls';
import { POST } from '@/services/axios-request-handler';

// Types Imports
import { CustomAxiosErrorType } from '@/types/custom-axios-error.type';
import { ChangePasswordPayloadT } from '@/types/payloads/change-password-payload.type';
import { ChangePasswordResT } from '@/types/res/change-password-res.type';

// Toast Import
import toast from 'react-hot-toast';

export const useChangePasswordMutation = (): UseMutationResult<
  ChangePasswordResT,
  Error,
  ChangePasswordPayloadT
> => {
  const ChangePasswordFn = async (
    payload: ChangePasswordPayloadT,
  ): Promise<ChangePasswordResT> => {
    const response = await POST(URLS.CHANGE_PASSWORD, payload);
    return response as ChangePasswordResT;
  };

  return useMutation({
    mutationFn: ChangePasswordFn,
    onSuccess: (message, variables, context) => {
      toast.success('ChangePassword Successfully');
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      toast.error(error?.response?.data?.message ?? 'ChangePassword Failed');
      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
