import { useHttp } from "@/hooks/useHttp";
import { VerifyOtpRequest, VerifyOtpResponse } from "@/types/auth.type";
import AuthDialog from "@/UI/AuthDialog/AuthDialog";
import CustomOtpInput from "@/UI/CustomOtpInput/CustomOtpInput";
import { setAuthToken } from "@/services/auth-cookie";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
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
  const {request, error:errorMessage, loading:isSubmitButtonLoading} = useHttp()
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
  const onSubmit = async (data: VerifyOtpRequest) => {
      const res = await request<VerifyOtpResponse>("post", "auth/verify", data);
      if (res) {
        setAuthToken(res.access_token)
        navigate("/");
      }
  };
  return (
    <AuthDialog
      title={title}
      subtitle={subtitle}
      onSubmitDialog={handleSubmit(onSubmit)}
      errorMessage={errorMessage ?? undefined}
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
