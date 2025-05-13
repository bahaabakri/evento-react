import AuthDialog from "@/UI/AuthDialog/AuthDialog";
import CustomOtpInput from "@/UI/CustomOtpInput/CustomOtpInput";
import api from "@/utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { FC, useEffect, useState } from "react";
import {useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";

// import OtpInput from 'react-otp-input';
// yup validation schema
const otpFormValidationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter valid email address"),
  otp: yup.string().required("OTP is required"),
});
const AuthOtp: FC = () => {
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");
    setValue("email", email || "");
  });
  /*** react hook form */
  const {
    setValue,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm({
    defaultValues: {
      otp: "",
      email: "",
    },
    mode: "onBlur",
    resolver: yupResolver(otpFormValidationSchema),
  });
  const title = " Verify your email.";
  const subtitle = "Please enter the code we just sent to your email address.";
  /**
   * to handle submit
   * @param event
   */
  const onSubmit = async (data: { otp: string; email: string }) => {
    setIsSubmitButtonLoading(true);
    setErrorMessage(undefined);
    try {
      await api.post("users/verify", data);
      setIsSubmitButtonLoading(false);
      navigate("/");
    } catch (err) {
        const error = err as AxiosError<{message:string}>;
        setErrorMessage(error?.response?.data?.message || 'Something went wrong!')
        setIsSubmitButtonLoading(false)
    }
  };
  return (
    <AuthDialog
      title={title}
      subtitle={subtitle}
      onSubmitDialog={handleSubmit(onSubmit)}
      errorMessage={errorMessage}
      isSubmitButtonDisabled={(isDirty && !isValid) || isSubmitButtonLoading}
      isSubmitButtonLoading={isSubmitButtonLoading}
    >
          <CustomOtpInput
            length={6}
            onChange={(otp) => {
                if (otp.length >= 6) {
                    setValue('otp', otp)
                }
            }}
            maxWidth={48}
            textColor="rgba(156, 163, 175, var(--tw-border-opacity))"
            // errorMessage={
            //   fieldState.isTouched && fieldState.error
            //     ? fieldState.error.message
            //     : ""
            // }
          />
    </AuthDialog>
  );
};

export default AuthOtp;
