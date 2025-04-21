// Formik
import { useFormik } from 'formik';

// Routes
import { useNavigate, useSearchParams } from 'react-router';

// Components
import Button from '../../components/button/button';
import OtpInput from '../../components/inputs/otp-input';
import routes from '../../constants/routes';

const VerificationView = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get('email');

  const formik = useFormik({
    initialValues: { otp: '' },
    onSubmit: async values => {
      console.log({ values, email });
      navigate(routes.auth.changePassword);
    },
  });

  const { values, setFieldValue, handleSubmit } = formik;

  const handleResend = () => console.log('Resend');

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full flex-col gap-y-6'
    >
      <p className='text-text-dark text-4xl font-semibold'>Verify Email</p>

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

export default VerificationView;
