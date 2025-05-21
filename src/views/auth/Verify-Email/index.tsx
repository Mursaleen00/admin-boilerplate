// Formik
import { useFormik } from 'formik';

// Routes
import { useNavigate, useSearchParams } from 'react-router';

// Components
import Button from '@/components/button/button';
import OtpInput from '@/components/inputs/otp-input';

// Constants
import routes from '@/constants/routes';

// Toast
import toast from 'react-hot-toast';

// Mutation
// import { useVerifyOTPMutation } from '@/services/query-hooks/auth/verify-otp.mutation';
// import { useResendOTPMutation } from '@/services/query-hooks/auth/resend-otp.mutation';

const VerificationEmailView = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get('email') ?? '';

  // const { mutateAsync: verifyOTP, isPending } = useVerifyOTPMutation();
  // const { mutateAsync: resendOTP, isPending: resendPending } =
  //   useResendOTPMutation();

  const formik = useFormik({
    initialValues: { otp: '' },
    onSubmit: async ({ otp }) => {
      if (otp === '000000' && email) {
        toast.success('OTP is correct');
        navigate(routes.auth.changePassword);
      } else toast.error('OTP is incorrect');
    },
    // onSubmit: async ({ otp }) => {
    //   try {
    //     await verifyOTP({ email, otp });
    //     navigate(routes.auth.changePassword);
    //   } catch (error) {
    //     console.log(`Verify OTP Mutation Error:`, error);
    //   }
    // },
  });

  const { values, setFieldValue, handleSubmit } = formik;

  // const handleResend = async () => await resendOTP({ email });
  const handleResend = () => toast.success('OTP Resend Successfully');

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-lg flex-col gap-y-6'
    >
      <div className='flex items-center justify-between'>
        <p className='text-text-dark text-4xl font-semibold'>Verify Email</p>
        <p>OTP: 000000</p>
      </div>

      <OtpInput
        otp={values.otp}
        setFieldValue={otp => setFieldValue('otp', otp)}
      />

      <div className='w-full text-center'>
        Didn’t receive the code?{' '}
        <button
          className='text-primary cursor-pointer underline underline-offset-3'
          // disabled={resendPending}
          onClick={handleResend}
          type='button'
        >
          Resend Code
        </button>
      </div>

      <Button
        type='submit'
        text='Verify'
        // isPending={isPending}
      />
    </form>
  );
};

export default VerificationEmailView;
