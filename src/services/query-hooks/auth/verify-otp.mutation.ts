// React Query Imports
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// API & Service Imports
import URLS from '@/services/api-urls';
import { POST } from '@/services/axios-request-handler';

// Types Imports
import { CustomAxiosErrorType } from '@/types/custom-axios-error.type';
import { VerifyOTPPayloadT } from '@/types/payloads/verify-otp-payload.type';
import { VerifyOTPResT } from '@/types/res/verify-otp-res.type';

// Toast Import
import toast from 'react-hot-toast';

export const useVerifyOTPMutation = (): UseMutationResult<
  VerifyOTPResT,
  Error,
  VerifyOTPPayloadT
> => {
  const VerifyOTPFn = async (
    payload: VerifyOTPPayloadT,
  ): Promise<VerifyOTPResT> => {
    const response = await POST(URLS.VERIFY_OTP, payload);
    return response as VerifyOTPResT;
  };

  return useMutation({
    mutationFn: VerifyOTPFn,
    onSuccess: (message, variables, context) => {
      toast.success('Email Verified Successfully');
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      toast.error(
        error?.response?.data?.message ?? 'Email Verification Failed',
      );
      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
