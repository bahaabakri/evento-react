import CustomTextField from "@/UI/CustomTextField/CustomTextField";
import styles from "./Auth.module.scss";
import facebookIcon from "@/assets/auth/facebook.svg";
import googleIcon from "@/assets/auth/google.svg";
import appleIcon from "@/assets/auth/apple.svg";
import AuthDialog from "@/UI/AuthDialog/AuthDialog";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "@/utils/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
// yup validation schema
const loginRegisterFormValidationSchema = yup.object({
    email: yup.string().required('Email is required').email('Enter valid email address')
})
const Auth: FC = () => {
    const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const navigate = useNavigate()
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
        <img src={googleIcon} alt="" />
        <img src={appleIcon} alt="" />
      </div>
    </>
  );
  /**
   * to handle submit
   * @param event
   */
  const onSubmit = async (data:{email:string}) => {
        setIsSubmitButtonLoading(true)
        setErrorMessage(undefined)
        try {
            await api.post('auth/loginRegister', {email: data.email})
            setIsSubmitButtonLoading(false)
            navigate(`/auth/otp?email=${data.email}`)
        } 
        catch(err) {
            const error = err as AxiosError<{message:string}>;
            setErrorMessage(error?.response?.data?.message || 'Something went wrong!')
            setIsSubmitButtonLoading(false)
        }
    
  };
  return (
    <AuthDialog
      title={title}
      subtitle={subtitle}
      footerContent={footerContent}
      errorMessage={errorMessage}
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
