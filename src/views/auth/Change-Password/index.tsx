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

// Toast
import toast from 'react-hot-toast';

// Mutation
// import { useChangePasswordMutation } from '@/services/query-hooks/auth/change-password.mutation';

const ChangePasswordView = () => {
  const navigate = useNavigate();

  // const { mutateAsync, isPending } = useChangePasswordMutation();

  const formik = useFormik({
    initialValues: { confirmPassword: '', password: '' },
    validationSchema: changePasswordSchema,
    onSubmit: () => {
      toast.success('Password Changed Successfully');
      navigate(routes.auth.login);
    },
    // onSubmit: async values => {
    //   const { password } = values;
    //   try {
    //     await mutateAsync({ password });
    //     navigate(routes.auth.login);
    //   } catch (error) {
    //     console.error(`Change Password Mutation Error:`, error);
    //   }
    // },
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
        onBlur={handleBlur}
        label='New Password'
        value={values.password}
        error={errors.password}
        onChange={handleChange}
        touched={touched.password}
        containerClassName='!w-full'
        placeholder='Enter your New Password'
      />

      <Input
        type='password'
        onBlur={handleBlur}
        name='confirmPassword'
        onChange={handleChange}
        label='Confirm Password'
        containerClassName='!w-full'
        value={values.confirmPassword}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        placeholder='Enter your Confirm password'
      />

      <Button
        text='Save'
        type='submit'
        // isPending={isPending}
      />
    </form>
  );
};

export default ChangePasswordView;
