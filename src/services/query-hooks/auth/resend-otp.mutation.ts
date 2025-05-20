// React Query Imports
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// API & Service Imports
import URLS from '@/services/api-urls';
import { POST } from '@/services/axios-request-handler';

// Types Imports
import { CustomAxiosErrorType } from '@/types/custom-axios-error.type';

// Toast Import
import { ResendOTPPayloadT } from '@/types/payloads/resend-otp-payload.type';
import { ResendOTPResT } from '@/types/res/resend-otp-res.type';
import toast from 'react-hot-toast';
// Resend
export const useResendOTPMutation = (): UseMutationResult<
  ResendOTPResT,
  Error,
  ResendOTPPayloadT
> => {
  const ResendOTPFn = async (
    payload: ResendOTPPayloadT,
  ): Promise<ResendOTPResT> => {
    const response = await POST(URLS.RESEND_OTP, payload);
    return response as ResendOTPResT;
  };

  return useMutation({
    mutationFn: ResendOTPFn,
    onSuccess: (message, variables, context) => {
      toast.success('Resend OTP Successfully');
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      toast.error(error?.response?.data?.message ?? 'OTP Resending Failed');
      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
