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

const VerificationEmailView = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get('email');

  const formik = useFormik({
    initialValues: { otp: '' },
    onSubmit: async ({ otp }) => {
      if (otp === '000000' && email) {
        toast.success('OTP is correct');
        navigate(routes.auth.changePassword);
      } else toast.error('OTP is incorrect');
    },
  });

  const { values, setFieldValue, handleSubmit } = formik;

  const handleResend = () => console.log('Resend');

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

      <p className='w-full text-center'>
        Didn’t receive the code?{' '}
        <span
          className='text-primary cursor-pointer underline underline-offset-3'
          onClick={handleResend}
        >
          Resend Code
        </span>
      </p>

      <Button
        type='submit'
        text='Verify'
      />
    </form>
  );
};

export default VerificationEmailView;
