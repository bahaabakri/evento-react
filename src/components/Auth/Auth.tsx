import CustomTextField from "@/UI/CustomTextField/CustomTextField";
import styles from "./Auth.module.scss";
import facebookIcon from "@/assets/auth/facebook.svg";
import googleIcon from "@/assets/auth/google.svg"
import type {TokenResponse } from "@react-oauth/google";
import appleIcon from "@/assets/auth/apple.svg";
import AuthDialog from "@/UI/AuthDialog/AuthDialog";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { LoginRegisterBodyRequest, LoginRegisterResponse, VerifyOtpResponse } from "@/types/auth.type";
import { useHttp } from "@/hooks/useHttp";
import { useGoogleLogin } from "@react-oauth/google";
import { setAuthToken } from "@/services/auth-cookie";
// yup validation schema
const loginRegisterFormValidationSchema = yup.object({
    email: yup.string().required('Email is required').email('Enter valid email address')
})
const Auth: FC = () => {
    const {request, error:errorMessage, loading:isSubmitButtonLoading} = useHttp()
    const navigate = useNavigate()
        const handleGoogleOAuthSuccess = async (tokenResponse: TokenResponse) => {
        const token = tokenResponse.access_token;
        console.log('GOOGLE LOGIN SUCCESS', token)
        // send google auth token to BE
        const res = await request<VerifyOtpResponse>('post', 'auth/google-login', {token})
        if(res) {
          console.log('GOOGLE LOGIN SUCCESS WITH BE', res)
          setAuthToken(res.access_token)
          navigate("/");
        }
    }
    const handleGoogleOAuthError = () => {
      console.log('Login Failed')
    }
    const loginWithGoogle = useGoogleLogin({
      onSuccess: async (tokenResponse:TokenResponse) => {
        handleGoogleOAuthSuccess(tokenResponse)
      },
      onError: handleGoogleOAuthError
    })
    /*** react hook form */
    const {
        control,
        // setValue,
        handleSubmit,
        formState: { isValid, isDirty }
    } = useForm({
        defaultValues: {
            email: '',
        },
        mode: "onBlur",
        resolver: yupResolver(loginRegisterFormValidationSchema)
    })

  const title = " Welcome on board.\n One place for all events in the world";
  const subtitle =
    "To subscribe to this website, please enter your email address here. We will send updates occasionally.";
  const footerContent = (
    <>
      <div className={styles["signin-with-title"]}>
        <div className="flex-grow border-b border-gray-400"></div>
        Or sign in with
        <div className="flex-grow border-b border-gray-400"></div>
      </div>
      <div className={styles["signin-with-websites"]}>
        <img src={facebookIcon} alt="" />
        <img src={googleIcon} alt="" onClick={() => loginWithGoogle()} />
        {/* <GoogleLogin ref={googleLoginButtonRef} onSuccess={handleGoogleOAuthSuccess} onError={handleGoogleOAuthError}></GoogleLogin> */}
        <img src={appleIcon} alt="" />
      </div>
    </>
  );
  /**
   * to handle submit
   * @param event
   */
  const onSubmit = async ({email}:LoginRegisterBodyRequest) => {      
        const res = await request<LoginRegisterResponse>('post', 'auth/loginRegister', {email})
        if (res) {
          navigate(`/auth/otp?email=${email}`)
        }
  };
  return (
    <AuthDialog
      title={title}
      subtitle={subtitle}
      footerContent={footerContent}
      errorMessage={errorMessage ?? undefined}
      isSubmitButtonDisabled={(isDirty && !isValid) || isSubmitButtonLoading}
      isSubmitButtonLoading={isSubmitButtonLoading}
      onSubmitDialog={handleSubmit(onSubmit)}
    >
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <CustomTextField
            {...field}
            placeholder="Enter Email here"
            textColor="rgba(156, 163, 175, var(--tw-border-opacity))"
            errorMessage={(fieldState.isTouched && fieldState.error) ? fieldState.error.message: ''}

          />
        )}
      />
    </AuthDialog>
  );
};
export default Auth;
