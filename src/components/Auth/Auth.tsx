import CustomTextField from "@/UI/CustomTextField/CustomTextField";
import styles from "./Auth.module.scss";
import facebookIcon from '@/assets/auth/facebook.svg'
import googleIcon from '@/assets/auth/google.svg'
import appleIcon from '@/assets/auth/apple.svg'
import AuthDialog from "@/UI/AuthDialog/AuthDialog";
const Auth = () => {
    const title = ' Welcome on board.\n One place for all events in the world';
    const subtitle = 'To subscribe to this website, please enter your email address here. We will send updates occasionally.' ;
    const footerContent = 
    <>
        <div className={styles['signin-with-title']}>
            <div className="flex-grow border-b border-gray-400"></div>
            Or sign in with
            <div className="flex-grow border-b border-gray-400"></div>
        </div>
        <div className={styles['signin-with-websites']}>
            <img src={facebookIcon} alt="" />
            <img src={googleIcon} alt="" />
            <img src={appleIcon} alt="" />
        </div>
    </>
    return (
        <AuthDialog title={title} subtitle={subtitle} footerContent={footerContent}>
        <CustomTextField 
            placeholder='Enter Email here' 
            textColor='rgba(156, 163, 175, var(--tw-border-opacity))'
          />
        </AuthDialog>
    )
}
export default Auth