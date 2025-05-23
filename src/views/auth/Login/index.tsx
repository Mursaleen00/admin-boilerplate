// Formik
import { useFormik } from 'formik';

// Routes
import { Link } from 'react-router';

// Components
import Button from '@/components/button/button';
import Input from '@/components/inputs/input';

// Schema
import loginSchema from '@/schemas/login.schema';

// Cookie
import Cookies from 'js-cookie';

// Constants
import routes from '@/constants/routes';

// Toast
import toast from 'react-hot-toast';

// Mutation
// import { useLoginMutation } from '@/services/query-hooks/auth/login.mutation';

const LoginView = () => {
  const { auth } = routes;

  // const { mutateAsync, isPending } = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    // onSubmit: async ({ email, password }) => {
    //   try {
    //     const { token } = await mutateAsync({ email, password });
    //     Cookies.set('token', token);
    //     window.location.reload();
    //   } catch (error) {
    //     console.error(`Login Mutation Error:`, error);
    //   }
    // },
    onSubmit: () => {
      toast.success('Login Successfully');
      Cookies.set('token', 'lorem');
      setTimeout(() => window.location.reload(), 600);
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-lg flex-col gap-y-6'
    >
      <p className='text-text-dark text-4xl font-semibold'>Login</p>

      <Input
        type='email'
        name='email'
        label='Email'
        onBlur={handleBlur}
        value={values.email}
        error={errors.email}
        touched={touched.email}
        onChange={handleChange}
        placeholder='Enter your email'
        containerClassName='!w-full'
      />

      <Input
        containerClassName='!w-full'
        name='password'
        type='password'
        className='!w-full'
        label='Password'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        error={errors.password}
        touched={touched.password}
        placeholder='Enter your password'
      />

      <p className='text-text-dark text-end font-medium'>
        Forgot Your{' '}
        <Link
          to={auth.forgotPassword}
          className='text-primary underline'
        >
          Password
        </Link>{' '}
        ?
      </p>

      <Button
        type='submit'
        text='Login'
        // isPending={isPending}
      />
    </form>
  );
};

export default LoginView;
