// Formik
import { useFormik } from 'formik';

// Routes
import { Link, useNavigate } from 'react-router';

// Components
import Button from '@/components/button/button';
import Input from '@/components/inputs/input';

// Schema
import loginSchema from '@/schemas/login.schema';

// Cookie
import Cookies from 'js-cookie';

// Constants
import routes from '@/constants/routes';

const LoginView = () => {
  const navigate = useNavigate();

  const { auth, page } = routes;

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: value => {
      console.log('🚀 ~ LoginView ~ value:', value);
      Cookies.set('token', 'abc123');
      navigate(page.dashboard);
      window.location.reload();
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
      />

      <Input
        name='password'
        type='password'
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
      />
    </form>
  );
};

export default LoginView;
