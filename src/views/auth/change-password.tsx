// Formik
import { useFormik } from 'formik';

// Routes
import { useNavigate } from 'react-router';

// Components
import Button from '@/components/button/button';
import Input from '@/components/inputs/input';

// Schema
import changePasswordSchema from '@/schemas/change-password.schema';

// Constants
import routes from '@/constants/routes';

const ChangePassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { confirmPassword: '', password: '' },
    validationSchema: changePasswordSchema,
    onSubmit: value => {
      console.log('🚀 ~ ChangePassword ~ value:', value);
      navigate(routes.auth.login);
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-lg flex-col gap-y-6'
    >
      <p className='text-text-dark text-4xl font-semibold'>
        Change Your Password
      </p>

      <Input
        name='password'
        type='password'
        label='New Password'
        onBlur={handleBlur}
        value={values.password}
        error={errors.password}
        touched={touched.password}
        onChange={handleChange}
        placeholder='Enter your New Password'
      />

      <Input
        name='confirmPassword'
        type='password'
        label='Confirm Password'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.confirmPassword}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        placeholder='Enter your Confirm password'
      />

      <Button
        type='submit'
        text='Save'
      />
    </form>
  );
};

export default ChangePassword;
