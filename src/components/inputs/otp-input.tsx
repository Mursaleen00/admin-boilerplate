import { Dispatch, SetStateAction } from 'react';
import OTPInput from 'react-otp-input';

interface OtpInputProps {
  otp: string;
  setFieldValue: Dispatch<SetStateAction<string>>;
}

const OtpInput: React.FC<OtpInputProps> = ({ otp, setFieldValue }) => {
  return (
    <OTPInput
      value={otp}
      onChange={value => setFieldValue(value)}
      containerStyle={{
        justifyContent: 'center',
        width: 'full',
      }}
      numInputs={6}
      renderSeparator={<span></span>}
      renderInput={props => <input {...props} />}
      inputStyle={{
        width: '50px',
        height: '55px',
        margin: '0 0.2rem',
        fontSize: '1.5rem',
        borderRadius: '10px',
        backgroundColor: '#F2F4F7',
        textAlign: 'center',
      }}
      shouldAutoFocus
      inputType='tel'
    />
  );
};

export default OtpInput;
