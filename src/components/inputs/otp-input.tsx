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
        width: '36px',
        height: '36px',
        margin: '0 0.2rem',
        fontSize: '20px',
        borderRadius: '6px',
        backgroundColor: '#fff',
        textAlign: 'center',
        border: '1px solid #dcdfe4',
        outline: 'none',
      }}
      shouldAutoFocus
      inputType='tel'
    />
  );
};

export default OtpInput;
