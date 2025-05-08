import AuthDialog from '@/UI/AuthDialog/AuthDialog';
import CustomOtpInput from '@/UI/CustomOtpInput/CustomOtpInput';
import { FC } from 'react';
// import OtpInput from 'react-otp-input';
const AuthOtp: FC = () => {
    // const [otp, setOtp] = useState<string>('');
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setOtp(e.target.value);
    // };
    // // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('OTP Submitted:', otp);
    //     // Add your OTP verification logic here
    // };
    const title = ' Verify your email.';
    const subtitle = 'Please enter the code we just sent to your email address.' ;
    return (
        <AuthDialog title={title} subtitle={subtitle}>
                <CustomOtpInput
                length={6}
                onChange={(otp) => console.log('Entered OTP:', otp)}
                maxWidth={48}
                textColor="rgba(156, 163, 175, var(--tw-border-opacity))"
                />
        </AuthDialog>
    );
};

export default AuthOtp;