// Formik
import { useFormik } from 'formik';

// Routes
import { useNavigate } from 'react-router';

// Components
import Button from '@/components/button/button';
import Input from '@/components/inputs/input';

// Schema
import ForgotPasswordSchema from '@/schemas/forgot-password.schema';

// Constants
import routes from '@/constants/routes';

// Toast
import toast from 'react-hot-toast';

// Mutation
// import { useForgotPasswordMutation } from '@/services/query-hooks/auth/forgot-password.mutation';

const ForgotPasswordView = () => {
  const navigate = useNavigate();

  // const { mutateAsync, isPending } = useForgotPasswordMutation();

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: ForgotPasswordSchema,
    onSubmit: ({ email }) => {
      toast.success('Email sent successfully');
      navigate(`${routes.auth.verifyEmail}?email=${email}`);
    },
    // onSubmit: async ({ email }) => {
    //   const res = await mutateAsync({ email });
    //   if (res) navigate(`${routes.auth.verifyEmail}?email=${email}`);
    // },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-lg flex-col gap-y-6'
    >
      <p className='text-text-dark text-4xl font-semibold'>Forgot Password</p>

      <Input
        type='email'
        name='email'
        label='Email'
        onBlur={handleBlur}
        error={errors.email}
        value={values.email}
        touched={touched.email}
        onChange={handleChange}
        placeholder='Enter your email'
      />

      <Button
        type='submit'
        text='Verify'
        // isPending={isPending}
      />
    </form>
  );
};

export default ForgotPasswordView;
